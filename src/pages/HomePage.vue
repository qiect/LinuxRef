<template>
  <div class="min-h-screen bg-[#0D1117] text-gray-200 flex" @keydown="handleKeydown">
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#161B22] border border-[#30363D] rounded-lg text-gray-400 hover:text-gray-200"
    >
      <X v-if="sidebarOpen" :size="20" />
      <Menu v-else :size="20" />
    </button>

    <aside
      :class="[
        'fixed lg:static inset-y-0 left-0 z-40 w-56 bg-[#0D1117] border-r border-[#30363D] p-4 pt-16 lg:pt-4 transform transition-transform duration-300 lg:transform-none',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <h2 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
        分类
      </h2>
      <CategoryNav
        :selectedCategory="selectedCategory"
        @update:selectedCategory="selectedCategory = $event"
      />
    </aside>

    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/50 z-30 lg:hidden"
      @click="sidebarOpen = false"
    />

    <main class="flex-1 p-4 lg:p-8 max-w-5xl mx-auto w-full" tabindex="-1">
      <DailyCommand />
      <div class="mb-8">
        <SearchBar
          ref="searchBarRef"
          :searchQuery="searchQuery"
          @update:searchQuery="searchQuery = $event"
        />
      </div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-gray-300">
          {{ selectedCategory === 'favorites' ? '我的收藏' : '' }}
          {{ filteredCommands.length }} 个命令
        </h2>
        <div class="hidden sm:flex items-center gap-2 text-xs text-gray-600">
          <kbd class="px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]">/</kbd>
          <span>搜索</span>
          <kbd class="px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]">↑↓</kbd>
          <span>导航</span>
          <kbd class="px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]">Enter</kbd>
          <span>查看</span>
          <kbd class="px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]">Esc</kbd>
          <span>清空</span>
        </div>
      </div>
      <div v-if="filteredCommands.length > 0" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <div
          v-for="(cmd, idx) in filteredCommands"
          :key="cmd.name"
          :ref="(el) => { if (el) cardRefs[idx] = el as HTMLElement }"
          @click="$router.push(`/command/${cmd.name}`)"
          :class="[
            'cursor-pointer bg-[#161B22] border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(88,166,255,0.12)] hover:border-[#58A6FF]/40 group relative',
            focusedIndex === idx ? 'border-[#58A6FF]/60 shadow-[0_0_20px_rgba(88,166,255,0.15)] -translate-y-1' : 'border-[#30363D]'
          ]"
        >
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="text-[#7EE787] font-mono text-lg font-bold group-hover:text-[#58A6FF] transition-colors">
                $ {{ cmd.name }}
              </span>
              <span
                v-if="cmd.dangerLevel === 'danger'"
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/30"
              >
                <AlertTriangle :size="10" />
                危险
              </span>
              <span
                v-else-if="cmd.dangerLevel === 'warning'"
                class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F0883E]/15 text-[#F0883E] border border-[#F0883E]/30"
              >
                <AlertTriangle :size="10" />
                注意
              </span>
            </div>
            <button
              @click.stop="toggleFavorite(cmd.name)"
              class="p-1 rounded transition-all duration-200"
              :class="isFavorite(cmd.name) ? 'text-[#F0883E]' : 'text-gray-600 hover:text-[#F0883E] opacity-0 group-hover:opacity-100'"
            >
              <Star :size="16" :fill="isFavorite(cmd.name) ? '#F0883E' : 'none'" />
            </button>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">{{ cmd.simpleExplain }}</p>
        </div>
      </div>
      <div v-else class="text-center py-20 text-gray-500">
        <p class="text-lg">{{ selectedCategory === 'favorites' ? '还没有收藏任何命令' : '未找到匹配的命令' }}</p>
        <p class="text-sm mt-2">{{ selectedCategory === 'favorites' ? '点击命令卡片上的星标即可收藏' : '尝试其他关键词或分类' }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, X, Star, AlertTriangle } from 'lucide-vue-next'
import { commands } from '@/data/commands'
import SearchBar from '@/components/SearchBar.vue'
import CategoryNav from '@/components/CategoryNav.vue'
import DailyCommand from '@/components/DailyCommand.vue'
import { useFavorites } from '@/composables/useFavorites'

const router = useRouter()
const { isFavorite, toggleFavorite, favorites } = useFavorites()

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)
const sidebarOpen = ref(false)
const focusedIndex = ref(-1)
const cardRefs = ref<Record<number, HTMLElement>>({})
const searchBarRef = ref<InstanceType<typeof SearchBar> | null>(null)

const filteredCommands = computed(() => {
  return commands.filter((cmd) => {
    if (selectedCategory.value === 'favorites') {
      if (!isFavorite(cmd.name)) return false
    } else {
      const matchCategory = selectedCategory.value === null || cmd.categoryId === selectedCategory.value
      if (!matchCategory) return false
    }
    const q = searchQuery.value.toLowerCase()
    const matchSearch =
      q === '' ||
      cmd.name.toLowerCase().includes(q) ||
      cmd.simpleExplain.toLowerCase().includes(q) ||
      cmd.detailExplain.toLowerCase().includes(q)
    return matchSearch
  })
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (focusedIndex.value < filteredCommands.value.length - 1) {
      focusedIndex.value++
      cardRefs.value[focusedIndex.value]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (focusedIndex.value > 0) {
      focusedIndex.value--
      cardRefs.value[focusedIndex.value]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    } else {
      focusedIndex.value = -1
      searchBarRef.value?.focusInput()
    }
  } else if (e.key === 'Enter' && focusedIndex.value >= 0) {
    e.preventDefault()
    const cmd = filteredCommands.value[focusedIndex.value]
    if (cmd) {
      router.push(`/command/${cmd.name}`)
    }
  } else if (e.key === 'Escape') {
    searchQuery.value = ''
    focusedIndex.value = -1
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
