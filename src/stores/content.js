import { defineStore } from 'pinia'

export const useContentStore = defineStore("content", {
    state: () => ({ 
        models: [
            {
                model: "150",
                tagline: "Lorem ipsum, dolor sit",
                startingPrice: 192000,
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
                            name: "Chalk solid",
                            hex: "#ffffff",
                            price: 0,
                        },
                        {
                            name: "Stout metallic",
                            hex: "#1C1C14",
                            price: 4000,
                        },
                        {
                            name: "Sunset metallic",
                            hex: "#F86400",
                            price: 4000,
                        },
                        {
                            name: "Butternut metallic",
                            hex: "#E3AC59",
                            price: 4000,
                        },
                        {
                            name: "Oxalis metallic",
                            hex: "#5E3A48",
                            price: 4000,
                        },
                        {
                            name: "Pear metallic",
                            hex: "#94A322",
                            price: 4000,
                        },
                        {
                            name: "Pacific metallic",
                            hex: "#0179B5",
                            price: 4000,
                        },
                        {
                            name: "Strawberry metallic",
                            hex: "#DA0000",
                            price: 4000,
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
            {
                model: "350",
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
                            price: 80,
                        },
                    ],
                    colors: [
                        {
                            name: "Testwhite350",
                            hex: "#ffffff",
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
             {
                model: "580",
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
                            price: 90,
                        },
                    ],
                    colors: [
                        {
                            name: "Testwhite580",
                            hex: "#ffffff",
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
        ],

        configurator: {
            choiceHeadings: {
                model: "Modell",
                drivetrains: "Motor & växellåda",
                colors: "Färg",
                wheels: "Fälgar",
                packages: "Utrustningspaket",
                extras: "Tillval",
            },
        },

        dealers: [
            {
                dealer: "Återförsäljare X",
                street: "Handlargatan 123",
                zip: "12345",
                town: "Bilholm",
                areaCode: "0999",
                phone: "12345",
                coordinates: [100,200],
            },
            {
                dealer: "Återförsäljare Z",
                street: "Bilvägen 100",
                zip: "12346",
                town: "Flarken",
                areaCode: "0004",
                phone: "55544",
                coordinates: [300,110],
            },
            {
                dealer: "Återförsäljare Y",
                street: "Handlargatan 1",
                zip: "12346",
                town: "Bilhult",
                areaCode: "0004",
                phone: "55544",
                coordinates: [300,110],
            },
        ],

        history: 
            {
                heading: "En historia om ett geni",
                quote: '"Jaha."',
                quoteBy: "Elizabeth Ager om Edwards död 1936",
                image_top: "../src/assets/backgrounds/shears.png",
                image_middle: "../src/assets/backgrounds/shears.png",
                image_bottom: "../src/assets/backgrounds/shears.png",
                paragraphs: [
                    "1899 konstruerade den walesiske bonden och geniet Edward David Ager världens första ångdrivna fårsax. När affärerna gick bättre behövde han ett fordon för att ta sig runt och sälja sina produkter, och den första lastbilen med namnet Peiriant byggdes 1902.",
                    "Lastbilen blev snabbt populär och företaget utökade till att sälja personbilar. Peiriant Motor Company gjorde sig snabbt ett gott rykte som prisvärda bilar med finurliga lösningar och personlighet.",
                    "Edwards fru Elizabeth lämnade honom efter allt resande, fåren rymde och drunknade och Edward dog på trottoaren utanför en bar i London, men anden lever alltjämt kvar över företaget än idag.",
                ]
            },
    }),
    actions: {
    },
  })