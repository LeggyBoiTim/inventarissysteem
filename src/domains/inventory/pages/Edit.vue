<script setup>
import { useRoute } from 'vue-router';
import ItemForm from '../components/ItemForm.vue';
import { getItemById, updateItem } from '../store';

const item = getItemById(useRoute().params.id).value;
</script>

<template>
    <ItemForm :item="item" @submit="updateItem"/>
</template>

<style scoped>
</style>
