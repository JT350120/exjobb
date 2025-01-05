<script setup>
defineProps({
  model: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div>{{ model }}</div>
</template>

<style scoped>
</style>