<script setup>
import ItemForm from '../components/ItemForm.vue';
import { addItem, getInventory } from '../store';

const item = {id: parseInt(getInventory.value[getInventory.value.length - 1].id) + 1, name: '', actualAmount: 0, minimumAmount: 0};
</script>

<template>
    <ItemForm :item="item" @submit="addItem"/>
</template>

<style scoped>
</style>
