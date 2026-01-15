<script setup lang="ts">
import { removeItem } from '../store';
import type { Inventory } from '../store';

const props = defineProps({
    inventory: {
        type: Array as () => Inventory,
        required: true
    }
});

const emit = defineEmits<{input: [id: number, value: number]}>();

const handleInput = (event: any) => {
    emit('input', event.target.id, event.target.value);
};
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Artikel</th>
                <th>Aantal</th>
                <th>Minimum<br>Aantal</th>
                <td colspan="2"><RouterLink to="/create">Voeg Artikel Toe</RouterLink></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item) in props.inventory" :key="item.id">
                <td>{{ item.name }}</td>
                <td><input @input="handleInput" :id="(item.id as unknown as string)" type="number" min="0" step="1" :value="item.actualAmount"></td>
                <td>{{ item.minimumAmount }}</td>
                <td><RouterLink :to="'/edit/' + item.id">Bewerk</RouterLink></td>
                <td><a @click="removeItem(item)">Verwijder</a></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

thead, tbody td:first-child {
    text-align: left;
}

input, tbody td:nth-child(3) {
    text-align: right;
}

td, th {
    border: 1px solid #888;
    padding: 10px;
}

thead td, tbody td:nth-last-child(-n+2) {
    border: none;
}

a {
    cursor: pointer;
}

input {
    width: 5em;
    font-size: 11pt;
}
</style>
