/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeft, HardDrive, Folder, File, ChevronRight, Tag, AlertTriangle, } from 'lucide-vue-next';
import { directories } from '@/data/directories';
import { commands } from '@/data/commands';
const router = useRouter();
const activeFilter = ref('all');
const expandedPaths = ref(new Set());
const filters = computed(() => [
    { label: '全部', value: 'all', count: directories.length },
    { label: '核心', value: 'core', count: directories.filter(d => d.importance === 'core').length },
    { label: '常用', value: 'common', count: directories.filter(d => d.importance === 'common').length },
    { label: '补充', value: 'supplementary', count: directories.filter(d => d.importance === 'supplementary').length },
]);
const sortedDirectories = computed(() => {
    const filtered = activeFilter.value === 'all'
        ? [...directories]
        : directories.filter(d => d.importance === activeFilter.value);
    return filtered.sort((a, b) => a.shortName.localeCompare(b.shortName));
});
const toggleExpand = (path) => {
    const next = new Set(expandedPaths.value);
    if (next.has(path)) {
        next.delete(path);
    }
    else {
        next.add(path);
    }
    expandedPaths.value = next;
};
const importanceLabel = (importance) => {
    const map = { core: '核心', common: '常用', supplementary: '补充' };
    return map[importance] ?? importance;
};
const importanceClass = (importance) => {
    const map = {
        core: 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30',
        common: 'bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30',
        supplementary: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
    };
    return map[importance] ?? '';
};
const commandExists = (cmdName) => commands.some(c => c.name === cmdName);
const navigateToCommand = (cmdName) => {
    if (commandExists(cmdName)) {
        router.push(`/command/${cmdName}`);
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen bg-[#0D1117] text-gray-200" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0D1117]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-200']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-4xl mx-auto px-4 py-8 lg:py-12" },
});
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:py-12']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$router.push('/');
            // @ts-ignore
            [$router,];
        } },
    ...{ class: "flex items-center gap-2 text-gray-400 hover:text-[#58A6FF] mb-8 transition-colors" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#58A6FF]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.ArrowLeft} */
ArrowLeft;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    size: (18),
}));
const __VLS_2 = __VLS_1({
    size: (18),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-8" },
});
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-3xl font-bold text-gray-100 mb-2" },
});
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-gray-400" },
});
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-[#7EE787] font-mono" },
});
/** @type {__VLS_StyleScopedClasses['text-[#7EE787]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-wrap gap-2 mb-6" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
for (const [f] of __VLS_vFor((__VLS_ctx.filters))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeFilter = f.value;
                // @ts-ignore
                [filters, activeFilter,];
            } },
        key: (f.value),
        ...{ class: ([
                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border',
                __VLS_ctx.activeFilter === f.value
                    ? 'bg-[#BC8CFF]/15 text-[#BC8CFF] border-[#BC8CFF]/30'
                    : 'text-gray-400 border-[#30363D] hover:text-gray-200 hover:border-[#30363D]'
            ]) },
    });
    /** @type {__VLS_StyleScopedClasses['px-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-1.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    (f.label);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "ml-1 text-xs opacity-60" },
    });
    /** @type {__VLS_StyleScopedClasses['ml-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['opacity-60']} */ ;
    (f.count);
    // @ts-ignore
    [activeFilter,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "bg-[#161B22] border border-[#30363D] rounded-xl overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['bg-[#161B22]']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "px-5 py-3 border-b border-[#30363D] bg-[#0D1117]" },
});
/** @type {__VLS_StyleScopedClasses['px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#0D1117]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex items-center gap-2 font-mono" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.HardDrive} */
HardDrive;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    size: (16),
    ...{ class: "text-[#58A6FF]" },
}));
const __VLS_7 = __VLS_6({
    size: (16),
    ...{ class: "text-[#58A6FF]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['text-[#58A6FF]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-[#7EE787] font-bold text-lg" },
});
/** @type {__VLS_StyleScopedClasses['text-[#7EE787]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-gray-500 text-sm" },
});
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
for (const [dir, idx] of __VLS_vFor((__VLS_ctx.sortedDirectories))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (dir.path),
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleExpand(dir.path);
                // @ts-ignore
                [sortedDirectories, toggleExpand,];
            } },
        ...{ class: "flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-200 hover:bg-[#1C2333] group" },
        ...{ class: ({ 'bg-[#1C2333]': __VLS_ctx.expandedPaths.has(dir.path) }) },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:bg-[#1C2333]']} */ ;
    /** @type {__VLS_StyleScopedClasses['group']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-[#1C2333]']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-gray-600 font-mono text-sm w-5 text-right shrink-0 select-none" },
    });
    /** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-right']} */ ;
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['select-none']} */ ;
    (idx === __VLS_ctx.sortedDirectories.length - 1 ? '└──' : '├──');
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.ChevronRight} */
    ChevronRight;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        size: (14),
        ...{ class: "shrink-0 transition-transform duration-200 text-gray-500" },
        ...{ class: ({ 'rotate-90': __VLS_ctx.expandedPaths.has(dir.path) }) },
    }));
    const __VLS_12 = __VLS_11({
        size: (14),
        ...{ class: "shrink-0 transition-transform duration-200 text-gray-500" },
        ...{ class: ({ 'rotate-90': __VLS_ctx.expandedPaths.has(dir.path) }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['rotate-90']} */ ;
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.Folder} */
    Folder;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        size: (16),
        ...{ class: "shrink-0" },
        ...{ class: (__VLS_ctx.expandedPaths.has(dir.path) ? 'text-[#BC8CFF]' : 'text-gray-500 group-hover:text-[#BC8CFF]') },
    }));
    const __VLS_17 = __VLS_16({
        size: (16),
        ...{ class: "shrink-0" },
        ...{ class: (__VLS_ctx.expandedPaths.has(dir.path) ? 'text-[#BC8CFF]' : 'text-gray-500 group-hover:text-[#BC8CFF]') },
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "font-mono font-bold transition-colors" },
        ...{ class: (__VLS_ctx.expandedPaths.has(dir.path) ? 'text-[#BC8CFF]' : 'text-[#7EE787] group-hover:text-[#BC8CFF]') },
    });
    /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
    (dir.shortName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-gray-400 text-sm hidden sm:inline" },
    });
    /** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:inline']} */ ;
    (dir.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (__VLS_ctx.importanceClass(dir.importance)) },
        ...{ class: "px-1.5 py-0.5 rounded text-[10px] font-semibold border ml-auto shrink-0" },
    });
    /** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[10px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['border']} */ ;
    /** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
    (__VLS_ctx.importanceLabel(dir.importance));
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.Transition | typeof __VLS_components.Transition} */
    Transition;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        enterActiveClass: "transition-all duration-200 ease-out",
        leaveActiveClass: "transition-all duration-150 ease-in",
        enterFromClass: "max-h-0 opacity-0",
        leaveToClass: "max-h-0 opacity-0",
    }));
    const __VLS_22 = __VLS_21({
        enterActiveClass: "transition-all duration-200 ease-out",
        leaveActiveClass: "transition-all duration-150 ease-in",
        enterFromClass: "max-h-0 opacity-0",
        leaveToClass: "max-h-0 opacity-0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const { default: __VLS_25 } = __VLS_23.slots;
    if (__VLS_ctx.expandedPaths.has(dir.path)) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "overflow-hidden" },
        });
        /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "pl-14 pr-5 pb-4 border-l-2 border-[#30363D] ml-[2.2rem]" },
        });
        /** @type {__VLS_StyleScopedClasses['pl-14']} */ ;
        /** @type {__VLS_StyleScopedClasses['pr-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-l-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-[#30363D]']} */ ;
        /** @type {__VLS_StyleScopedClasses['ml-[2.2rem]']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-gray-300 text-sm leading-relaxed mb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['text-gray-300']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        (dir.description);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center gap-1.5 text-xs text-gray-500 mb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['gap-1.5']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        let __VLS_26;
        /** @ts-ignore @type { | typeof __VLS_components.Tag} */
        Tag;
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
            size: (12),
        }));
        const __VLS_28 = __VLS_27({
            size: (12),
        }, ...__VLS_functionalComponentArgsRest(__VLS_27));
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        (dir.origin);
        if (dir.keyFiles.length > 0) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "mb-3" },
            });
            /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2" },
            });
            /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
            /** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
            /** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "space-y-1" },
            });
            /** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
            for (const [file, fi] of __VLS_vFor((dir.keyFiles))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                    key: (file.path),
                    ...{ class: "flex items-center gap-2 text-sm" },
                });
                /** @type {__VLS_StyleScopedClasses['flex']} */ ;
                /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
                /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "text-gray-600 font-mono w-4 text-right shrink-0 select-none" },
                });
                /** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
                /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
                /** @type {__VLS_StyleScopedClasses['w-4']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-right']} */ ;
                /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
                /** @type {__VLS_StyleScopedClasses['select-none']} */ ;
                (fi === dir.keyFiles.length - 1 ? '└──' : '├──');
                let __VLS_31;
                /** @ts-ignore @type { | typeof __VLS_components.File} */
                File;
                // @ts-ignore
                const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
                    size: (13),
                    ...{ class: "text-[#58A6FF] shrink-0" },
                }));
                const __VLS_33 = __VLS_32({
                    size: (13),
                    ...{ class: "text-[#58A6FF] shrink-0" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_32));
                /** @type {__VLS_StyleScopedClasses['text-[#58A6FF]']} */ ;
                /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
                __VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({
                    ...{ class: "font-mono text-[#7EE787] text-xs" },
                });
                /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-[#7EE787]']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
                (file.path);
                __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                    ...{ class: "text-gray-500 text-xs" },
                });
                /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
                (file.description);
                // @ts-ignore
                [sortedDirectories, expandedPaths, expandedPaths, expandedPaths, expandedPaths, expandedPaths, importanceClass, importanceLabel,];
            }
        }
        if (dir.tips) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flex items-start gap-2 bg-[#F0883E]/10 border border-[#F0883E]/20 rounded-lg p-3 mb-3" },
            });
            /** @type {__VLS_StyleScopedClasses['flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['items-start']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
            /** @type {__VLS_StyleScopedClasses['bg-[#F0883E]/10']} */ ;
            /** @type {__VLS_StyleScopedClasses['border']} */ ;
            /** @type {__VLS_StyleScopedClasses['border-[#F0883E]/20']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
            /** @type {__VLS_StyleScopedClasses['p-3']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
            let __VLS_36;
            /** @ts-ignore @type { | typeof __VLS_components.AlertTriangle} */
            AlertTriangle;
            // @ts-ignore
            const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
                size: (14),
                ...{ class: "text-[#F0883E] mt-0.5 shrink-0" },
            }));
            const __VLS_38 = __VLS_37({
                size: (14),
                ...{ class: "text-[#F0883E] mt-0.5 shrink-0" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_37));
            /** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
            /** @type {__VLS_StyleScopedClasses['mt-0.5']} */ ;
            /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
                ...{ class: "text-[#F0883E] text-xs leading-relaxed" },
            });
            /** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
            /** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
            (dir.tips);
        }
        if (dir.relatedCommands.length > 0) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "flex items-center gap-2 flex-wrap" },
            });
            /** @type {__VLS_StyleScopedClasses['flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
            /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "text-xs text-gray-500" },
            });
            /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
            for (const [cmd] of __VLS_vFor((dir.relatedCommands))) {
                __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                    ...{ onClick: (...[$event]) => {
                            if (!(__VLS_ctx.expandedPaths.has(dir.path)))
                                return;
                            if (!(dir.relatedCommands.length > 0))
                                return;
                            __VLS_ctx.navigateToCommand(cmd);
                            // @ts-ignore
                            [navigateToCommand,];
                        } },
                    key: (cmd),
                    ...{ class: ([
                            'px-2 py-0.5 rounded text-xs font-mono border transition-all duration-200',
                            __VLS_ctx.commandExists(cmd)
                                ? 'bg-[#BC8CFF]/10 text-[#BC8CFF] border-[#BC8CFF]/30 hover:bg-[#BC8CFF]/20'
                                : 'bg-[#0D1117] text-gray-600 border-[#30363D] cursor-not-allowed'
                        ]) },
                });
                /** @type {__VLS_StyleScopedClasses['px-2']} */ ;
                /** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
                /** @type {__VLS_StyleScopedClasses['rounded']} */ ;
                /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
                /** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
                /** @type {__VLS_StyleScopedClasses['border']} */ ;
                /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
                /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
                (cmd);
                // @ts-ignore
                [commandExists,];
            }
        }
    }
    // @ts-ignore
    [];
    var __VLS_23;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
