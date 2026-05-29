<template>
  <div class="relative w-full max-w-2xl mx-auto">
    <div class="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
      <span class="inline-block w-2.5 h-5 bg-[#7EE787] animate-blink" />
      <Search :size="20" class="text-gray-500" />
    </div>
    <input
      ref="inputRef"
      type="text"
      :value="searchQuery"
      @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
      @keydown.enter="handleSubmit"
      @keydown.esc="$emit('update:searchQuery', '')"
      placeholder="输入命令或关键词... (按 / 聚焦)"
      class="w-full pl-14 pr-4 py-3.5 bg-[#161B22] border border-[#30363D] rounded-xl text-gray-200 placeholder-gray-600 text-lg outline-none transition-all duration-300 focus:border-[#58A6FF] focus:shadow-[0_0_20px_rgba(88,166,255,0.15)] hover:border-[#484F58]"
    />
    <div
      v-if="showHistory && searchHistory.length > 0 && searchQuery === ''"
      class="absolute top-full left-0 right-0 mt-2 bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden z-20"
    >
      <div class="flex items-center justify-between px-4 py-2 border-b border-[#30363D]">
        <span class="text-xs text-gray-500">搜索历史</span>
        <button
          @click="clearHistory"
          class="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          清空
        </button>
      </div>
      <div
        v-for="item in searchHistory"
        :key="item"
        class="flex items-center justify-between px-4 py-2 hover:bg-[#1C2333] cursor-pointer transition-colors group"
      >
        <span
          @click="selectHistory(item)"
          class="text-sm text-gray-300 flex-1"
        >
          {{ item }}
        </span>
        <button
          @click.stop="removeHistory(item)"
          class="text-gray-600 hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-all"
        >
          <X :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Search, X } from 'lucide-vue-next'
import { useSearchHistory } from '@/composables/useSearchHistory'

const props = defineProps<{
  searchQuery: string
}>()

const emit = defineEmits<{
  'update:searchQuery': [value: string]
}>()

const { searchHistory, addHistory, clearHistory, removeHistory } = useSearchHistory()
const inputRef = ref<HTMLInputElement | null>(null)
const showHistory = ref(false)

const handleSubmit = () => {
  if (props.searchQuery.trim()) {
    addHistory(props.searchQuery.trim())
  }
}

const selectHistory = (item: string) => {
  emit('update:searchQuery', item)
  addHistory(item)
}

const focusInput = () => {
  inputRef.value?.focus()
}

let globalKeydownHandler: ((e: KeyboardEvent) => void) | null = null

onMounted(() => {
  globalKeydownHandler = (e: KeyboardEvent) => {
    if (e.key === '/' && document.activeElement !== inputRef.value) {
      e.preventDefault()
      focusInput()
    }
  }
  window.addEventListener('keydown', globalKeydownHandler)

  inputRef.value?.addEventListener('focus', () => {
    showHistory.value = true
  })
  inputRef.value?.addEventListener('blur', () => {
    setTimeout(() => {
      showHistory.value = false
    }, 200)
  })
})

onUnmounted(() => {
  if (globalKeydownHandler) {
    window.removeEventListener('keydown', globalKeydownHandler)
  }
})

defineExpose({ focusInput, addHistory })
</script>
