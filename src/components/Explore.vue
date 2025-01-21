<script setup>
import { computed, reactive } from 'vue'
import { useContentStore } from '../stores/content'
import { useGlobalStore } from '../stores/global';
import SVG150 from './SVG150.vue';
import InfoBox from './Infobox.vue';

const globalVariables = useGlobalStore();
const content = useContentStore();
const index = globalVariables.configuration.chosenModel;

console.log(globalVariables.svgStates.configuration)
</script>

<template>
  <div class="flex flex-col">

    <section class="w-full h-[82vh] flex flex-col md:flex-row bg-green">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center">
        <h1 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[0] }}</h1>
      </div>
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover bg-150_explore_img_1 bg-bottom">
        
      </div>
    </section>

    <section class="w-full h-[82vh] flex flex-col-reverse md:flex-row bg-green">
      <div class="md:w-[50%] h-full px-x-standard py-y-standard">
        En till bild här
      </div>
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center">
        <h2 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[1] }}</h2>
      </div>
    </section> 

    <section class="w-full h-[82vh] flex flex-col md:flex-row bg-green bg-cover">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center">
        <h2 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[2] }}</h2>
      </div>
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover">
        <div class="relative flex justify-center h-full items-center">
          <InfoBox class="h-full absolute top-0 border-2 border-black" v-if="globalVariables.infoBoxRendering.active != null" :model="index"/>
        <!-- Had to hide the SVG here manually if mobile menu is open, z-index does not seem to affect it -->
        <SVG150 class="mx-x-standard mt-y-standard h-auto max-w-full transform -scale-x-100"
          v-show="!globalVariables.mainRendering.menu && globalVariables.infoBoxRendering.active === null"
          :color="content.models[index].choices.colors[2].hex" :wheels="content.models[index].choices.wheels[0].id" />
        </div>
        
      </div>
      
    </section>

  </div>
</template>

<style scoped>
</style>