<script setup>
import { reactive } from 'vue';
import { useGlobalStore } from '../stores/global'
import { useContentStore } from '../stores/content';

const globalVariables = useGlobalStore();
const content = useContentStore();

const props = defineProps({
  model: {
    type: Number,
    required: true,
  },
  specificationsMode: {
    type: Boolean,
    default: true, //Change this to false later
  }
});

let state = reactive({
  chosenDrivetrain: 0,
});

const model = props.model;
const specificationsMode = props.specificationsMode;

</script>

<template>
  <div class="flex flex-col relative justify-center bg-white py-y-standard px-x-standard">
    <button class="w-[35px] h-[22px] absolute top-0 right-0 my-y-standard mx-x-standard"
      @click="globalVariables.infoBoxRendering.active = null">
      <div class="bg-black w-[35px] h-[2px] mb-[8px] relative top-[10px] rotate-45 duration-200"></div>
      <div class="bg-black w-[35px] h-[2px] relative -rotate-45 duration-200"></div>
    </button>

    <!--If the InfoBox is showing information in points of interest-->
    <div v-if="!specificationsMode" class="flex flex-col justify-between">
      <h2 class="text-lg md:text-xl font-bold mb-y-standard">{{
        content.models[model].explorePoints[globalVariables.infoBoxRendering.active].heading }}</h2>
      <p>{{ content.models[model].explorePoints[globalVariables.infoBoxRendering.active].text }}</p>
    </div>

    <!--If the InfoBox is showing general car specifications-->
    <div v-if="specificationsMode" class="flex flex-col justify-evenly h-full mt-y-standard md:mt-0">
      <h2 class="text-lg md:text-xl font-bold border-b-2 border-black">Tekniska data</h2>
      <div class="flex justify-between border-b-2 py-[8px]">
        <h3 class="text-md md:text-lg font-bold">Mått<span class="text-sm md:text-md font-normal"> (mm)</span></h3>
        <div>
          <h4 class="font-bold text-center">Längd</h4>
          <p class="text-center">{{ content.models[model].specifications.length }}</p>
        </div>
        <div>
          <h4 class="font-bold">Bredd</h4>
          <p class="text-center">{{ content.models[model].specifications.width }}</p>
        </div>
        <div>
          <h4 class="font-bold">Höjd</h4>
          <p class="text-center">{{ content.models[model].specifications.height }}</p>
        </div>
      </div>


      <div class="flex justify-between border-b-2 py-[8px]">
        <h3 class="text-md md:text-lg font-bold">Antal passagerare</h3>
        <div class="flex items-center">
          <p class="text-center">{{ content.models[model].specifications.passengers }}</p>
        </div>
      </div>

      <div class="flex overflow-y-scroll">
        <div class="w-[50%] h-auto">
          <ul>
            <button :class="{ 'font-bold': state.chosenDrivetrain === index }" class="px-[8px] py-[8px] hover:font-bold"
              v-for="(drivetrain, index) in content.models[model].choices.drivetrains" :key="index"
              @click="state.chosenDrivetrain = index"> {{ drivetrain.name }}</button>
          </ul>
        </div>
        <div v-if="state.chosenDrivetrain !== null && state.chosenDrivetrain !== undefined" class="w-[50%] h-auto">
          <ul>
            <li class="flex flex-col py-[8px]">
              <span class="font-bold">Drivmedel</span>
              <span>{{ content.models[model].choices.drivetrains[state.chosenDrivetrain].fuel }}</span>
            </li>
            <li class="flex flex-col py-[8px]">
              <span class="font-bold">Effekt<span class="font-normal"> (fårkrafter) </span></span>
              <span>{{ content.models[model].choices.drivetrains[state.chosenDrivetrain].sp }}</span>
            </li>
            <li class="flex flex-col py-[8px]">
              <span v-if="content.models[model].choices.drivetrains[state.chosenDrivetrain].fuel === 'El'"
                class="font-bold">Räckvidd</span>
              <span v-if="content.models[model].choices.drivetrains[state.chosenDrivetrain].fuel === 'El'">{{
                content.models[model].choices.drivetrains[state.chosenDrivetrain].range }} km</span>
              <span v-if="content.models[model].choices.drivetrains[state.chosenDrivetrain].fuel === 'Bensin'"
                class="font-bold">Bränsleförbrukning</span>
              <span v-if="content.models[model].choices.drivetrains[state.chosenDrivetrain].fuel === 'Bensin'">{{
                content.models[model].choices.drivetrains[state.chosenDrivetrain].mileage }} l/100km</span>
            </li>
          </ul>
        </div>
      </div>
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