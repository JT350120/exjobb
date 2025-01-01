<script setup>
import { useContentStore } from '../stores/content'

const content = useContentStore();
</script>

<template>
  <div class="w-full flex flex-col justify-between bg-yellow py-y-standard px-x-standard">
    <div>
      <h1 class="text-xl md:text-2xl font-bold">Peiriant {{ content.models[0] }}</h1>
      <h2 class="text-md md:text-lg font-bold">Lorem ipsum, dolor sit</h2>
      <div class="w-full md:w-[50%] bg-black h-[2px] mt-y-standard"/>
    </div>
    <div class="flex flex-col">
      <div class="w-full md:self-end md:w-[50%] bg-black h-[2px] mb-y-standard" />
      <div class="flex justify-end">
        <h2 class="text-md md:text-lg font-bold mx-x-standard">Upptäck</h2>
        <h2 class="text-md md:text-lg font-bold">Bygg din egen</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>