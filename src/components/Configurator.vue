<script setup>
import { computed, reactive } from 'vue'
import { useContentStore } from '../stores/content'
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();
const content = useContentStore();
const models = computed(() => content.models);
const configuration = globalVariables.configuration;

let menuOpen = false;
</script>

<template>
  <div class="flex flex-col h-full md:flex-row md:min-h-[82vh] bg-white">
    <section class="h-[400px] md:h-full md:w-full">
      <div> {{ models[configuration.chosenModel].model }}</div>
    </section>

    <section v-show="menuOpen" class="bg-green h-full md:min-h-[82vh] md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <div>Valmöjligheter</div>
    </section>

    <section v-show="!menuOpen"class="bg-yellow h-full md:min-h-[82vh] md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <div class="menuItem border-b-2 h-auto border-black flex">
        <button v-for="(carModel, index) in models" :key="index" @click="configuration.chosenModel = index" :class="{ selected: configuration.chosenModel === index}" class="menuItem border-r-2 w-full border-black px-x-standard py-y-standard justify-evenly">
          {{ content.models[index].model }}
        </button>
      </div>
      <div v-for="category in models[configuration.chosenModel].choices" class="menuItem border-b-2 h-auto border-black flex">
        <button v-for="choice in category" class="menuItem border-r-2 w-full border-black px-x-standard py-y-standard justify-evenly">
          {{ choice.name }}
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menuItem:last-child {
  border-right: none;
  border-bottom: none;
}

.selected {
  background-color: #86B2E6;
}
</style>