import { defineStore } from 'pinia'

export const useContentStore = defineStore("content", {
    state: () => ({ 
        models: [
            {
                model: "150",
                tagline: "Lorem ipsum, dolor sit",
                startingPrice: 2100,
                explore: [
                    {
                        text: "Lorem ipsum dolor sit amet",
                        img: "src",
                    },
                    {
                        text: "Amet sit dolor ipsum lorem",
                        img: "src",
                    },
                ],
                specifications: {
                    length: 0,
                    width: 0,
                    height: 0,
                    passengers: 4,
                },
                choices: {
                    drivetrains: [
                        {
                            name: "Basic man",
                            sp: 300,
                            fuel: "Bensin",
                            transmission: "Manuell",
                            mileage: 4,
                            range: 0,
                            price: 0,
                        },
                        {
                            name: "Basic aut",
                            sp: 300,
                            fuel: "Bensin",
                            transmission: "Automat",
                            mileage: 4,
                            range: 0,
                            price: 70,
                        },
                    ],
                    colors: [
                        {
                            name: "Testwhite",
                            hex: "#ffffff",
                            price: 0,
                        },
                    ],
                    interiors: [
                        {
                            name: "Testblack",
                            hex: "#000000",
                            price: 0,
                        },
                    ],
                    wheels: [
                        {
                            name: "Testwheels",
                            file: "src",
                            price: 0,
                        },
                    ],
                    packages: [
                        {
                            name: "Utrustningspaket",
                            price: 0,
                        },
                    ],
                    extras: [
                        {
                            name: "Gadget",
                            file: "src",
                            price: 0,
                        },
                    ],
                }

            },

            //nästa modell
        ],
    }),
    actions: {
    },
  })