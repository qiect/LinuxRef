/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="../../../root/.npm/_npx/2db181330ea4b15b/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
import { FolderOpen, FileText, Activity, Wifi, Shield, Monitor, HardDrive, Archive, Users, Package, LayoutGrid, Star, FolderTree, } from 'lucide-vue-next';
import { categories } from '@/data/commands';
import { useFavorites } from '@/composables/useFavorites';
const icons = {
    FolderOpen,
    FileText,
    Activity,
    Wifi,
    Shield,
    Monitor,
    HardDrive,
    Archive,
    Users,
    Package,
    LayoutGrid,
    Star,
    FolderTree,
};
const __VLS_props = defineProps();
const __VLS_emit = defineEmits();
const { favorites } = useFavorites();
const favoriteCount = computed(() => favorites.value.length);
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
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({
    ...{ class: "flex flex-col gap-1" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('update:selectedCategory', null);
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: ([
            'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            __VLS_ctx.selectedCategory === null
                ? 'bg-[#58A6FF]/15 text-[#58A6FF] shadow-[0_0_12px_rgba(88,166,255,0.2)]'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
const __VLS_0 = (__VLS_ctx.icons.LayoutGrid);
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    size: (18),
}));
const __VLS_2 = __VLS_1({
    size: (18),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('update:selectedCategory', 'favorites');
            // @ts-ignore
            [$emit, selectedCategory, icons,];
        } },
    ...{ class: ([
            'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
            __VLS_ctx.selectedCategory === 'favorites'
                ? 'bg-[#F0883E]/15 text-[#F0883E] shadow-[0_0_12px_rgba(240,136,62,0.2)]'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
        ]) },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
const __VLS_5 = (__VLS_ctx.icons.Star);
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    size: (18),
}));
const __VLS_7 = __VLS_6({
    size: (18),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
if (__VLS_ctx.favoriteCount > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "ml-auto text-xs bg-[#F0883E]/20 text-[#F0883E] px-1.5 py-0.5 rounded-full" },
    });
    /** @type {__VLS_StyleScopedClasses['ml-auto']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-[#F0883E]/20']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-[#F0883E]']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-1.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-0.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    (__VLS_ctx.favoriteCount);
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ class: "h-px bg-[#30363D] my-1 mx-2" },
});
/** @type {__VLS_StyleScopedClasses['h-px']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['my-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-2']} */ ;
for (const [cat] of __VLS_vFor((__VLS_ctx.categories))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('update:selectedCategory', __VLS_ctx.selectedCategory === cat.id ? null : cat.id);
                // @ts-ignore
                [$emit, selectedCategory, selectedCategory, icons, favoriteCount, favoriteCount, categories,];
            } },
        key: (cat.id),
        ...{ class: ([
                'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                __VLS_ctx.selectedCategory === cat.id
                    ? 'bg-[#58A6FF]/15 text-[#58A6FF] shadow-[0_0_12px_rgba(88,166,255,0.2)]'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#161B22]'
            ]) },
    });
    /** @type {__VLS_StyleScopedClasses['flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
    const __VLS_10 = (__VLS_ctx.icons[cat.icon]);
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        size: (18),
    }));
    const __VLS_12 = __VLS_11({
        size: (18),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (cat.name);
    // @ts-ignore
    [selectedCategory, icons, icons,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ class: "h-px bg-[#30363D] my-1 mx-2" },
});
/** @type {__VLS_StyleScopedClasses['h-px']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#30363D]']} */ ;
/** @type {__VLS_StyleScopedClasses['my-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-2']} */ ;
let __VLS_15;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
    to: "/directories",
    ...{ class: "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-gray-400 hover:text-[#BC8CFF] hover:bg-[#161B22]" },
}));
const __VLS_17 = __VLS_16({
    to: "/directories",
    ...{ class: "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-gray-400 hover:text-[#BC8CFF] hover:bg-[#161B22]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#BC8CFF]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#161B22]']} */ ;
const { default: __VLS_20 } = __VLS_18.slots;
const __VLS_21 = (__VLS_ctx.icons.FolderTree);
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    size: (18),
}));
const __VLS_23 = __VLS_22({
    size: (18),
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
// @ts-ignore
[icons,];
var __VLS_18;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
