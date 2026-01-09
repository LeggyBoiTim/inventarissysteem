<script setup>
import Inventory from '../components/Inventory.vue';
import { getInventory, getItemIndexById } from '../store';

const inventory = getInventory;

const readInput = (id, value) => {
    inventory.value[getItemIndexById(id).value].actualAmount = value;
}
</script>

<template>
    <nav>
        <RouterLink to="/order">Naar Bestellijst</RouterLink>
    </nav>
    <br>
    <Inventory :inventory="inventory" @input="readInput"/>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
