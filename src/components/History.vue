<script setup>
import { useContentStore } from '../stores/content'

const content = useContentStore();
const history = content.history;
</script>

<template>
  <div class="flex flex-col">

    <section class="w-full md:h-[82vh] h-full flex flex-col md:flex-row bg-green border-b-2">
      <div class="bg-white md:w-[50%] h-auto md:h-full flex justify-center items-center border-black md:border-r-2">
        <h1 class="text-xl md:text-2xl px-x-standard py-y-standard">{{ history.heading }}</h1>
      </div>
      <div class="border-t-2 border-black md:border-none md:w-[50%] h-full">
        <img class="h-full w-full object-cover" src="/src/assets/images/edward.webp"
          alt="Man i 30-årsåldern som håller en fårsax framför ett stenhus i Wales" />
      </div>
    </section>

    <section class="w-full md:h-[82vh] h-full  flex flex-col-reverse md:flex-row bg-green border-b-2">
      <div class="md:w-[50%] h-full border-black border-t-2 md:border-t-0 md:border-r-2">
        <img class="h-full w-full object-cover" src="/src/assets/images/truck.webp"
          alt="Peiriants första lastbil från 1902" />
      </div>
      <div class="bg-green md:w-[50%] h-full flex flex-col justify-evenly py-y-standard px-x-standard">
        <p class="my-[16px] md:my-0" v-show="history.paragraphs[0]">{{ history.paragraphs[0] }}</p>
        <p class="my-[16px] md:my-0" v-show="history.paragraphs[1]">{{ history.paragraphs[1] }}</p>
        <p class="my-[16px] md:my-0" v-show="history.paragraphs[2]">{{ history.paragraphs[2] }}</p>
        <p class="my-[16px] md:my-0" v-show="history.paragraphs[3]">{{ history.paragraphs[3] }}</p>
        <p class="my-[16px] md:my-0" v-show="history.paragraphs[4]">{{ history.paragraphs[4] }}</p>
      </div>
    </section>

    <section class="w-full md:h-[82vh] h-full  flex flex-col md:flex-row bg-green">
      <div
        class="bg-white md:w-[50%] h-auto md:h-full flex justify-center items-center border-black md:border-r-2 py-y-standard px-x-standard">
        <div class="flex flex-col" v-show="history.quote">
          <h2 class="text-xl italic">{{ history.quote }}</h2>
          <span class="text-md text-right italic">{{ "- " + history.quoteBy }}</span>
        </div>
      </div>
      <div class="border-t-2 border-black md:border-none md:w-[50%] h-full">
        <img class="h-full w-full object-cover object-left-top" src="/src/assets/images/elizabeth.webp"
          alt="Bister kvinna i 30-årsåldern som håller en grep med molnig himmel i bakgrunden" />
      </div>
    </section>

  </div>
</template>

<style scoped></style>