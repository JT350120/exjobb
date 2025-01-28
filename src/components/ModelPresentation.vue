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

function top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>

  <div class="w-full flex flex-col md:flex-row bg-yellow">

    <!--Headings above the background picture section on mobile -->

    <section class="flex flex-col md:hidden my-[8px] mx-x-standard">
      <h1 class="text-xl font-bold mt-[8px]">Peiriant {{ data.model }} </h1>
    </section>

    <!--Left box with text and buttons on desktop, full width box with bg image on mobile -->

    <section
      class="box w-full md:w-[50vw] h-[90vw] md:h-[70vh] flex flex-col justify-between border-t-[2px] md:border-none border-black bg-yellow py-y-standard bg-150_presentation_portrait bg-no-repeat bg-cover md:bg-none">
      <div class="bg-yellow border-t-2 md:border-none bg-opacity-80 md:bg-opacity-0 w-full md:w-[90%] hidden md:inline">
        <h1 class="text-xl md:text-2xl font-bold mx-x-standard mt-y-standard">Peiriant {{ data.model }} </h1>
        <h2 class="text-md md:text-lg font-bold self-center mx-x-standard mb-[8px] md:mb-none">Från {{
          data.startingPrice }} kr</h2>

        <!--Decorative border with SVG on desktop-->

        <div class="flex">
          <div class="border-b-2 w-full" />
          <div v-if="!globalVariables.mainRendering.menu" class="hidden md:flex w-auto">
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

      <div class="bg-yellow border-y-2 md:border-none bg-opacity-80 md:bg-opacity-0 flex flex-col">
        <!--Show price here on mobile devices -->
        <h2 class="text-lg font-bold mx-x-standard my-[8px] md:hidden">Från {{ data.startingPrice }} kr</h2>
        <div class="hidden md:flex justify-end mr-x-standard">
          <button
            class="border-b-2 border-transparent hover:border-black duration-200 text-md md:text-lg font-bold mx-x-standard"
            @click="globalVariables.show('explore'), globalVariables.configuration.chosenModel = indexOfModel, top()">
            Upptäck
          </button>
          <button class="border-b-2 border-transparent hover:border-black duration-200 text-md md:text-lg font-bold"
            @click="globalVariables.show('configurator'), globalVariables.configuration.chosenModel = indexOfModel, top()">
            Bygg din egen
          </button>
        </div>
      </div>
    </section>

    <!--Button section on mobile -->

    <section class="bg-yellow border-y-2 md:border-none bg-opacity-80 md:bg-opacity-0 flex flex-col">
      <div class="flex flex-col md:hidden justify-end">
        <button class="border-b-2 border-black text-lg text-left pl-x-standard font-bold py-[8px]"
          @click="globalVariables.show('explore'), globalVariables.configuration.chosenModel = indexOfModel">
          Upptäck
        </button>
        <button class="text-lg text-left pl-x-standard font-bold py-[8px]"
          @click="globalVariables.show('configurator'), globalVariables.configuration.chosenModel = indexOfModel">
          Bygg din egen
        </button>
      </div>
    </section>


    <!--Right box on desktop with bg image-->

    <section
      class="hidden md:inline w-full border-l-2 border-black bg-blue py-y-standard bg-150_presentation_landscape bg-border bg-no-repeat bg-cover bg-bottom">
    </section>
  </div>
</template>

<style scoped>
.box:first-child {
  border-top: none;
}
</style>