<template>
  <div class="font-mono text-sm select-none">
    <div class="text-[#7EE787] mb-1">/</div>
    <div
      v-for="dir in directories"
      :key="dir.path"
      @click="$emit('select', dir)"
      :class="[
        'flex items-center gap-2 py-1.5 px-3 rounded-lg cursor-pointer transition-all duration-200',
        selected?.path === dir.path
          ? 'bg-[#BC8CFF]/15 text-[#BC8CFF]'
          : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
      ]"
    >
      <Folder :size="14" />
      <span>{{ dir.shortName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Folder } from 'lucide-vue-next'
import type { LinuxDirectory } from '@/data/directories'

defineProps<{
  directories: LinuxDirectory[]
  selected?: LinuxDirectory | null
}>()

defineEmits<{
  select: [dir: LinuxDirectory]
}>()
</script>
