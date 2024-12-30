<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <footer class="bg-black text-white px-x-standard py-y-standard">
    <div class="flex flex-col">
      <p>Adress</p>
      <p>Adress</p>
      <p>Adress</p>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    width: 100%;
    bottom: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>