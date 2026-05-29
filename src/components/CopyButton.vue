<template>
  <button
    @click="handleCopy"
    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs text-gray-500 hover:text-gray-300 hover:bg-[#30363D] transition-all duration-200"
  >
    <template v-if="copied">
      <Check :size="14" class="text-[#7EE787]" />
      <span class="text-[#7EE787]">已复制</span>
    </template>
    <template v-else>
      <Clipboard :size="14" />
      <span>复制</span>
    </template>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check, Clipboard } from 'lucide-vue-next'

const props = defineProps<{
  text: string
}>()

const copied = ref(false)

const handleCopy = async () => {
  await navigator.clipboard.writeText(props.text)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
