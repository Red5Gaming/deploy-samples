<script setup lang="ts">
const { data } = await useFetch('/api/hello');
</script>

<template>
  <main style="font-family: system-ui; padding: 2rem">
    <h1>Nuxt SSR sample</h1>
    <p>{{ data?.message }} (rendered at {{ data?.time }})</p>
  </main>
</template>
