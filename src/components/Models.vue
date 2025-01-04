<script setup>
import ModelPresentation from './ModelPresentation.vue'
import { useContentStore } from '../stores/content'

const content = useContentStore();
const models = content.models;
</script>

<template>
  <div class="w-full min-h-[82vh] flex flex-col">
    <ModelPresentation v-for="(model, index) in models" :key="index" :data="model" />
  </div>
</template>

<style scoped>
</style>