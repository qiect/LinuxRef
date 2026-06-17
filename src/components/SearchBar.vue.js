/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, onMounted, onUnmounted } from 'vue';
import { Search, X } from 'lucide-vue-next';
import { useSearchHistory } from '@/composables/useSearchHistory';
const props = defineProps();
const emit = defineEmits();
const { searchHistory, addHistory, clearHistory, removeHistory } = useSearchHistory();
const inputRef = ref(null);
const showHistory = ref(false);
const handleSubmit = () => {
    if (props.searchQuery.trim()) {
        addHistory(props.searchQuery.trim());
    }
};
const selectHistory = (item) => {
    emit('update:searchQuery', item);
    addHistory(item);
};
const focusInput = () => {
    inputRef.value?.focus();
};
let globalKeydownHandler = null;
onMounted(() => {
    globalKeydownHandler = (e) => {
        if (e.key === '/' && document.activeElement !== inputRef.value) {
            e.preventDefault();
            focusInput();
        }
    };
    window.addEventListener('keydown', globalKeydownHandler);
    inputRef.value?.addEventListener('focus', () => {
        showHistory.value = true;
    });
    inputRef.value?.addEventListener('blur', () => {
        setTimeout(() => {
            showHistory.value = false;
        }, 200);
    });
});
onUnmounted(() => {
    if (globalKeydownHandler) {
        window.removeEventListener('keydown', globalKeydownHandler);
    }
});
const __VLS_exposed = { focusInput, addHistory };
defineExpose(__VLS_exposed);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative w-full max-w-2xl mx-auto" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2" },
});
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['left-4']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "inline-block w-2.5 h-5 bg-[#7EE787] animate-blink" },
});
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#7EE787]']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-blink']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Search} */
Search;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    size: (20),
    ...{ class: "text-gray-500" },
}));
const __VLS_2 = __VLS_1({
    size: (20),
    ...{ class: "text-gray-500" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.$emit('update:searchQuery', $event.target.value);
            // @ts-ignore
            [$emit,];
        } },
    ...{ onKeydown: (__VLS_ctx.handleSubmit) },
    ...{ onKeydown: (...[$event]) => {
            __VLS_ctx.$emit('update:searchQuery', '');
            // @ts-ignore
            [$emit, handleSubmit,];
        } },
    ref: "inputRef",
    type: "text",
    value: (__VLS_ctx.searchQuery),
    placeholder: "输入命令或关键词... (按 / 聚焦)",
    ...{ class: "w-full pl-14 pr-4 py-3.5 bg-[#161B22] border border-[#30363D] rounded-xl text-gray-200 placeholder-gray-600 text-lg outline-none transition-all duration-300 focus:border-[#58A6FF] focus:shadow-[0_0_20px_rgba(88,166,255,0.15)] hover:border-[#484F58]" },
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-14']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-[#58A6FF]']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:shadow-[0_0_20px_rgba(88,166,255,0.15)]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-[#484F58]']} */ ;
if (__VLS_ctx.showHistory && __VLS_ctx.searchHistory.length > 0 && __VLS_ctx.searchQuery === '') {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "absolute top-full left-0 right-0 mt-2 bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden z-20" },
    });
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['top-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['left-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['right-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-20']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "flex items-center justify-between px-4 py-2 border-b border-[#30363D]" },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-b']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-xs text-gray-500" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (__VLS_ctx.clearHistory) },
        ...{ class: "text-xs text-gray-500 hover:text-gray-300 transition-colors" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-gray-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    for (const [item] of __VLS_vFor((__VLS_ctx.searchHistory))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (item),
            ...{ class: "flex items-center justify-between px-4 py-2 hover:bg-[#1C2333] cursor-pointer transition-colors group" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['py-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:bg-[#1C2333]']} */ ;
        /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        /** @type {__VLS_StyleScopedClasses['group']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.showHistory && __VLS_ctx.searchHistory.length > 0 && __VLS_ctx.searchQuery === ''))
                        return;
                    __VLS_ctx.selectHistory(item);
                    // @ts-ignore
                    [searchQuery, searchQuery, showHistory, searchHistory, searchHistory, clearHistory, selectHistory,];
                } },
            ...{ class: "text-sm text-gray-300 flex-1" },
        });
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
        (item);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.showHistory && __VLS_ctx.searchHistory.length > 0 && __VLS_ctx.searchQuery === ''))
                        return;
                    __VLS_ctx.removeHistory(item);
                    // @ts-ignore
                    [removeHistory,];
                } },
            ...{ class: "text-gray-600 hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-all" },
        });
        /** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:text-gray-400']} */ ;
        /** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
        let __VLS_5;
        /** @ts-ignore @type { | typeof __VLS_components.X} */
        X;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
            size: (14),
        }));
        const __VLS_7 = __VLS_6({
            size: (14),
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        [];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => __VLS_exposed,
    __typeEmits: {},
    __typeProps: {},
});
export default {};
