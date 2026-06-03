<template>
  <div
    @click="$router.push(`/directory/${dir.shortName}`)"
    class="cursor-pointer bg-[#161B22] border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(188,140,255,0.12)] hover:border-[#BC8CFF]/40 group"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="text-[#7EE787] font-mono text-lg font-bold group-hover:text-[#BC8CFF] transition-colors">
          {{ dir.path }}
        </span>
        <span
          :class="importanceClass"
          class="px-1.5 py-0.5 rounded text-[10px] font-semibold border"
        >
          {{ importanceLabel }}
        </span>
      </div>
      <ChevronRight :size="18" class="text-gray-600 group-hover:text-[#BC8CFF] transition-colors" />
    </div>
    <p class="text-gray-300 text-sm font-medium mb-1">{{ dir.name }}</p>
    <p class="text-gray-500 text-xs line-clamp-2">{{ dir.description }}</p>
    <div class="mt-3 flex items-center gap-1.5 text-[10px] text-gray-600">
      <Tag :size="10" />
      <span>{{ dir.origin }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronRight, Tag } from 'lucide-vue-next'
import type { LinuxDirectory } from '@/data/directories'

const props = defineProps<{
  dir: LinuxDirectory
}>()

const importanceLabel = computed(() => {
  const map = { core: '核心', common: '常用', supplementary: '补充' }
  return map[props.dir.importance]
})

const importanceClass = computed(() => {
  const map = {
    core: 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30',
    common: 'bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30',
    supplementary: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  }
  return map[props.dir.importance]
})
</script>
