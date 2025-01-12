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

        //Loading default values for configuration
        configuration: {
            chosenModel: 0,
            modelName: null,
            price: null,
            drivetrains: null,
            colors: null,
            wheels: null,
            packages: null,
            extras: null,
        },
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