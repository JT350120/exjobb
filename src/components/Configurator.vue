<script setup>
import { computed, onMounted, onUnmounted, toRaw } from 'vue'
import { useContentStore } from '../stores/content'
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();
const content = useContentStore();
const models = computed(() => content.models);
const configuration = globalVariables.configuration;

let menuOpen = false;

onMounted(() => {
  applyDefaultConfiguration(globalVariables.configuration.chosenModel);
})

onUnmounted(() => {
  console.log("här ska konfigurationen sparas i localstorage");
})

function applyDefaultConfiguration(chosen) {
  configuration.modelName = content.models[chosen].model;
  configuration.price = content.models[chosen].startingPrice;
  configuration.drivetrains = content.models[chosen].choices.drivetrains[0];
  configuration.colors = content.models[chosen].choices.colors[0];
  configuration.wheels = content.models[chosen].choices.wheels[0];
  configuration.packages = content.models[chosen].choices.packages[0];
  configuration.extras = content.models[chosen].choices.extras[0];
}

function summarize(chosen) {
  let sum =
  configuration.drivetrains.price +
  configuration.colors.price +
  configuration.wheels.price +
  configuration.packages.price +
  configuration.extras.price;

  return sum + content.models[chosen].startingPrice;
}
</script>

<template>
  <div class="flex flex-col h-full md:flex-row md:min-h-[82vh] bg-white">
    <section class="h-[400px] md:h-full md:w-full">
      <div> {{ models[configuration.chosenModel].model }}</div>
      <button @click="console.log(toRaw(configuration))">Logga konfiguration</button>
      <div>
        {{ configuration.price }}
      </div>
    </section>

    <section v-show="menuOpen" class="bg-green h-full md:min-h-[82vh] md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <div>Valmöjligheter</div>
    </section>

    <section v-show="!menuOpen"class="bg-yellow h-full md:min-h-[82vh] md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <div class="menuItem border-b-2 h-auto border-black flex">
          <button v-for="(carModel, index) in models" :key="index" @click="configuration.chosenModel = index, applyDefaultConfiguration(index)" :class="{ selected: configuration.chosenModel === index}" class="menuItem border-r-2 w-full border-black px-x-standard py-y-standard justify-evenly">
            {{ content.models[index].model }}
          </button>
      </div>

      <div v-for="(category, categoryName) in models[configuration.chosenModel].choices" :key="categoryName" class="menuItem border-b-2 h-auto border-black flex">        
        
        
        <button v-for="choice in category" @click="configuration[categoryName] = choice, configuration.price = summarize(configuration.chosenModel)" :class="{ selected: configuration[categoryName] === choice }" class="menuItem border-r-2 w-full border-black px-x-standard py-y-standard justify-evenly">
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