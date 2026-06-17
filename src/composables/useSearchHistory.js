import { ref, watch } from 'vue';
const STORAGE_KEY = 'linux-cmd-search-history';
const MAX_HISTORY = 10;
function loadHistory() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }
    catch {
        return [];
    }
}
const searchHistory = ref(loadHistory());
watch(searchHistory, (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
}, { deep: true });
export function useSearchHistory() {
    const addHistory = (query) => {
        const trimmed = query.trim();
        if (!trimmed)
            return;
        const filtered = searchHistory.value.filter((q) => q !== trimmed);
        filtered.unshift(trimmed);
        searchHistory.value = filtered.slice(0, MAX_HISTORY);
    };
    const clearHistory = () => {
        searchHistory.value = [];
    };
    const removeHistory = (query) => {
        searchHistory.value = searchHistory.value.filter((q) => q !== query);
    };
    return {
        searchHistory,
        addHistory,
        clearHistory,
        removeHistory,
    };
}
