<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import { getInventory, getItemIndexById, getOrderInventory } from '../store';
import type { Item } from '../store';

const inventory = getInventory;
const orderInventory = getOrderInventory;

const readInput = (id: number, value: number) => {
    (inventory.value[getItemIndexById(id).value] as Item).actualAmount = value;
}
</script>

<template>
    <nav>
        <RouterLink to="/overview">Terug Naar Overzicht</RouterLink>
    </nav>
    <br>
    <InventoryTable :inventory="orderInventory" @input="readInput"/>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
