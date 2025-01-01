import { defineStore } from 'pinia'

export const useGlobalStore = defineStore("global", {
    state: () => ({ 
        mainRendering: {
            hero: true,
            menu: false,
            history: false,
            dealers: false,
            configurator: false,
        },
    }),
    actions: {
        hideAll(exception) {
            Object.keys(this.mainRendering).forEach(key => {
                this.mainRendering[key] = false;
            });

            this.mainRendering[exception] = true;
        },
    },
});