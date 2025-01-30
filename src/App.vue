<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Hero from './components/Hero.vue'
  import Configurator from './components/Configurator.vue'
  import Dealers from './components/Dealers.vue'
  import History from './components/History.vue'
  import Menu from './components/Menu.vue'
  import Models from './components/Models.vue'
  import Explore from './components/Explore.vue'

  import { useGlobalStore } from './stores/global'

  const globalVariables = useGlobalStore();
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <div class="flex-grow flex">
      <Menu v-if="globalVariables.mainRendering.menu" class="w-full" />

      <!--Hero gets v-show instead of v-if so that the animation only runs the first time-->
      <Hero v-show="globalVariables.mainRendering.hero" class="w-full" />
      
      <History v-if="globalVariables.mainRendering.history" class="w-full" />
      <Configurator v-if="globalVariables.mainRendering.configurator" class="w-full" />
      <Dealers v-if="globalVariables.mainRendering.dealers" class="w-full" />
      <Models v-if="globalVariables.mainRendering.models" class="w-full" />
      <Explore v-if="globalVariables.mainRendering.explore" class="w-full" />
    </div>
    <Footer v-show="!globalVariables.mainRendering.menu"/>
  </div>
</template>

<style scoped>
</style>
