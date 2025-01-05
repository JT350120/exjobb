<script setup>
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="box w-full h-[70vh] flex flex-col justify-between border-t-[2px] border-black bg-yellow py-y-standard px-x-standard">
    <div>
      <h1 class="text-xl md:text-2xl font-bold">Peiriant {{ data.model }} </h1>
      <h2 class="text-md md:text-lg font-bold">Från {{ data.startingPrice }} kr</h2>
      <div class="w-full md:w-[50%] bg-black h-[2px] mt-y-standard"/>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-end">
        <button class="text-md md:text-lg font-bold mx-x-standard">Upptäck</button>
        <button class="text-md md:text-lg font-bold" @click="globalVariables.show('configurator'), globalVariables.props.model = data.model">Bygg din egen</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box:first-child {
  border-top: none;
}
</style>