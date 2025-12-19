import { computed, ref } from "vue";

// State
const inventory = ref([
    { id: 1, name: 'Brood', actualAmount: 132, minimumAmount: 1 },
    { id: 2, name: 'Rundergehakt', actualAmount: 7, minimumAmount: 1 },
    { id: 3, name: 'Avocado', actualAmount: 37, minimumAmount: 1 },
    { id: 4, name: 'Chips', actualAmount: 26, minimumAmount: 1 },
    { id: 5, name: 'Yoghurt', actualAmount: 43, minimumAmount: 1 },
    { id: 6, name: 'Chocoladereep', actualAmount: 87, minimumAmount: 1 },
    { id: 7, name: 'IJsthee', actualAmount: 16, minimumAmount: 1 },
    { id: 8, name: 'Melk', actualAmount: 91, minimumAmount: 1 },
    { id: 9, name: 'Sinaasappelsap', actualAmount: 8, minimumAmount: 1 },
    { id: 10, name: 'Wijn', actualAmount: 54, minimumAmount: 1 },
]);

// Getters
export const getInventory = computed(() => inventory.value);
export const getItemById = (id) => computed(() => inventory.value.find(item => item.id == id));
export const getItemIndexById = (id) => computed(() => inventory.value.indexOf(getItemById(id).value));

// Actions
export const addItem = (item) => inventory.value.push(item);
export const updateItem = (item) => inventory.value[getItemIndexById(item.id).value] = item;
export const removeItem = (item) => inventory.value.splice(getItemIndexById(item.id).value, 1);
