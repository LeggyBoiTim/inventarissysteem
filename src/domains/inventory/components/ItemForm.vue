<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Item } from '../store';

const router = useRouter();

const props = defineProps({
    item: {
        type: Object as () => Item,
        required: true
    }
});

const item = props.item;

const emit = defineEmits<{submit: [item: any]}>();

const handleSubmit = (event: Event) => {
    const item = {
        id: (event.target as HTMLInputElement).id.value,
        name: (event.target as HTMLInputElement).name.value,
        actualAmount: (event.target as HTMLInputElement).actualAmount.value,
        minimumAmount: (event.target as HTMLInputElement).minimumAmount.value
    };
    emit('submit', item);
    router.push('/overview');
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <p>Artikel: <input name="name" type="text" :value="item.name" required></p>
        <p>Aantal: <input name="actualAmount" type="number" min="0" step="1" :value="item.actualAmount"></p>
        <p>Minimum Aantal: <input name="minimumAmount" type="number" min="0" step="1" :value="item.minimumAmount"></p></br>
        <input name="id" type="hidden" :value="item.id">
        <button type="submit">{{ router.currentRoute.value.path === '/create' ? 'Voeg Toe' : 'Bewerk' }}</button>
        <RouterLink to="/overview">Annuleer</RouterLink>
    </form>
</template>

<style scoped>
input {
    width: 5em;
    font-size: 11pt;
}

button {
    margin: 10px;
}

a {
    color: white;
}
</style>
