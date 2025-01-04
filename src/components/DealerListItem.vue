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
  <div v-show="isActive(index) || globalVariables.dealerRendering.active === null"class="flex flex-col h-auto border-b-2 border-black bg-white py-y-standard px-x-standard" :class="{ active: isActive(index) }">
    <h2 class="font-bold">{{ data.dealer }}</h2>
    <ul class="mt-y-standard">
      <li>{{ data.street }}</li>
      <li class="mb-y-standard">{{ data.zip }} {{ data.town }}</li>
      <li>{{ data.areaCode }}-{{ data.phone }}</li>
    </ul>
    <button v-show="isActive(index)" @click="globalVariables.dealerRendering.active = null">Stäng</button>
  </div>
</template>

<style scoped>
.active {
  height: 100%;
  top: 0;
  border-bottom: none;
}
</style>