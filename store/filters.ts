// store/filters.ts
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore({
  id: 'filter-store',
  state: () => {
    return {
      filtersList: ['youtube', 'twitch'],
    }
  },
  actions: {
    addValueToFilterList(value: string) {
      this.filtersList.push(value)
    },
    deleteValueToFilterList(index: number) {
      this.filtersList.splice(index, 1);
    },
    editValueFilterList(index: number, value: string) {
      console.log(value);
      this.filtersList[index] = value;
    }
  },
  getters: {
    filtersLists: state => state.filtersList,
  },
})
