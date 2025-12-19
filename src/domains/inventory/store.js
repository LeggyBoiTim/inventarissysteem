import { computed, ref } from "vue";

// State
const inventory = ref([
    { id: 1, name: 'Brood', actualAmount: 5, minimumAmount },
    { id: 2, name: 'Rundergehakt', actualAmount: 5, minimumAmount },
    { id: 3, name: 'Avocado', actualAmount: 5, minimumAmount },
    { id: 4, name: 'Chips', actualAmount: 5, minimumAmount },
    { id: 5, name: 'Yoghurt', actualAmount: 5, minimumAmount },
    { id: 6, name: 'Chocoladereep', actualAmount: 5, minimumAmount },
    { id: 7, name: 'IJsthee', actualAmount: 5, minimumAmount },
    { id: 8, name: 'Melk', actualAmount: 5, minimumAmount },
    { id: 9, name: 'Sinaasappelsap', actualAmount: 5, minimumAmount },
    { id: 10, name: 'Wijn', actualAmount: 5, minimumAmount },
]);

// Getters
export const getInventory = computed(() => inventory.value);
export const getItemById = (id) => computed(() => inventory.value.find(item => item.id == id));
export const getItemIndexById = (id) => computed(() => inventory.value.indexOf(getItemById(id).value));

// Actions
export const addItem = (item) => inventory.value.push(item);
export const updateItem = (item) => inventory.value[getItemIndexById(item.id).value] = item;
export const removeItem = (item) => inventory.value.splice(getItemIndexById(item.id).value, 1);
