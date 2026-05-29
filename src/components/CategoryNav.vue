<template>
  <nav class="flex flex-col gap-1">
    <button
      @click="$emit('update:selectedCategory', null)"
      :class="[
        'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
        selectedCategory === null
          ? 'bg-[#58A6FF]/15 text-[#58A6FF] shadow-[0_0_12px_rgba(88,166,255,0.2)]'
          : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
      ]"
    >
      <component :is="icons.LayoutGrid" :size="18" />
      <span>全部</span>
    </button>
    <button
      @click="$emit('update:selectedCategory', 'favorites')"
      :class="[
        'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
        selectedCategory === 'favorites'
          ? 'bg-[#F0883E]/15 text-[#F0883E] shadow-[0_0_12px_rgba(240,136,62,0.2)]'
          : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
      ]"
    >
      <component :is="icons.Star" :size="18" />
      <span>我的收藏</span>
      <span v-if="favoriteCount > 0" class="ml-auto text-xs bg-[#F0883E]/20 text-[#F0883E] px-1.5 py-0.5 rounded-full">
        {{ favoriteCount }}
      </span>
    </button>
    <div class="h-px bg-[#30363D] my-1 mx-2" />
    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="$emit('update:selectedCategory', selectedCategory === cat.id ? null : cat.id)"
      :class="[
        'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
        selectedCategory === cat.id
          ? 'bg-[#58A6FF]/15 text-[#58A6FF] shadow-[0_0_12px_rgba(88,166,255,0.2)]'
          : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
      ]"
    >
      <component :is="icons[cat.icon as keyof typeof icons]" :size="18" />
      <span>{{ cat.name }}</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  FolderOpen,
  FileText,
  Activity,
  Wifi,
  Shield,
  Monitor,
  HardDrive,
  Archive,
  Users,
  Package,
  LayoutGrid,
  Star,
} from 'lucide-vue-next'
import { categories } from '@/data/commands'
import { useFavorites } from '@/composables/useFavorites'

const icons = {
  FolderOpen,
  FileText,
  Activity,
  Wifi,
  Shield,
  Monitor,
  HardDrive,
  Archive,
  Users,
  Package,
  LayoutGrid,
  Star,
}

defineProps<{
  selectedCategory: string | null
}>()

defineEmits<{
  'update:selectedCategory': [value: string | null]
}>()

const { favorites } = useFavorites()
const favoriteCount = computed(() => favorites.value.length)
</script>
