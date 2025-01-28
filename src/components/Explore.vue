<script setup>
import { useContentStore } from '../stores/content'
import { useGlobalStore } from '../stores/global';
import SVG150 from './SVG150.vue';
import InfoBox from './Infobox.vue';

const globalVariables = useGlobalStore();
const content = useContentStore();
const index = globalVariables.configuration.chosenModel;

function top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <div class="flex flex-col">

    <section class="w-full h-[82vh] flex flex-col md:flex-row bg-green">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center border-b-2 border-black md:border-r-2 px-x-standard py-y-standard">
        <h1 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[0] }}</h1>
      </div>
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover bg-150_explore_img_village bg-bottom  border-b-2 border-black">
        
      </div>
    </section>

    <section class="w-full h-[82vh] flex flex-col-reverse md:flex-row bg-green">
      <div class="md:w-[50%] h-full px-x-standard py-y-standard border-b-2 border-black md:border-r-2">
        En till bild här
      </div>
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center border-b-2 border-black px-x-standard py-y-standard">
        <h2 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[1] }}</h2>
      </div>
    </section> 

    <section class="w-full md:h-[82vh] flex flex-col md:flex-row bg-green">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex flex-col justify-center items-center border-b-2 border-black  md:border-r-2 md:border-b-0 px-x-standard py-y-standard">
        <h2 class="text-xl md:text-2xl font-bold px-x-standard text-center">{{ content.models[index].exploreHeadings[2] }}</h2>
      </div>

      <div class="md:w-[50%] h-[82vh] flex flex-col px-x-standard py-y-standard bg-cover">
        <div class="relative flex justify-center h-full w-full items-center">
          <InfoBox class="h-full w-full absolute top-0 border-2 border-black" v-if="globalVariables.infoBoxRendering.active != null" :model="index" />
        <!-- Had to hide the SVG here manually if mobile menu is open, z-index does not seem to affect it -->
        <SVG150 class="mx-x-standard mt-y-standard h-auto max-w-full transform -scale-x-100"
          v-show="!globalVariables.mainRendering.menu && globalVariables.infoBoxRendering.active === null"
          :color="content.models[index].choices.colors[2].hex" :wheels="content.models[index].choices.wheels[0].id" />
        </div>
        <div v-if="globalVariables.infoBoxRendering.active === null" class="flex flex-col md:flex-row md:justify-between justify-end md:mt-y-standard w-auto">
          <button class="border-b-2 border-transparent text-right md:text-left w-auto hover:border-black duration-200 text-md md:text-lg font-bold whitespace-nowrap" @click="globalVariables.infoBoxRendering.active = index, globalVariables.infoBoxRendering.noneChosen = false, globalVariables.infoBoxRendering.specificationsMode = true">
            Tekniska data
          </button>
          <button class="border-b-2 border-transparent text-right md:text-left w-auto hover:border-black duration-200 text-md md:text-lg font-bold whitespace-nowrap" @click="globalVariables.show('configurator', top()), globalVariables.configuration.chosenModel = index">
            Bygg din egen
          </button>
          <button class="border-b-2 border-transparent text-right md:text-left w-auto hover:border-black duration-200 text-md md:text-lg font-bold whitespace-nowrap" @click="globalVariables.show('dealers'), top()">
            Hitta återförsäljare
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
</style>