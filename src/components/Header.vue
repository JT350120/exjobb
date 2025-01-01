<script setup>
import Menu from './Menu.vue';
import { reactive } from 'vue';

import { useGlobalStore } from '../stores/global'

const globalVariables = useGlobalStore();

</script>

<template>
  <header class="header px-x-standard py-y-standard items-center bg-tan border-black">
    <p>
      Peiriant
    </p>

    <!--Desktop menu-->
    <nav class="hidden md:flex w-full justify-end">
      <div class="mr-x-standard">
        <button>Modeller</button>
      </div>
      <div class="mr-x-standard">
        <button>Bygg din bil</button>
      </div>
      <div class="mr-x-standard">
        <button>Återförsäljare</button>
      </div>
      <div>
        <button>Vår historia</button>
      </div>
    </nav>

    <!--Mobile hamburger menu-->
    <button class="md:hidden flex flex-col w-[35px] h-[22px]" @click="globalVariables.mainRendering.menu = !globalVariables.mainRendering.menu">
      <div class="bg-black w-[35px] h-[2px] mb-[8px] duration-200" :class="{ upperClose: globalVariables.mainRendering.menu }"></div>
      <div class="bg-black w-[35px] h-[2px] mb-[8px]" :class="{hidden: globalVariables.mainRendering.menu }"></div>
      <div class="bg-black w-[35px] h-[2px] duration-200" :class="{ lowerClose: globalVariables.mainRendering.menu }"></div>
    </button>
  </header>
  
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  border-bottom: 2px solid;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 99;
}

.upperClose {
  transition: 0.2s;
  transform: rotate(45deg);
  position: relative;
  top: 10px;
}

.lowerClose {
  transition: 0.2s;
  transform: rotate(-45deg);
  position: relative;
}
</style>