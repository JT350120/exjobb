<script setup>
import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();

defineProps({
  data: {
    type: Object,
    required: true,
  },
  indexOfModel: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="box w-full h-[70vh] flex flex-col justify-between border-t-[2px] border-black bg-yellow py-y-standard">
    <div>
      <h1 class="text-xl md:text-2xl font-bold mx-x-standard">Peiriant {{ data.model }} </h1>
      <h2 class="text-md md:text-lg font-bold self-center mx-x-standard">Från {{ data.startingPrice }} kr</h2>
      <div class="relative left-[190px] md:left-[400px] top-[2px] mt-[-26px]">
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
      <div class="w-[192.5px] md:w-[402.5px] bg-black h-[2px]"/>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-end">
        <button class="text-md md:text-lg font-bold mx-x-standard">
          Upptäck
        </button>
        <button class="text-md md:text-lg font-bold" @click="globalVariables.show('configurator'), globalVariables.configuration.chosenModel = indexOfModel">
          Bygg din egen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box:first-child {
  border-top: none;
}

</style>