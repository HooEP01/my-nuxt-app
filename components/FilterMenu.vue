<script setup>
import { useFiltersStore } from '~/store/filters'
import { storeToRefs } from 'pinia'

const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList, deleteValueToFilterList, editValueFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)
</script>

<template>
  <div>
    <div v-for="(item, index) in filtersList">
        <button @click="deleteValueToFilterList(index)">{{ item }}</button>
        <button @click="editValueFilterList(index, inputVal)">Edit</button>
    </div>

      <input v-model="inputVal" />
    
    <button @click="addValueToFilterList(inputVal)">+</button>
  </div>
</template>
