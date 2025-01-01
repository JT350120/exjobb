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

  import { useGlobalStore } from './stores/global'

  const globalVariables = useGlobalStore();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow flex min-h-[82vh]">
      <Menu v-show="globalVariables.menuOpen" class="w-full" />
      <Hero v-show="!globalVariables.menuOpen" class="w-full" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
</style>
