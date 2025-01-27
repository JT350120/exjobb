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
            explore: false,
        },
        dealerRendering: {
            active: null,
            noneChosen: true,
        },
        infoBoxRendering: {
            active: null,
            noneChosen: true,
            specificationsMode: false,
        },

        //Loading default values for configuration
        configuration: {
            chosenModel: 0,
            modelName: null,
            price: null,
            drivetrains: null,
            colors: null,
            wheels: null,
            extras: [],
        },

        svgStates: {
            configuration: false,
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