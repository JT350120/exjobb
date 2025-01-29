<script setup>
import { computed, onMounted, onUnmounted, reactive } from 'vue';
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
  globalVariables.svgStates.configuration = true;
});

onUnmounted(() => {
  renderCar = false;
  globalVariables.svgStates.configuration = false;
});

const expandedCategory = reactive({
  name: null,
});

const saveBtn = reactive({
  showSaved: false,
});

function top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleCategory(categoryName) {
  expandedCategory.name = expandedCategory.name === categoryName ? null : categoryName;
}

//Apply the first choice in every category as default, except configuration.extras since all extras are optional
function applyDefaultConfiguration(chosen) {
  configuration.modelName = content.models[chosen].model;
  configuration.price = content.models[chosen].startingPrice;
  configuration.drivetrains = content.models[chosen].choices.drivetrains[0];
  configuration.colors = content.models[chosen].choices.colors[0];
  configuration.wheels = content.models[chosen].choices.wheels[0];
  configuration.extras = [];

  //render the car SVG in this function to make sure it renders AFTER the default values are set
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

const isSelected = computed(() => {
  return (choice, categoryName) => {
    if (categoryName === 'extras') {
      return globalVariables.configuration.extras.some(extra => extra.name === choice.name);
    } else if (categoryName === 'model') {
      return globalVariables.configuration.chosenModel === choice;
    } else {
      return globalVariables.configuration[categoryName].name === choice.name;
    }
  };
});

function configStorage(value) {
  if (value === 'get') {
    const config = JSON.parse(localStorage.getItem('config'));
    if (config) {
      //Updating variables individually for vue reactivity
      globalVariables.configuration.chosenModel = config.chosenModel;
      globalVariables.configuration.modelName = config.modelName;
      globalVariables.configuration.price = config.price;
      globalVariables.configuration.colors = config.colors;
      globalVariables.configuration.drivetrains = config.drivetrains;
      globalVariables.configuration.wheels = config.wheels;

      if (config.extras) {
        globalVariables.configuration.extras.splice(0, globalVariables.configuration.extras.length, ...config.extras);
      }
    }
  } else {
    localStorage.setItem('config', JSON.stringify(value));
  }
}

function saveBtnTimeout() {
  setTimeout(() => { saveBtn.showSaved = false }, 1000);
}
</script>

<template>
  <div class="flex flex-col max-w-full h-full md:flex-row md:min-h-[82vh] bg-white">
    <section class="flex flex-col h-full md:w-full">
      <div>
        <div class="flex flex-row justify-between px-x-standard pt-y-standard">
          <h1 class="text-xl md:text-2xl font-bold">Din {{ configuration.modelName }} </h1>
          <h2 class="text-lg md:text-xl font-bold self-center">{{ configuration.price }} kr</h2>
        </div>

        <!--Decorative border with SVG-->
        <div class="flex">
          <div class=" border-b-2 w-[45%] md:w-[35%]" />
          <div v-if="!globalVariables.mainRendering.menu" class="w-auto">
            <svg width="72px" height="25px" viewBox="0 0 100.74901 35.190483" version="1.1" id="svg1"
              inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" sodipodi:docname="line_car.svg"
              xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
              xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg"
              xmlns:svg="http://www.w3.org/2000/svg">
              <defs id="defs1" />
              <g inkscape:label="Lager 1" inkscape:groupmode="layer" id="layer1"
                transform="translate(-64.331587,-132.47344)">
                <g id="g7" style="stroke-width:3;stroke-dasharray:none">
                  <g id="g9">
                    <path style="fill:none;fill-opacity:0.353868;stroke:#000000;stroke-width:3;stroke-dasharray:none"
                      d="m 65.490447,167.94543 c -1.98923,-8.8844 16.035316,-28.37741 23.434778,-31.33719 8.342773,-3.33711 21.303615,-3.9248 30.370895,-2.11135 7.67791,1.53559 9.67102,13.81717 16.0787,16.07871 12.99394,4.5861 24.47337,1.74606 28.33564,17.19514"
                      id="car" sodipodi:nodetypes="csssc" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div class="relative flex justify-center h-full items-center">
        <!-- Had to hide the SVG here manually if mobile menu is open, z-index does not seem to affect it -->
        <SVG150 class="mx-x-standard my-y-standard h-full" v-if="renderCar && !globalVariables.mainRendering.menu"
          :color="configuration.colors.hex" :wheels="configuration.wheels.id" :configuratorMode="true" />
      </div>

      <div class="flex flex-col self-end md:self-auto md:flex-row mx-x-standard my-y-standard md:justify-between">
        <div class="flex flex-col md:flex-row w-full">
          <button v-if="!globalVariables.mainRendering.menu"
            class="relative border-b-2 border-transparent hover:border-black duration-200 text-right md:text-center text-md md:text-lg font-bold md:mr-x-standard md:mb-0 whitespace-nowrap"
            @click="configStorage(configuration), saveBtn.showSaved = true, saveBtnTimeout()">
            Spara bil
            <span class="absolute right-0 md:left-0 bottom-0 opacity-0 transform transition-all duration-200"
              :class="{ 'opacity-100 bottom-[25px] md:bottom-[33px]': saveBtn.showSaved }">
              Sparad
            </span>
          </button>
          <button
            class="border-b-2 border-transparent hover:border-black duration-200 text-right md:text-center text-md md:text-lg font-bold md:mb-0 whitespace-nowrap"
            @click="configStorage('get')">
            Ladda sparad bil
          </button>
        </div>

        <div class="flex">
          <button
            class="border-b-2 border-transparent hover:border-black duration-200 text-md md:text-lg font-bold whitespace-nowrap"
            @click="globalVariables.show('dealers'), top()">
            Hitta återförsäljare
          </button>
        </div>

      </div>

    </section>

    <section
      class="bg-white h-full md:h-[82vh] overflow-scroll md:w-[40vw] md:mr-x-standard border-t-2 md:border-t-0 md:border-x-2 border-black">
      <!-- Render a button for car models -->
      <div class="menuItem border-b-2 h-auto border-black flex flex-col">
        <button @click="toggleCategory('model')"
          class="flex flex-col justify-between w-full px-x-standard py-y-standard">
          <div class="text-lg font-bold">{{ content.configurator.choiceHeadings.model }}</div>
          <div>{{ configuration.modelName }}</div>
        </button>

        <!-- Render car model choices when expanded -->
        <div v-if="expandedCategory.name === 'model'">
          <button v-for="(carModel, index) in models" :key="index"
            @click="configuration.chosenModel = index; configuration.modelName = carModel.model; configuration.price = summarize(index); applyDefaultConfiguration(index)"
            :class="{ selected: isSelected(index, 'model') }"
            class="block w-full text-left px-x-standard py-y-standard border-t-2 border-black">
            {{ carModel.model }}
          </button>
        </div>
      </div>

      <!-- Render buttons for each category -->
      <div v-for="(category, categoryName) in models[configuration.chosenModel].choices" :key="categoryName"
        class="menuItem border-b-2 h-auto border-black flex flex-col">
        <button @click="toggleCategory(categoryName)"
          class="flex flex-col justify-between w-full px-x-standard py-y-standard">
          <div class="text-lg font-bold">{{ content.configurator.choiceHeadings[categoryName] }}</div>
          <div v-if="configuration[categoryName]?.name">{{ configuration[categoryName].name }}</div>
          <div v-if="configuration[categoryName]?.length === 0 || configuration[categoryName]?.length === null">Inga
            valda</div>
          <div v-if="configuration[categoryName]?.length > 0 || configuration[categoryName]?.length === null">{{
            configuration[categoryName]?.length }} valda</div>
        </button>

        <!-- Render choices when the category is expanded -->
        <div v-if="expandedCategory.name === categoryName">
          <button v-for="choice in category" :key="choice.name" @click="handleChoiceClick(choice, categoryName)"
            :class="{ selected: isSelected(choice, categoryName) }"
            class="flex justify-between w-full text-left px-x-standard py-y-standard border-t-2 border-black"
            :aria-label="`${choice.name}, ${choice.price} kr`">
            <div>
              {{ choice.name }}
            </div>
            <div>
              <span v-if="choice.price != 0">+</span>{{ choice.price }} kr
            </div>
          </button>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
.selected {
  background-color: #86B2E6;
}

.svg-container {
  overflow: hidden;
  max-width: 100%;
}
</style>