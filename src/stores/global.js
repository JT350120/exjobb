import { defineStore } from 'pinia'

export const useGlobalStore = defineStore("global", {
    state: () => ({ 
        hero: true,
        menu: false,
        history: false,
    }),
    actions: {
    },
  })