<script setup>
import { computed, onMounted, onUnmounted, toRaw, reactive } from 'vue'
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

const expandedCategory = reactive({
  name: null, 
});

function toggleCategory(categoryName) {
  expandedCategory.name = expandedCategory.name === categoryName ? null : categoryName;
}

function checkOverflow() {
  const hasOverflow = element.scrollHeight > element.clientHeight;
console.log()
}

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

    <section class="bg-white h-full md:min-h-[82vh] md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <!-- Render a button for each category -->
      <div v-for="(category, categoryName) in models[configuration.chosenModel].choices" :key="categoryName" class="menuItem border-b-2 h-auto border-black flex flex-col">
        <button 
          @click="toggleCategory(categoryName)" 
          class="flex flex-col justify-between w-full px-x-standard py-y-standard">
          <div class="text-lg font-bold">{{ content.configurator.choiceHeadings[categoryName] }}</div>
          <div>{{ configuration[categoryName]?.name || 'Choose' }}</div>
        </button>

        <!-- Render choices when the category is expanded -->
        <div v-if="expandedCategory.name === categoryName">
          <button 
            v-for="choice in category" 
            :key="choice.name" 
            @click="configuration[categoryName] = choice; configuration.price = summarize(configuration.chosenModel)" 
            :class="{ selected: configuration[categoryName] === choice }" 
            class="block w-full text-left px-x-standard py-y-standard border-t-2 border-black">
            {{ choice.name }}
          </button>
        </div>
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