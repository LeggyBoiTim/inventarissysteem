<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import { getInventory, getItemIndexById } from '../store';
import type { Item } from '../store';

const inventory = getInventory;

const readInput = (id: number, value: number) => {
    (inventory.value[getItemIndexById(id).value] as Item).actualAmount = value;
}
</script>

<template>
    <nav>
        <RouterLink to="/order">Naar Bestellijst</RouterLink>
    </nav>
    <br>
    <InventoryTable :inventory="inventory" @input="readInput"/>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
