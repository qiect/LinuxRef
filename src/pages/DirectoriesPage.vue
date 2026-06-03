<template>
  <div class="min-h-screen bg-[#0D1117] text-gray-200">
    <div class="max-w-5xl mx-auto px-4 py-8 lg:py-12">
      <button
        @click="$router.push('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-[#58A6FF] mb-8 transition-colors"
      >
        <ArrowLeft :size="18" />
        <span>返回命令查询</span>
      </button>

      <div class="mb-10">
        <h1 class="text-3xl font-bold text-gray-100 mb-2">Linux 目录结构</h1>
        <p class="text-gray-400">
          一切都从 <span class="text-[#7EE787] font-mono">/</span> 开始 —— 理解 Linux 的目录设计，就是理解 Linux 的哲学
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="f in filters"
          :key="f.value"
          @click="activeFilter = f.value"
          :class="[
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border',
            activeFilter === f.value
              ? 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30'
              : 'text-gray-400 border-[#30363D] hover:text-gray-200 hover:border-[#30363D]'
          ]"
        >
          {{ f.label }}
          <span class="ml-1 text-xs opacity-60">{{ f.count }}</span>
        </button>
      </div>

      <div class="flex gap-8">
        <aside class="hidden lg:block w-48 shrink-0">
          <DirectoryTree
            :directories="directories"
            :selected="selectedDir"
            @select="goToDirectory"
          />
        </aside>

        <div class="flex-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DirectoryCard
              v-for="dir in filteredDirectories"
              :key="dir.path"
              :dir="dir"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { directories, type LinuxDirectory } from '@/data/directories'
import DirectoryCard from '@/components/DirectoryCard.vue'
import DirectoryTree from '@/components/DirectoryTree.vue'

const router = useRouter()
const activeFilter = ref<string>('all')
const selectedDir = ref<LinuxDirectory | null>(null)

const filters = computed(() => [
  { label: '全部', value: 'all', count: directories.length },
  { label: '核心', value: 'core', count: directories.filter(d => d.importance === 'core').length },
  { label: '常用', value: 'common', count: directories.filter(d => d.importance === 'common').length },
  { label: '补充', value: 'supplementary', count: directories.filter(d => d.importance === 'supplementary').length },
])

const filteredDirectories = computed(() => {
  if (activeFilter.value === 'all') return directories
  return directories.filter(d => d.importance === activeFilter.value)
})

const goToDirectory = (dir: LinuxDirectory) => {
  selectedDir.value = dir
  router.push(`/directory/${dir.shortName}`)
}
</script>
