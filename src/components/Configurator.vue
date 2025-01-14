<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { useContentStore } from '../stores/content';
import { useGlobalStore } from '../stores/global';
import SVG150 from './SVG150.vue';
const globalVariables = useGlobalStore();
const content = useContentStore();
const models = computed(() => content.models);
const configuration = globalVariables.configuration;

//Do not render the car until default configuration is loaded
let renderCar = false;

onMounted(() => {
  applyDefaultConfiguration(globalVariables.configuration.chosenModel);
});

onUnmounted(() => {
  console.log('här ska konfigurationen sparas i localstorage');
  renderCar = false;
});

const expandedCategory = reactive({
  name: null,
});

function toggleCategory(categoryName) {
  expandedCategory.name = expandedCategory.name === categoryName ? null : categoryName;
}

function applyDefaultConfiguration(chosen) {
  configuration.modelName = content.models[chosen].model;
  configuration.price = content.models[chosen].startingPrice;
  configuration.drivetrains = content.models[chosen].choices.drivetrains[0];
  configuration.colors = content.models[chosen].choices.colors[0];
  configuration.wheels = content.models[chosen].choices.wheels[0];

  //render the car SVG in this function to make sure it renders after the default values are set
  renderCar = true;
}

function summarize(chosen) {

  const extrasSum = configuration.extras.reduce((sum, extra) => sum + extra.price, 0);

  const totalSum =
    configuration.drivetrains.price +
    configuration.colors.price +
    configuration.wheels.price + 
    extrasSum

  return totalSum + content.models[chosen].startingPrice;
}

function handleChoiceClick(choice, categoryName) {
  if (categoryName === 'extras') {
    // If the category is 'extras', toggle the choice in the extras array
    const index = configuration.extras.findIndex(extra => extra.name === choice.name);
    if (index === -1) {
      configuration.extras.push(choice); // Add to extras if not already selected
    } else {
      configuration.extras.splice(index, 1); // Remove from extras if already selected
    }
  } else {
    configuration[categoryName] = choice;
  }
  configuration.price = summarize(configuration.chosenModel);
}
</script>

<template>
  <div class="flex flex-col h-full md:flex-row md:min-h-[82vh] bg-white">
    <section class="flex flex-col h-[400px] md:h-full md:w-full">
      <div>
        <div class="flex flex-row justify-between px-x-standard py-y-standard">
          <h1 class="text-xl md:text-2xl font-bold">Din {{ configuration.modelName }} </h1>
          <h2 class="text-lg md:text-xl font-bold self-center">{{ configuration.price }} kr</h2>
        </div>
        <div class="relative left-[160px] md:left-[340px] top-[2px] mt-[-26px]">
          <svg
            width="100px"
            height="35px"
            viewBox="0 0 100.34901 35.690483"
            version="1.1"
            id="svg1"
            inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
            sodipodi:docname="line_car.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <defs
              id="defs1" />
            <g
              inkscape:label="Lager 1"
              inkscape:groupmode="layer"
              id="layer1"
              transform="translate(-64.331587,-132.47344)">
              <g
                id="g7"
                style="stroke-width:2;stroke-dasharray:none">
                <g
                  id="g9">
                  <path
                    style="fill:none;fill-opacity:0.353868;stroke:#000000;stroke-width:2;stroke-dasharray:none"
                    d="m 65.490447,167.94543 c -1.98923,-8.8844 16.035316,-28.37741 23.434778,-31.33719 8.342773,-3.33711 21.303615,-3.9248 30.370895,-2.11135 7.67791,1.53559 9.67102,13.81717 16.0787,16.07871 12.99394,4.5861 24.47337,1.74606 28.33564,17.19514"
                    id="car"
                    sodipodi:nodetypes="csssc" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      <div class="w-[162.5px] md:w-[342.5px] bg-black h-[2px]"/>
    </div>

    <div class="h-full w-full relative flex justify-center items-center py-y-standard">
      <SVG150 v-if="renderCar" :color="configuration.colors.hex" />
    </div>

    <button @click="console.log(configuration)">Logga konfigurationen</button>
    
  </section>

    <section class="bg-white h-full md:h-[82vh] overflow-scroll md:w-[40vw] border-t-2 md:border-t-0 md:border-l-2 border-black">
      <!-- Render a button for car models -->
      <div class="menuItem border-b-2 h-auto border-black flex flex-col">
        <button 
          @click="toggleCategory('model')" 
          class="flex flex-col justify-between w-full px-x-standard py-y-standard">
          <div class="text-lg font-bold">{{ content.configurator.choiceHeadings.model }}</div>
          <div>{{ configuration.modelName || 'Choose' }}</div>
        </button>

        <!-- Render car model choices when expanded -->
        <div v-if="expandedCategory.name === 'model'">
          <button 
            v-for="(carModel, index) in models" 
            :key="index" 
            @click="configuration.chosenModel = index; configuration.modelName = carModel.model; configuration.price = summarize(index); applyDefaultConfiguration(index)" 
            :class="{ selected: configuration.chosenModel === index }" 
            class="block w-full text-left px-x-standard py-y-standard border-t-2 border-black">
            {{ carModel.model }}
          </button>
        </div>
      </div>

      <!-- Render buttons for each category -->
      <div v-for="(category, categoryName) in models[configuration.chosenModel].choices" :key="categoryName" class="menuItem border-b-2 h-auto border-black flex flex-col">
        <button 
          @click="toggleCategory(categoryName)" 
          class="flex flex-col justify-between w-full px-x-standard py-y-standard">
          <div class="text-lg font-bold">{{ content.configurator.choiceHeadings[categoryName] }}</div>
          <div v-if="configuration[categoryName]?.name">{{ configuration[categoryName].name }}</div>
          <div v-if="configuration[categoryName]?.length === 0 || configuration[categoryName]?.length === null">Inga valda</div>
          <div v-if="configuration[categoryName]?.length > 0 || configuration[categoryName]?.length === null">{{ configuration[categoryName]?.length }} valda</div>
        </button>

        <!-- Render choices when the category is expanded -->
        <div v-if="expandedCategory.name === categoryName">
          <button 
            v-for="choice in category" 
            :key="choice.name" 
            @click="handleChoiceClick(choice, categoryName)" 
            :class="{ selected: categoryName === 'extras' ? configuration.extras.includes(choice) : configuration[categoryName] === choice }" 
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