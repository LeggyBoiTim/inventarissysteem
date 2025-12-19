import { computed, ref } from "vue";

// State
const inventory = ref([

]);

// Getters
export const getInventory = computed(() => inventory.value);
export const getItemById = (id) => computed(() => inventory.value.find(item => item.id == id));
export const getItemIndexById = (id) => computed(() => inventory.value.indexOf(getItemById(id).value));

// Actions
export const addItem = (item) => inventory.value.push(item);
export const updateItem = (item) => inventory.value[getItemIndexById(item.id).value] = item;
export const removeItem = (item) => inventory.value.splice(getItemIndexById(item.id).value, 1);
