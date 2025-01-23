<script setup>
import { useContentStore } from '../stores/content';

const content = useContentStore();
const address = content.footer.address;
</script>

<template>
  <footer class="bg-black text-white px-x-standard py-y-standard">
    <div class="flex relative w-full md:w-[220px]">
      <ul class="md:border-l-2 border-b-2 border-white p-[16px] w-full">
        <li class="first:font-bold first:mb-[8px]" v-for="(row, index) in address">{{ row }}</li>
      </ul>
      <div class="w-auto absolute bottom-0 left-[220px] hidden md:inline">
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
                <path style="fill:none;fill-opacity:0.353868;stroke:#FCFAED;stroke-width:3;stroke-dasharray:none"
                  d="m 65.490447,167.94543 c -1.98923,-8.8844 16.035316,-28.37741 23.434778,-31.33719 8.342773,-3.33711 21.303615,-3.9248 30.370895,-2.11135 7.67791,1.53559 9.67102,13.81717 16.0787,16.07871 12.99394,4.5861 24.47337,1.74606 28.33564,17.19514"
                  id="car" sodipodi:nodetypes="csssc" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  bottom: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
}
</style>