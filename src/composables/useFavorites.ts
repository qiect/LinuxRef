import { ref, watch } from 'vue'

const STORAGE_KEY = 'linux-cmd-favorites'

function loadFavorites(): string[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const favorites = ref<string[]>(loadFavorites())

watch(favorites, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

export function useFavorites() {
  const toggleFavorite = (name: string) => {
    const idx = favorites.value.indexOf(name)
    if (idx > -1) {
      favorites.value.splice(idx, 1)
    } else {
      favorites.value.push(name)
    }
  }

  const isFavorite = (name: string) => favorites.value.includes(name)

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
}
