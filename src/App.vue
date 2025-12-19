<script setup>
</script>

<template>
    <nav>
        <RouterLink to="/">Hoofdpagina</RouterLink>
    </nav>
    <br>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
nav > * {
    padding: 10px;
}
</style>
