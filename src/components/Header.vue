<script setup>
import Menu from './Menu.vue';
import { reactive } from 'vue';

import { useGlobalStore } from '../stores/global'

const store = useGlobalStore();

defineProps({
  msg: String,
})

function burgerAnimation() {

}

</script>

<template>
  <header class="header px-x-standard py-y-standard items-center bg-tan border-black">
    <p>
      Peiriant
    </p>

    <!--Desktop menu-->
    <nav class="hidden md:flex w-full justify-end">
      <div class="mr-x-standard">
        <a>Modeller</a>
      </div>
      <div class="mr-x-standard">
        <a>Bygg din bil</a>
      </div>
      <div class="mr-x-standard">
        <a>Återförsäljare</a>
      </div>
      <div>
        <a>Vår historia</a>
      </div>
    </nav>

    <!--Mobile hamburger menu-->
    <div class="md:hidden flex flex-col w-[35px] h-[22px]" @click="store.menuOpen = !store.menuOpen">
      <div class="bg-black w-[35px] h-[2px] mb-[8px] duration-200" :class="{ upperClose: store.menuOpen }"></div>
      <div class="bg-black w-[35px] h-[2px] mb-[8px]" :class="{hidden: store.menuOpen }"></div>
      <div class="bg-black w-[35px] h-[2px] duration-200" :class="{ lowerClose: store.menuOpen }"></div>
    </div>
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