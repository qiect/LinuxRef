<template>
  <div
    @click="goDetail"
    class="relative overflow-hidden bg-gradient-to-r from-[#161B22] to-[#0D1117] border border-[#30363D] rounded-xl p-6 mb-6 cursor-pointer group transition-all duration-300 hover:border-[#58A6FF]/40 hover:shadow-[0_0_20px_rgba(88,166,255,0.1)]"
  >
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(88,166,255,0.08),transparent_60%)]" />
    <div class="relative flex items-center justify-between mb-3">
      <div class="flex items-center gap-3">
        <Shuffle :size="20" class="text-[#F0883E]" />
        <span class="text-[#F0883E] text-sm font-semibold tracking-wide">随机命令</span>
      </div>
      <div class="flex items-center gap-2">
        <button
          @click.stop="refresh"
          class="p-1.5 rounded-lg text-gray-500 hover:text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-200"
          title="换一个"
        >
          <RefreshCw :size="16" :class="{ 'animate-spin': isSpinning }" />
        </button>
        <span class="text-gray-600 group-hover:text-[#58A6FF] text-xs transition-colors flex items-center gap-1">
          查看详情
          <ChevronRight :size="14" />
        </span>
      </div>
    </div>
    <div class="relative flex items-center gap-1">
      <span class="text-[#7EE787] font-mono text-3xl font-bold group-hover:text-[#58A6FF] transition-colors">$ {{ displayText }}</span>
      <span
        :class="[
          'inline-block w-0.5 h-8 bg-[#7EE787] transition-opacity duration-100',
          showCursor ? 'opacity-100' : 'opacity-0'
        ]"
      />
    </div>
    <p class="relative text-gray-400 mt-2 text-sm">{{ command?.simpleExplain }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Shuffle, RefreshCw, ChevronRight } from 'lucide-vue-next'
import { commands } from '@/data/commands'
import type { Command } from '@/data/commands'

const router = useRouter()
const command = ref<Command | null>(null)
const displayText = ref('')
const showCursor = ref(true)
const isSpinning = ref(false)

let cursorTimer: ReturnType<typeof setInterval> | null = null

const pickRandom = () => {
  const idx = Math.floor(Math.random() * commands.length)
  command.value = commands[idx]
  displayText.value = ''
  let i = 0
  const typeInterval = setInterval(() => {
    if (command.value && i < command.value.name.length) {
      displayText.value = command.value.name.slice(0, i + 1)
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, 80)
}

const refresh = () => {
  isSpinning.value = true
  pickRandom()
  setTimeout(() => {
    isSpinning.value = false
  }, 500)
}

const goDetail = () => {
  if (command.value) {
    router.push(`/command/${command.value.name}`)
  }
}

onMounted(() => {
  pickRandom()
  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  if (cursorTimer) {
    clearInterval(cursorTimer)
  }
})
</script>
