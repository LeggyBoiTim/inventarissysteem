<script setup>
import Inventory from '../components/Inventory.vue';
import { getOrderInventory, getItemIndexById } from '../store';

const inventory = getOrderInventory;

const readInput = (id, value) => {
    inventory.value[getItemIndexById(id).value].amount = value;
}
</script>

<template>
    <nav>
        <RouterLink to="/overview">Terug Naar Overzicht</RouterLink>
    </nav>
    <br>
    <Inventory :inventory="inventory" @input="readInput"/>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
