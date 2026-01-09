<script setup>
import Inventory from '../components/Inventory.vue';
import { getInventory, getItemIndexById, getOrderInventory } from '../store';

const inventory = getInventory;
const orderInventory = getOrderInventory;

const readInput = (id, value) => {
    inventory.value[getItemIndexById(id).value].actualAmount = value;
}
</script>

<template>
    <nav>
        <RouterLink to="/overview">Terug Naar Overzicht</RouterLink>
    </nav>
    <br>
    <Inventory :inventory="orderInventory" @input="readInput"/>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
