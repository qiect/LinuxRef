<template>
  <div v-if="!directory" class="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center text-gray-400">
    <FolderOpen :size="48" class="mb-4 text-gray-600" />
    <p class="text-xl mb-2">目录未找到</p>
    <p class="text-sm mb-6">没有名为「{{ shortName }}」的目录</p>
    <button
      @click="$router.push('/directories')"
      class="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded-lg text-[#BC8CFF] hover:bg-[#1C2333] transition-colors"
    >
      返回目录结构
    </button>
  </div>
  <div v-else class="min-h-screen bg-[#0D1117] text-gray-200">
    <div class="max-w-3xl mx-auto px-4 py-8">
      <button
        @click="$router.push('/directories')"
        class="flex items-center gap-2 text-gray-400 hover:text-[#BC8CFF] mb-8 transition-colors"
      >
        <ArrowLeft :size="18" />
        <span>返回目录结构</span>
      </button>

      <div class="mb-8">
        <div class="flex items-center gap-3 mb-3">
          <h1 class="text-4xl font-bold font-mono text-[#7EE787]">
            {{ directory.path }}
          </h1>
          <span
            :class="importanceClass"
            class="px-2 py-1 rounded-lg text-xs font-semibold border"
          >
            {{ importanceLabel }}
          </span>
        </div>
        <p class="text-gray-300 text-lg mb-2">{{ directory.name }}</p>
        <div class="flex items-center gap-1.5 text-sm text-gray-500">
          <Tag :size="14" />
          <span>名字由来：{{ directory.origin }}</span>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          通俗解释
        </h2>
        <p class="text-gray-300 leading-relaxed">{{ directory.description }}</p>
      </div>

      <div class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          关键文件和子目录
        </h2>
        <div class="flex flex-col gap-2">
          <div
            v-for="file in directory.keyFiles"
            :key="file.path"
            class="flex items-start gap-3 bg-[#161B22] border border-[#30363D] rounded-xl p-4"
          >
            <File :size="16" class="text-[#58A6FF] mt-0.5 shrink-0" />
            <div>
              <code class="font-mono text-[#7EE787] text-sm">{{ file.path }}</code>
              <p class="text-gray-400 text-sm mt-1">{{ file.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="directory.tips" class="mb-8">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          运维提示
        </h2>
        <div class="flex items-start gap-3 bg-[#F0883E]/10 border border-[#F0883E]/30 rounded-xl p-4">
          <AlertTriangle :size="18" class="text-[#F0883E] mt-0.5 shrink-0" />
          <p class="text-[#F0883E] text-sm leading-relaxed">{{ directory.tips }}</p>
        </div>
      </div>

      <div v-if="directory.relatedCommands.length > 0">
        <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          相关命令
        </h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cmd in directory.relatedCommands"
            :key="cmd"
            @click="navigateToCommand(cmd)"
            :class="[
              'px-3 py-1.5 rounded-lg text-sm font-mono border transition-all duration-200',
              commandExists(cmd)
                ? 'bg-[#BC8CFF]/10 text-[#BC8CFF] border-[#BC8CFF]/30 hover:bg-[#BC8CFF]/20 hover:border-[#BC8CFF]/50'
                : 'bg-[#161B22] text-gray-600 border-[#30363D] cursor-not-allowed'
            ]"
          >
            {{ cmd }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, FolderOpen, File, Tag, AlertTriangle } from 'lucide-vue-next'
import { directories } from '@/data/directories'
import { commands } from '@/data/commands'

const route = useRoute()
const router = useRouter()

const shortName = computed(() => route.params.shortName as string)
const directory = computed(() => directories.find(d => d.shortName === shortName.value))

const importanceLabel = computed(() => {
  if (!directory.value) return ''
  const map = { core: '核心', common: '常用', supplementary: '补充' }
  return map[directory.value.importance]
})

const importanceClass = computed(() => {
  if (!directory.value) return ''
  const map = {
    core: 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30',
    common: 'bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30',
    supplementary: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  }
  return map[directory.value.importance]
})

const commandExists = (cmdName: string) => commands.some(c => c.name === cmdName)

const navigateToCommand = (cmdName: string) => {
  if (commandExists(cmdName)) {
    router.push(`/command/${cmdName}`)
  }
}
</script>
