import { computed, ref } from "vue";
import type { Ref } from "vue";

export type Item = {
    id: number;
    name: string;
    actualAmount: number;
    minimumAmount: number;
};
export type Inventory = Item[];

// State
const inventory: Ref<Inventory> = ref([
    { id: 1, name: 'Brood', actualAmount: 132, minimumAmount: 100 },
    { id: 2, name: 'Rundergehakt', actualAmount: 7, minimumAmount: 50 },
    { id: 3, name: 'Avocado', actualAmount: 37, minimumAmount: 30 },
    { id: 4, name: 'Chips', actualAmount: 26, minimumAmount: 30 },
    { id: 5, name: 'Yoghurt', actualAmount: 43, minimumAmount: 30 },
    { id: 6, name: 'Chocoladereep', actualAmount: 87, minimumAmount: 30 },
    { id: 7, name: 'IJsthee', actualAmount: 16, minimumAmount: 50 },
    { id: 8, name: 'Melk', actualAmount: 91, minimumAmount: 50 },
    { id: 9, name: 'Sinaasappelsap', actualAmount: 8, minimumAmount: 30 },
    { id: 10, name: 'Wijn', actualAmount: 14, minimumAmount: 30 },
]);

// Getters
export const getInventory = computed<Inventory>(() => inventory.value);
export const getOrderInventory = computed<Inventory>(() => inventory.value.filter((item) => item.actualAmount < item.minimumAmount));
export const getItemById = (id: number) => computed(() => inventory.value.find(item => item.id == id) as Item);
export const getItemIndexById = (id: number) => computed(() => inventory.value.indexOf(getItemById(id).value) as number);

// Actions
export const addItem = (item: Item) => inventory.value.push(item);
export const updateItem = (item: Item) => inventory.value[getItemIndexById(item.id).value] = item;
export const removeItem = (item: Item) => inventory.value.splice(getItemIndexById(item.id).value, 1);
