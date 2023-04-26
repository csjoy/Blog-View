import { ref, computed } from "vue"


export const useSearch = (items: any) => {
  const searchTerm = ref("")
  const filters = ref(["title"])
  const filteredItems = computed(() => {
    return items.value.filter((item: any) => {
      return filters.value.some(filter => {
        return item[filter].toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    })
  })

  return { searchTerm, filteredItems, filters }
}