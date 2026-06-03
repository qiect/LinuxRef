<template>
  <div class="min-h-screen bg-[#0D1117] text-gray-200">
    <div class="max-w-4xl mx-auto px-4 py-8 lg:py-12">
      <button
        @click="$router.push('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-[#58A6FF] mb-8 transition-colors"
      >
        <ArrowLeft :size="18" />
        <span>返回命令查询</span>
      </button>

      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-100 mb-2">Linux 目录结构</h1>
        <p class="text-gray-400">
          一切都从 <span class="text-[#7EE787] font-mono">/</span> 开始 —— 理解 Linux 的目录设计，就是理解 Linux 的哲学
        </p>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
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

      <!-- Tree -->
      <div class="bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden">
        <!-- Root -->
        <div class="px-5 py-3 border-b border-[#30363D] bg-[#0D1117]">
          <div class="flex items-center gap-2 font-mono">
            <HardDrive :size="16" class="text-[#58A6FF]" />
            <span class="text-[#7EE787] font-bold text-lg">/</span>
            <span class="text-gray-500 text-sm">根目录（Root）</span>
          </div>
        </div>

        <!-- Directory nodes -->
        <div v-for="(dir, idx) in sortedDirectories" :key="dir.path">
          <!-- Directory row -->
          <div
            @click="toggleExpand(dir.path)"
            class="flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-200 hover:bg-[#1C2333] group"
            :class="{ 'bg-[#1C2333]': expandedPaths.has(dir.path) }"
          >
            <!-- Tree lines -->
            <span class="text-gray-600 font-mono text-sm w-5 text-right shrink-0 select-none">
              {{ idx === sortedDirectories.length - 1 ? '└──' : '├──' }}
            </span>

            <!-- Expand icon -->
            <ChevronRight
              :size="14"
              class="shrink-0 transition-transform duration-200 text-gray-500"
              :class="{ 'rotate-90': expandedPaths.has(dir.path) }"
            />

            <!-- Folder icon -->
            <Folder
              :size="16"
              class="shrink-0"
              :class="expandedPaths.has(dir.path) ? 'text-[#BC8CFF]' : 'text-gray-500 group-hover:text-[#BC8CFF]'"
            />

            <!-- Path name -->
            <span
              class="font-mono font-bold transition-colors"
              :class="expandedPaths.has(dir.path) ? 'text-[#BC8CFF]' : 'text-[#7EE787] group-hover:text-[#BC8CFF]'"
            >
              {{ dir.shortName }}
            </span>

            <!-- Name -->
            <span class="text-gray-400 text-sm hidden sm:inline">{{ dir.name }}</span>

            <!-- Importance badge -->
            <span
              :class="importanceClass(dir.importance)"
              class="px-1.5 py-0.5 rounded text-[10px] font-semibold border ml-auto shrink-0"
            >
              {{ importanceLabel(dir.importance) }}
            </span>
          </div>

          <!-- Expanded detail -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-150 ease-in"
            enter-from-class="max-h-0 opacity-0"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="expandedPaths.has(dir.path)" class="overflow-hidden">
              <div class="pl-14 pr-5 pb-4 border-l-2 border-[#30363D] ml-[2.2rem]">
                <!-- Description -->
                <p class="text-gray-300 text-sm leading-relaxed mb-3">{{ dir.description }}</p>

                <!-- Origin tag -->
                <div class="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <Tag :size="12" />
                  <span>名字由来：{{ dir.origin }}</span>
                </div>

                <!-- Key files sub-tree -->
                <div v-if="dir.keyFiles.length > 0" class="mb-3">
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">关键文件</p>
                  <div class="space-y-1">
                    <div
                      v-for="(file, fi) in dir.keyFiles"
                      :key="file.path"
                      class="flex items-center gap-2 text-sm"
                    >
                      <span class="text-gray-600 font-mono w-4 text-right shrink-0 select-none">
                        {{ fi === dir.keyFiles.length - 1 ? '└──' : '├──' }}
                      </span>
                      <File :size="13" class="text-[#58A6FF] shrink-0" />
                      <code class="font-mono text-[#7EE787] text-xs">{{ file.path }}</code>
                      <span class="text-gray-500 text-xs">{{ file.description }}</span>
                    </div>
                  </div>
                </div>

                <!-- Tips -->
                <div v-if="dir.tips" class="flex items-start gap-2 bg-[#F0883E]/10 border border-[#F0883E]/20 rounded-lg p-3 mb-3">
                  <AlertTriangle :size="14" class="text-[#F0883E] mt-0.5 shrink-0" />
                  <p class="text-[#F0883E] text-xs leading-relaxed">{{ dir.tips }}</p>
                </div>

                <!-- Related commands -->
                <div v-if="dir.relatedCommands.length > 0" class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs text-gray-500">相关命令：</span>
                  <button
                    v-for="cmd in dir.relatedCommands"
                    :key="cmd"
                    @click.stop="navigateToCommand(cmd)"
                    :class="[
                      'px-2 py-0.5 rounded text-xs font-mono border transition-all duration-200',
                      commandExists(cmd)
                        ? 'bg-[#BC8CFF]/10 text-[#BC8CFF] border-[#BC8CFF]/30 hover:bg-[#BC8CFF]/20'
                        : 'bg-[#0D1117] text-gray-600 border-[#30363D] cursor-not-allowed'
                    ]"
                  >
                    {{ cmd }}
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  ArrowLeft,
  HardDrive,
  Folder,
  File,
  ChevronRight,
  Tag,
  AlertTriangle,
} from 'lucide-vue-next'
import { directories } from '@/data/directories'
import { commands } from '@/data/commands'

const router = useRouter()
const activeFilter = ref<string>('all')
const expandedPaths = ref<Set<string>>(new Set())

const filters = computed(() => [
  { label: '全部', value: 'all', count: directories.length },
  { label: '核心', value: 'core', count: directories.filter(d => d.importance === 'core').length },
  { label: '常用', value: 'common', count: directories.filter(d => d.importance === 'common').length },
  { label: '补充', value: 'supplementary', count: directories.filter(d => d.importance === 'supplementary').length },
])

const sortedDirectories = computed(() => {
  const filtered = activeFilter.value === 'all'
    ? [...directories]
    : directories.filter(d => d.importance === activeFilter.value)
  return filtered.sort((a, b) => a.shortName.localeCompare(b.shortName))
})

const toggleExpand = (path: string) => {
  const next = new Set(expandedPaths.value)
  if (next.has(path)) {
    next.delete(path)
  } else {
    next.add(path)
  }
  expandedPaths.value = next
}

const importanceLabel = (importance: string) => {
  const map: Record<string, string> = { core: '核心', common: '常用', supplementary: '补充' }
  return map[importance] ?? importance
}

const importanceClass = (importance: string) => {
  const map: Record<string, string> = {
    core: 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30',
    common: 'bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30',
    supplementary: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
  }
  return map[importance] ?? ''
}

const commandExists = (cmdName: string) => commands.some(c => c.name === cmdName)

const navigateToCommand = (cmdName: string) => {
  if (commandExists(cmdName)) {
    router.push(`/command/${cmdName}`)
  }
}
</script>
