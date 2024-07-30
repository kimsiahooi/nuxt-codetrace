<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
})

useHead({
  link: [{ rel: 'canonical', href: 'http://localhost:3000' }],
})
</script>

<style>
body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
