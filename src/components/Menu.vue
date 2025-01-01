<script setup>
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();
</script>

<template>
  <nav class="md:hidden z-999 top-[80px] absolute h-[82vh] text-lg w-full flex flex-col justify-evenly items-center px-x-standard bg-white">
    <div class="mb-y-standard">
      <button>Modeller</button>
    </div>
    <div class="mb-y-standard">
      <button>Bygg din bil</button>
    </div>
    <div class="mb-y-standard">
      <button>Återförsäljare</button>
    </div>
    <div>
      <button @click="globalVariables.hideAll('history')">Vår historia</button>
    </div>
  </nav>
</template>

<style scoped>
</style>