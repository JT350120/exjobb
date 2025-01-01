<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="w-full h-[82vh] flex border-t-[2px] border-black bg-green py-y-standard px-x-standard">
    <div class="bg-white w-full">Vänster</div>
    <div class="bg-green w-full">Höger</div>
  </div>
</template>

<style scoped>
</style>