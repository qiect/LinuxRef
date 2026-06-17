<template>
  <div v-if="!command" class="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center text-gray-400">
    <Terminal :size="48" class="mb-4 text-gray-600" />
    <p class="text-xl mb-2">命令未找到</p>
    <p class="text-sm mb-6">没有名为「{{ name }}」的命令</p>
    <button
      @click="$router.push('/')"
      class="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg text-[#58A6FF] hover:bg-[#1C2333] transition-colors"
    >
      返回首页
    </button>
  </div>
  <div v-else class="min-h-screen bg-[#0D1117] text-gray-200">
    <div class="max-w-3xl mx-auto px-4 py-8">
      <button
        @click="$router.push('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-[#58A6FF] mb-8 transition-colors"
      >
        <ArrowLeft :size="18" />
        <span>返回</span>
      </button>

      <div class="mb-8">
        <div class="flex items-center gap-3 mb-3">
          <h1 class="text-4xl font-bold font-mono text-[#7EE787]">
            $ {{ command.name }}
          </h1>
          <button
            @click="toggleFavorite(command.name)"
            class="p-1.5 rounded-lg transition-all duration-200"
            :class="isFavorite(command.name) ? 'text-[#F0883E] bg-[#F0883E]/10' : 'text-gray-600 hover:text-[#F0883E] hover:bg-[#F0883E]/10'"
          >
            <Star :size="22" :fill="isFavorite(command.name) ? '#F0883E' : 'none'" />
          </button>
        </div>
        <div class="flex items-center gap-2 mb-2">
          <span
            v-if="command.dangerLevel === 'danger'"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500/15 text-red-400 border border-red-500/30"
          >
            <AlertTriangle :size="14" />
            高危命令 - 可能导致数据丢失，请谨慎使用
          </span>
          <span
            v-else-if="command.dangerLevel === 'warning'"
            class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F0883E]/15 text-[#F0883E] border border-[#F0883E]/30"
          >
            <AlertTriangle :size="14" />
            需要注意 - 误用可能导致系统异常
          </span>
        </div>
        <p class="text-gray-400 text-lg">{{ command.simpleExplain }}</p>
      </div>

      <div class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          语法
        </h2>
        <div class="relative bg-[#161B22] border border-[#30363D] rounded-xl p-4 font-mono text-[#7EE787] text-sm">
          <span>{{ command.syntax }}</span>
          <div class="absolute top-3 right-3">
            <CopyButton :text="command.syntax" />
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          详细说明
        </h2>
        <p class="text-gray-300 leading-relaxed">{{ command.detailExplain }}</p>
      </div>

      <div v-if="command.helpOutput" class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            帮助文档 (--help)
          </h2>
          <button
            @click="helpExpanded = !helpExpanded"
            class="text-xs text-[#58A6FF] hover:text-[#7EE787] transition-colors flex items-center gap-1"
          >
            {{ helpExpanded ? '收起' : '展开全部' }}
          </button>
        </div>
        <div class="relative bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden">
          <div class="absolute top-3 right-3 z-10">
            <CopyButton :text="command.helpOutput" />
          </div>
          <pre
            class="p-4 text-gray-400 text-xs font-mono overflow-x-auto whitespace-pre leading-relaxed"
            :class="helpExpanded ? '' : 'max-h-80 overflow-y-auto'"
          >{{ command.helpOutput }}</pre>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          示例
        </h2>
        <div class="flex flex-col gap-4">
          <div
            v-for="(ex, i) in command.examples"
            :key="i"
            class="bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden"
          >
            <div class="px-4 py-2 border-b border-[#30363D] text-sm text-gray-400">
              {{ ex.description }}
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <code class="font-mono text-[#7EE787] text-sm flex-1">
                  $ {{ ex.code }}
                </code>
                <CopyButton :text="ex.code" />
              </div>
              <pre
                v-if="ex.output"
                class="mt-3 p-3 bg-[#0D1117] rounded-lg text-gray-400 text-xs font-mono overflow-x-auto whitespace-pre-wrap"
              >{{ ex.output }}</pre>
            </div>
          </div>
        </div>
      </div>

      <div v-if="command.relatedCommands.length > 0">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          相关命令
        </h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="relCmd in command.relatedCommands"
            :key="relCmd"
            @click="navigateToCommand(relCmd)"
            :class="[
              'px-3 py-1.5 rounded-lg text-sm font-mono border transition-all duration-200',
              commandExists(relCmd)
                ? 'bg-[#BC8CFF]/10 text-[#BC8CFF] border-[#BC8CFF]/30 hover:bg-[#BC8CFF]/20 hover:border-[#BC8CFF]/50'
                : 'bg-[#161B22] text-gray-600 border-[#30363D] cursor-not-allowed'
            ]"
          >
            {{ relCmd }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Terminal, Star, AlertTriangle } from 'lucide-vue-next'
import { commands } from '@/data/commands'
import CopyButton from '@/components/CopyButton.vue'
import { useFavorites } from '@/composables/useFavorites'

const route = useRoute()
const router = useRouter()

const name = computed(() => route.params.name as string)
const command = computed(() => commands.find((c) => c.name === name.value))
const helpExpanded = ref(false)

const { isFavorite, toggleFavorite } = useFavorites()

const commandExists = (cmdName: string) => commands.some((c) => c.name === cmdName)

const navigateToCommand = (cmdName: string) => {
  if (commandExists(cmdName)) {
    router.push(`/command/${cmdName}`)
  }
}
</script>
