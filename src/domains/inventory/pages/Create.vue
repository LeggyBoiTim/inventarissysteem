<script setup lang="ts">
import ItemForm from '../components/ItemForm.vue';
import { addItem, getInventory } from '../store';
import type { Item } from '../store';

const item: Item = {id: (getInventory.value[getInventory.value.length - 1] as Item).id + 1, name: '', actualAmount: 0, minimumAmount: 0};
</script>

<template>
    <ItemForm :item="item" @submit="addItem"/>
</template>

<style scoped>
</style>
