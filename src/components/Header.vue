<script setup>
import { reactive } from 'vue';

const state = reactive({ 
  menuOpen: false,
});

defineProps({
  msg: String,
})

</script>

<template>
  <header class="header px-x-standard py-y-standard items-center bg-tan">

    <!--Desktop menu-->
    <nav class="hidden md:flex w-full">
      <div class="mr-x-standard">
        <a>Modeller</a>
      </div>
      <div class="mr-x-standard">
        <a>Bygg din bil</a>
      </div>
      <div class="mr-x-standard">
        <a>Återförsäljare</a>
      </div>
      <div class="mr-x-standard">
        <a>Vår historia</a>
      </div>
    </nav>

    <!--Mobile hamburger menu-->
    <div class="md:hidden flex flex-col">
      <div class="bg-black w-[35px] h-[2px] mb-[8px]"></div>
      <div class="bg-black w-[35px] h-[2px] mb-[8px]"></div>
      <div class="bg-black w-[35px] h-[2px]"></div>
    </div>
    <p>
      Peiriant
    </p>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  burger {
    border: 2px solid;
  }
</style>