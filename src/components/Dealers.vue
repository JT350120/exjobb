<script setup>
import { computed } from 'vue'
import DealerListItem from './DealerListItem.vue'
import { useContentStore } from '../stores/content'
import { useGlobalStore } from '../stores/global'

const content = useContentStore();
const globalVariables = useGlobalStore();

const dealers = computed(() => {
  return [...content.dealers].sort((a, b) => a.town.localeCompare(b.town));
});
</script>

<template>
  <div class="flex flex-col-reverse h-full md:flex-row md:h-[82vh]">
    <section class="bg-yellow h-full md:overflow-scroll md:h-full md:w-[40%] border-t-2 md:border-t-0 md:border-r-2 border-black">
      <DealerListItem v-for="(dealer, index) in dealers" :key="index" :data="dealer" :index="index" />
    </section>
    <section class="bg-blue h-[400px] md:h-full md:w-full">
      <button class="pin bg-yellow border-2 border-black relative" v-for="(dealer, index) in dealers" :key="index" :data="dealer" :style="{'left': dealers[index].coordinates[0] + 'px', 'top': dealers[index].coordinates[1] + 'px'}" @click="globalVariables.dealerRendering.active = index, globalVariables.dealerRendering.noneChosen = false"></button>
    </section>
  </div>
</template>

<style scoped>
  .pin {
    width: 35px;
    height: 35px;
    border-radius: 999px;
  }
</style>