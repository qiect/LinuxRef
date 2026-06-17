/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Shuffle, RefreshCw, ChevronRight } from 'lucide-vue-next';
import { commands } from '@/data/commands';
const router = useRouter();
const command = ref(null);
const displayText = ref('');
const showCursor = ref(true);
const isSpinning = ref(false);
let cursorTimer = null;
const pickRandom = () => {
    const idx = Math.floor(Math.random() * commands.length);
    command.value = commands[idx];
    displayText.value = '';
    let i = 0;
    const typeInterval = setInterval(() => {
        if (command.value && i < command.value.name.length) {
            displayText.value = command.value.name.slice(0, i + 1);
            i++;
        }
        else {
            clearInterval(typeInterval);
        }
    }, 80);
};
const refresh = () => {
    isSpinning.value = true;
    pickRandom();
    setTimeout(() => {
        isSpinning.value = false;
    }, 500);
};
const goDetail = () => {
    if (command.value) {
        router.push(`/command/${command.value.name}`);
    }
};
onMounted(() => {
    pickRandom();
    cursorTimer = setInterval(() => {
        showCursor.value = !showCursor.value;
    }, 530);
});
onUnmounted(() => {
    if (cursorTimer) {
        clearInterval(cursorTimer);
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (__VLS_ctx.goDetail) },
    ...{ class: "relative overflow-hidden bg-gradient-to-r from-[#161B22] to-[#0D1117] border border-[#30363D] rounded-xl p-6 mb-6 cursor-pointer group transition-all duration-300 hover:border-[#58A6FF]/40 hover:shadow-[0_0_20px_rgba(88,166,255,0.1)]" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['to-[#0D1117]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-[#58A6FF]/40']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-[0_0_20px_rgba(88,166,255,0.1)]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ class: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(88,166,255,0.08),transparent_60%)]" },
});
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[radial-gradient(ellipse_at_top_right,rgba(88,166,255,0.08),transparent_60%)]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative flex items-center justify-between mb-3" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-3" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Shuffle} */
Shuffle;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    size: (20),
    ...{ class: "text-[#F0883E]" },
}));
const __VLS_2 = __VLS_1({
    size: (20),
    ...{ class: "text-[#F0883E]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-[#F0883E] text-sm font-semibold tracking-wide" },
});
/** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.refresh) },
    ...{ class: "p-1.5 rounded-lg text-gray-500 hover:text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-200" },
    title: "换一个",
});
/** @type {__VLS_StyleScopedClasses['p-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#58A6FF]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#58A6FF]/10']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.RefreshCw} */
RefreshCw;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    size: (16),
    ...{ class: ({ 'animate-spin': __VLS_ctx.isSpinning }) },
}));
const __VLS_7 = __VLS_6({
    size: (16),
    ...{ class: ({ 'animate-spin': __VLS_ctx.isSpinning }) },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-gray-600 group-hover:text-[#58A6FF] text-xs transition-colors flex items-center gap-1" },
});
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-[#58A6FF]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
let __VLS_10;
/** @ts-ignore @type { | typeof __VLS_components.ChevronRight} */
ChevronRight;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    size: (14),
}));
const __VLS_12 = __VLS_11({
    size: (14),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative flex items-center gap-1" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-[#7EE787] font-mono text-3xl font-bold group-hover:text-[#58A6FF] transition-colors" },
});
/** @type {__VLS_StyleScopedClasses['text-[#7EE787]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-[#58A6FF]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
(__VLS_ctx.displayText);
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: ([
            'inline-block w-0.5 h-8 bg-[#7EE787] transition-opacity duration-100',
            __VLS_ctx.showCursor ? 'opacity-100' : 'opacity-0'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#7EE787]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-100']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "relative text-gray-400 mt-2 text-sm" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
(__VLS_ctx.command?.simpleExplain);
// @ts-ignore
[goDetail, refresh, isSpinning, displayText, showCursor, command,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
