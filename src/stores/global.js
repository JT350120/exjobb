import { defineStore } from 'pinia'

export const useGlobalStore = defineStore("global", {
    state: () => ({ 
        mainRendering: {
            hero: true,
            menu: false,
            models: false,
            history: false,
            dealers: false,
            configurator: false,
        },
        dealerRendering: {
            active: null,
            noneChosen: true,
        },
        props: {
            model: null,
        }
    }),
    actions: {

        //Hide all components except the one chosen
        show(component) {
            Object.keys(this.mainRendering).forEach(key => {
                this.mainRendering[key] = false;
            });
            this.mainRendering[component] = true;
        },
    },
});