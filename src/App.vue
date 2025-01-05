<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Hero from './components/Hero.vue'
  import Configurator from './components/Configurator.vue'
  import Dealers from './components/Dealers.vue'
  import History from './components/History.vue'
  import Infobox from './components/Infobox.vue'
  import Menu from './components/Menu.vue'
  import Models from './components/Models.vue'

  import { useGlobalStore } from './stores/global'

  const globalVariables = useGlobalStore();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow flex">
      <Menu v-show="globalVariables.mainRendering.menu" class="w-full" />
      <Hero v-show="globalVariables.mainRendering.hero" class="w-full" />
      <History v-show="globalVariables.mainRendering.history" class="w-full" />
      <Configurator v-show="globalVariables.mainRendering.configurator" class="w-full" :model="globalVariables.props.model" />
      <Dealers v-show="globalVariables.mainRendering.dealers" class="w-full" />
      <Models v-show="globalVariables.mainRendering.models" class="w-full" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
