<script setup>
import { useContentStore } from '../stores/content'

const content = useContentStore();
const history = content.history;
</script>

<template>
  <div class="flex flex-col">

    <section class="w-full h-[82vh] flex flex-col md:flex-row bg-green border-b-2">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex justify-center items-center border-black md:border-r-2">
        <h1 class="text-xl md:text-2xl px-x-standard py-y-standard">{{ history.heading }}</h1>
      </div>
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover" :style="{ backgroundImage: `url('${history.image_top}')` }"></div>
    </section>

    <section class="w-full h-[82vh] flex flex-col-reverse md:flex-row bg-green border-b-2">
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover border-black md:border-r-2" :style="{ backgroundImage: `url('${history.image_middle}')` }"></div>
      <div class="bg-green md:w-[50%] h-full flex flex-col justify-evenly py-y-standard px-x-standard">
        <p v-show="history.paragraphs[0]">{{ history.paragraphs[0] }}</p>
        <p v-show="history.paragraphs[1]">{{ history.paragraphs[1] }}</p>
        <p v-show="history.paragraphs[2]">{{ history.paragraphs[2] }}</p>
        <p v-show="history.paragraphs[3]">{{ history.paragraphs[3] }}</p>
        <p v-show="history.paragraphs[4]">{{ history.paragraphs[4] }}</p>
      </div>
    </section> 

    <section class="w-full h-[82vh] flex flex-col md:flex-row bg-green">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex justify-center items-center border-black md:border-r-2">
        <div class="flex flex-col" v-show="history.quote">
          <h2 class="text-xl italic" >{{ history.quote }}</h2>
          <span class="text-md text-right italic">{{ "- " + history.quoteBy }}</span>
        </div>
      </div>
      <div class="md:w-[50%] h-full px-x-standard py-y-standard bg-cover bg-edward"></div>
    </section>

  </div>
</template>

<style scoped>
</style>