<script setup lang="ts">
import { useRoute } from 'vue-router';
import ItemForm from '../components/ItemForm.vue';
import { getItemById, updateItem } from '../store';
import type { Item } from '../store';

const item: Item = getItemById(useRoute().params.id as unknown as number).value;
</script>

<template>
    <ItemForm :item="item" @submit="updateItem"/>
</template>

<style scoped>
</style>
