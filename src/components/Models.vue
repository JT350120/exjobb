<script setup>
import { computed } from 'vue'
import ModelPresentation from './ModelPresentation.vue'
import { useContentStore } from '../stores/content'

const content = useContentStore();
const models = computed(() => content.models);
</script>

<template>
  <div class="w-full min-h-[82vh] flex flex-col">
    <ModelPresentation v-for="(model, index) in models" :key="index" :indexOfModel="index" :data="model" />
  </div>
</template>

<style scoped>
</style>