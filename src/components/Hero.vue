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
    <ModelPresentation v-for="(model, index) in models" :key="index" :data="model" />
  </div>
</template>

<style scoped>

</style>