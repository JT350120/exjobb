<script setup>
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();
</script>

<template>
  <nav class="md:hidden z-999 top-[80px] absolute h-full text-lg w-full flex flex-col justify-evenly items-center border-b-2 border-black bg-white">
    <div class="mb-y-standard">
      <button @click="globalVariables.show('models')">Modeller</button>
    </div>
    <div class="mb-y-standard">
      <button @click="globalVariables.show('configurator'), globalVariables.props.model = null">Bygg din bil</button>
    </div>
    <div class="mb-y-standard">
      <button @click="globalVariables.show('dealers')">Återförsäljare</button>
    </div>
    <div>
      <button @click="globalVariables.show('history')">Vår historia</button>
    </div>
  </nav>
</template>

<style scoped>
</style>