<script setup>
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();

defineProps({
  data: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});

function isActive(ind) {
  if (ind === globalVariables.dealerRendering.active) {
    return true;
  } else return;

  //:class="clickedDealer(index)"
}
</script>

<template>
  <div v-show="isActive(index) || globalVariables.dealerRendering.active === null"
    class="flex justify-between h-auto border-b-2 border-black bg-white py-y-standard px-x-standard"
    :class="{ active: isActive(index) }">
    <div class="flex flex-col ">
      <h2 class="text-lg font-bold">{{ data.dealer }}</h2>
      <ul class="mt-y-standard">
        <li>{{ data.street }}</li>
        <li class="mb-y-standard">{{ data.zip }} {{ data.town }}</li>
        <li>{{ data.areaCode }}-{{ data.phone }}</li>
      </ul>
    </div>
    <button aria-label="Stäng enskild handlare och lista alla" class="w-[35px] h-[22px]" v-show="isActive(index)"
      @click="globalVariables.dealerRendering.active = null">
      <div class="bg-black w-[35px] h-[2px] mb-[8px] relative top-[10px] rotate-45 duration-200"></div>
      <div class="bg-black w-[35px] h-[2px] relative -rotate-45 duration-200"></div>
    </button>
  </div>

</template>

<style scoped>
.active {
  height: 100%;
  top: 0;
  border-bottom: none;
}
</style>