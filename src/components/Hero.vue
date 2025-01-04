<script setup>
import ModelPresentation from './ModelPresentation.vue'
import Welcome from './Welcome.vue'
import { useContentStore } from '../stores/content'

const content = useContentStore();
const models = content.models;
</script>

<template>
  <div class="flex flex-col">
    <Welcome />
  </div>
</template>

<style scoped>

</style>