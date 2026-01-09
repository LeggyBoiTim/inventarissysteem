<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const item = props.item;

const emit = defineEmits(['submit']);

const handleSubmit = (event) => {
    const item = {
        id: event.target.id.value,
        name: event.target.name.value,
        actualAmount: event.target.actualAmount.value,
        minimumAmount: event.target.minimumAmount.value
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
