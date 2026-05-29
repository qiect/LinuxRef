<template>
  <div
    class="cursor-pointer bg-[#161B22] border border-[#30363D] rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(88,166,255,0.12)] hover:border-[#58A6FF]/40 group relative"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <span class="text-[#7EE787] font-mono text-lg font-bold group-hover:text-[#58A6FF] transition-colors">
          $ {{ command.name }}
        </span>
        <span
          v-if="command.dangerLevel === 'danger'"
          class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/30"
        >
          <AlertTriangle :size="10" />
          危险
        </span>
        <span
          v-else-if="command.dangerLevel === 'warning'"
          class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F0883E]/15 text-[#F0883E] border border-[#F0883E]/30"
        >
          <AlertTriangle :size="10" />
          注意
        </span>
      </div>
      <button
        @click.stop="toggleFavorite(command.name)"
        class="p-1 rounded transition-all duration-200"
        :class="isFavorite(command.name) ? 'text-[#F0883E]' : 'text-gray-600 hover:text-[#F0883E] opacity-0 group-hover:opacity-100'"
      >
        <Star :size="16" :fill="isFavorite(command.name) ? '#F0883E' : 'none'" />
      </button>
    </div>
    <p @click="$router.push(`/command/${command.name}`)" class="text-gray-400 text-sm leading-relaxed">
      {{ command.simpleExplain }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { AlertTriangle, Star } from 'lucide-vue-next'
import type { Command } from '@/data/commands'
import { useFavorites } from '@/composables/useFavorites'

defineProps<{
  command: Command
}>()

const { isFavorite, toggleFavorite } = useFavorites()
</script>
