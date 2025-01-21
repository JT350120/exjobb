<script setup>
import { useGlobalStore } from '../stores/global'
import { useContentStore } from '../stores/content';

const globalVariables = useGlobalStore();
const content = useContentStore();

const props = defineProps({
  model: {
    type: Number,
    required: true,
  },
});

const model = props.model;
console.log(globalVariables.infoBoxRendering.active)

</script>

<template>
  <div class="flex flex-col relative justify-center bg-white py-y-standard px-x-standard">
    <button class="w-[35px] h-[22px] absolute top-0 right-0 my-y-standard mx-x-standard" @click="globalVariables.infoBoxRendering.active = null">
      <div class="bg-black w-[35px] h-[2px] mb-[8px] relative top-[10px] rotate-45 duration-200"></div>
      <div class="bg-black w-[35px] h-[2px] relative -rotate-45 duration-200"></div>
    </button>
    <div class="flex flex-col justify-between">
      <h2 class="text-lg md:text-xl font-bold mb-y-standard">{{ content.models[model].explorePoints[globalVariables.infoBoxRendering.active].heading }}</h2>
      <p>{{ content.models[model].explorePoints[globalVariables.infoBoxRendering.active].text }}</p>
    </div>

  </div>
  
</template>

<style scoped>
.active {
  height: 100%;
  top: 0;
  border-bottom: none;
}
</style>