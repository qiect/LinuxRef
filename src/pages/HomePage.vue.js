/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Menu, X, Star, AlertTriangle } from 'lucide-vue-next';
import { commands } from '@/data/commands';
import SearchBar from '@/components/SearchBar.vue';
import CategoryNav from '@/components/CategoryNav.vue';
import DailyCommand from '@/components/DailyCommand.vue';
import { useFavorites } from '@/composables/useFavorites';
const router = useRouter();
const { isFavorite, toggleFavorite, favorites } = useFavorites();
const searchQuery = ref('');
const selectedCategory = ref(null);
const sidebarOpen = ref(false);
const focusedIndex = ref(-1);
const cardRefs = ref({});
const searchBarRef = ref(null);
const filteredCommands = computed(() => {
    return commands.filter((cmd) => {
        if (selectedCategory.value === 'favorites') {
            if (!isFavorite(cmd.name))
                return false;
        }
        else {
            const matchCategory = selectedCategory.value === null || cmd.categoryId === selectedCategory.value;
            if (!matchCategory)
                return false;
        }
        const q = searchQuery.value.toLowerCase();
        const matchSearch = q === '' ||
            cmd.name.toLowerCase().includes(q) ||
            cmd.simpleExplain.toLowerCase().includes(q) ||
            cmd.detailExplain.toLowerCase().includes(q);
        return matchSearch;
    });
});
const handleKeydown = (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (focusedIndex.value < filteredCommands.value.length - 1) {
            focusedIndex.value++;
            cardRefs.value[focusedIndex.value]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (focusedIndex.value > 0) {
            focusedIndex.value--;
            cardRefs.value[focusedIndex.value]?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        else {
            focusedIndex.value = -1;
            searchBarRef.value?.focusInput();
        }
    }
    else if (e.key === 'Enter' && focusedIndex.value >= 0) {
        e.preventDefault();
        const cmd = filteredCommands.value[focusedIndex.value];
        if (cmd) {
            router.push(`/command/${cmd.name}`);
        }
    }
    else if (e.key === 'Escape') {
        searchQuery.value = '';
        focusedIndex.value = -1;
    }
};
onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onKeydown: (__VLS_ctx.handleKeydown) },
    ...{ class: "min-h-screen bg-[#0D1117] text-gray-200 flex" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0D1117]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.sidebarOpen = !__VLS_ctx.sidebarOpen;
            // @ts-ignore
            [handleKeydown, sidebarOpen, sidebarOpen,];
        } },
    ...{ class: "lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#161B22] border border-[#30363D] rounded-lg text-gray-400 hover:text-gray-200" },
});
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-4']} */ ;
/** @type {__VLS_StyleScopedClasses['left-4']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-gray-200']} */ ;
if (__VLS_ctx.sidebarOpen) {
    let __VLS_0;
    /** @ts-ignore @type { | typeof __VLS_components.X} */
    X;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        size: (20),
    }));
    const __VLS_2 = __VLS_1({
        size: (20),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    let __VLS_5;
    /** @ts-ignore @type { | typeof __VLS_components.Menu} */
    Menu;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
        size: (20),
    }));
    const __VLS_7 = __VLS_6({
        size: (20),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: ([
            'fixed lg:static inset-y-0 left-0 z-40 w-56 bg-[#0D1117] border-r border-[#30363D] p-4 pt-16 lg:pt-4 transform transition-transform duration-300 lg:transform-none',
            __VLS_ctx.sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:static']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-40']} */ ;
/** @type {__VLS_StyleScopedClasses['w-56']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0D1117]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-16']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:transform-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4" },
});
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
const __VLS_10 = CategoryNav;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
    ...{ 'onUpdate:selectedCategory': {} },
    selectedCategory: (__VLS_ctx.selectedCategory),
}));
const __VLS_12 = __VLS_11({
    ...{ 'onUpdate:selectedCategory': {} },
    selectedCategory: (__VLS_ctx.selectedCategory),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_15;
const __VLS_16 = {
    /** @type {typeof __VLS_15.'update:selectedCategory'} */
    'onUpdate:selectedCategory': (...[$event]) => {
        __VLS_ctx.selectedCategory = $event;
        // @ts-ignore
        [sidebarOpen, sidebarOpen, selectedCategory, selectedCategory,];
    },
};
var __VLS_13;
var __VLS_14;
if (__VLS_ctx.sidebarOpen) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.sidebarOpen))
                    return;
                __VLS_ctx.sidebarOpen = false;
                // @ts-ignore
                [sidebarOpen, sidebarOpen,];
            } },
        ...{ class: "fixed inset-0 bg-black/50 z-30 lg:hidden" },
    });
    /** @type {__VLS_StyleScopedClasses['fixed']} */ ;
    /** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-black/50']} */ ;
    /** @type {__VLS_StyleScopedClasses['z-30']} */ ;
    /** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
    ...{ class: "flex-1 p-4 lg:p-8 max-w-5xl mx-auto w-full" },
    tabindex: "-1",
});
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const __VLS_17 = DailyCommand;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-8" },
});
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
const __VLS_22 = SearchBar;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
    ...{ 'onUpdate:searchQuery': {} },
    ref: "searchBarRef",
    searchQuery: (__VLS_ctx.searchQuery),
}));
const __VLS_24 = __VLS_23({
    ...{ 'onUpdate:searchQuery': {} },
    ref: "searchBarRef",
    searchQuery: (__VLS_ctx.searchQuery),
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
let __VLS_27;
const __VLS_28 = {
    /** @type {typeof __VLS_27.'update:searchQuery'} */
    'onUpdate:searchQuery': (...[$event]) => {
        __VLS_ctx.searchQuery = $event;
        // @ts-ignore
        [searchQuery, searchQuery,];
    },
};
var __VLS_29;
var __VLS_25;
var __VLS_26;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center justify-between mb-4" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-lg font-semibold text-gray-300" },
});
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
(__VLS_ctx.selectedCategory === 'favorites' ? '我的收藏' : '');
(__VLS_ctx.filteredCommands.length);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hidden sm:flex items-center gap-2 text-xs text-gray-600" },
});
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.kbd, __VLS_intrinsics.kbd)({
    ...{ class: "px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]" },
});
/** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.kbd, __VLS_intrinsics.kbd)({
    ...{ class: "px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]" },
});
/** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.kbd, __VLS_intrinsics.kbd)({
    ...{ class: "px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]" },
});
/** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.kbd, __VLS_intrinsics.kbd)({
    ...{ class: "px-1.5 py-0.5 bg-[#161B22] border border-[#30363D] rounded text-[10px]" },
});
/** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
if (__VLS_ctx.filteredCommands.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4" },
    });
    /** @type {__VLS_StyleScopedClasses['grid']} */ ;
    /** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['xl:grid-cols-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
    for (const [cmd, idx] of __VLS_vFor((__VLS_ctx.filteredCommands))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredCommands.length > 0))
                        return;
                    __VLS_ctx.$router.push(`/command/${cmd.name}`);
                    // @ts-ignore
                    [selectedCategory, filteredCommands, filteredCommands, filteredCommands, $router,];
                } },
            key: (cmd.name),
            ref: ((el) => { if (el)
                __VLS_ctx.cardRefs[idx] = el; }),
            ...{ class: ([
                    'cursor-pointer bg-[#161B22] border rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(88,166,255,0.12)] hover:border-[#58A6FF]/40 group relative',
                    __VLS_ctx.focusedIndex === idx ? 'border-[#58A6FF]/60 shadow-[0_0_20px_rgba(88,166,255,0.15)] -translate-y-1' : 'border-[#30363D]'
                ]) },
        });
        /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
        /** @type {__VLS_StyleScopedClasses['border']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
        /** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:-translate-y-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:shadow-[0_0_24px_rgba(88,166,255,0.12)]']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:border-[#58A6FF]/40']} */ ;
        /** @type {__VLS_StyleScopedClasses['group']} */ ;
        /** @type {__VLS_StyleScopedClasses['relative']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center justify-between mb-2" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center gap-2" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-[#7EE787] font-mono text-lg font-bold group-hover:text-[#58A6FF] transition-colors" },
        });
        /** @type {__VLS_StyleScopedClasses['text-[#7EE787]']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['group-hover:text-[#58A6FF]']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
        (cmd.name);
        if (cmd.dangerLevel === 'danger') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-500/15 text-red-400 border border-red-500/30" },
            });
            /** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
            /** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
            /** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
            /** @type {__VLS_StyleScopedClasses['bg-red-500/15']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-red-400']} */ ;
            /** @type {__VLS_StyleScopedClasses['border']} */ ;
            /** @type {__VLS_StyleScopedClasses['border-red-500/30']} */ ;
            let __VLS_31;
            /** @ts-ignore @type { | typeof __VLS_components.AlertTriangle} */
            AlertTriangle;
            // @ts-ignore
            const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
                size: (10),
            }));
            const __VLS_33 = __VLS_32({
                size: (10),
            }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        }
        else if (cmd.dangerLevel === 'warning') {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F0883E]/15 text-[#F0883E] border border-[#F0883E]/30" },
            });
            /** @type {__VLS_StyleScopedClasses['inline-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
            /** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
            /** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
            /** @type {__VLS_StyleScopedClasses['bg-[#F0883E]/15']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
            /** @type {__VLS_StyleScopedClasses['border']} */ ;
            /** @type {__VLS_StyleScopedClasses['border-[#F0883E]/30']} */ ;
            let __VLS_36;
            /** @ts-ignore @type { | typeof __VLS_components.AlertTriangle} */
            AlertTriangle;
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
                size: (10),
            }));
            const __VLS_38 = __VLS_37({
                size: (10),
            }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredCommands.length > 0))
                        return;
                    __VLS_ctx.toggleFavorite(cmd.name);
                    // @ts-ignore
                    [cardRefs, focusedIndex, toggleFavorite,];
                } },
            ...{ class: "p-1 rounded transition-all duration-200" },
            ...{ class: (__VLS_ctx.isFavorite(cmd.name) ? 'text-[#F0883E]' : 'text-gray-600 hover:text-[#F0883E] opacity-0 group-hover:opacity-100') },
        });
        /** @type {__VLS_StyleScopedClasses['p-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
        /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
        let __VLS_41;
        /** @ts-ignore @type { | typeof __VLS_components.Star} */
        Star;
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
            size: (16),
            fill: (__VLS_ctx.isFavorite(cmd.name) ? '#F0883E' : 'none'),
        }));
        const __VLS_43 = __VLS_42({
            size: (16),
            fill: (__VLS_ctx.isFavorite(cmd.name) ? '#F0883E' : 'none'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-gray-400 text-sm leading-relaxed" },
        });
        /** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
        (cmd.simpleExplain);
        // @ts-ignore
        [isFavorite, isFavorite,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-center py-20 text-gray-500" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-lg" },
    });
    /** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
    (__VLS_ctx.selectedCategory === 'favorites' ? '还没有收藏任何命令' : '未找到匹配的命令');
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-sm mt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    (__VLS_ctx.selectedCategory === 'favorites' ? '点击命令卡片上的星标即可收藏' : '尝试其他关键词或分类');
}
// @ts-ignore
var __VLS_30 = __VLS_29;
// @ts-ignore
[selectedCategory, selectedCategory,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
