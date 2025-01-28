import { defineStore } from 'pinia'

export const useContentStore = defineStore("content", {
    state: () => ({ 
        models: [
            {
                model: "150",
                startingPrice: 192000,
                exploreHeadings: [ 
                    "150 är sig själv - precis som du","Liten bil, stor personlighet","Alltid steget före trenderna"
                ],
                explorePoints: [
                    {
                        heading: 'El eller bensin',
                        text: 'Välj mellan våra två effektiva bensinmotorer PlebTec och PoshTec eller varför inte BuzzTec - vårt eldrivna alternativ. Alla med nollutsläpp eftersom den här bilen faktiskt inte existerar på riktigt!',
                        coordinates: [20,40],
                    },
                    {
                        heading: 'LED-strålkastare',
                        text: 'Ett ljus i mörkret - som standard erbjuds LED-strålkastare med kurvljus. Behöver du mer? Extraljus finns som tillval!',
                        coordinates: [40,55],
                    },
                    {
                        heading: 'Även för långresan',
                        text: 'Låt inte storleken avskräcka - bagageutrymmet rymmer ett får med uppfällt baksäte och två får med baksätet nedfällt. Som tillval finns dessutom en stilig takmonterad koffert!',
                        coordinates: [100,30],
                    },
                ],
                specifications: {
                    length: 3775,
                    width: 1700,
                    height: 1450,
                    passengers: 4,
                },
                choices: {
                    drivetrains: [
                        {
                            name: "1.2 PlebTec Manuell",
                            sp: 230,
                            fuel: "Bensin",
                            mileage: 4.3,
                            range: 0,
                            price: 0,
                        },
                        {
                            name: "1.2 PlebTec Automat",
                            sp: 230,
                            fuel: "Bensin",
                            mileage: 4.3,
                            range: 0,
                            price: 19000,
                        },
                        {
                            name: "1.6 PoshTec Manuell",
                            sp: 360,
                            fuel: "Bensin",
                            mileage: 4.7,
                            range: 0,
                            price: 19400,
                        },
                        {
                            name: "1.6 PoshTec Automat",
                            sp: 360,
                            fuel: "Bensin",
                            mileage: 4.7,
                            range: 0,
                            price: 40900,
                        },
                        {
                            name: "BuzzTec Automat",
                            sp: 425,
                            fuel: "El",
                            mileage: 0,
                            range: 450,
                            price: 90100,
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
                            price: 7200,
                        },
                        {
                            name: "Sunset metallic",
                            hex: "#F86400",
                            price: 7200,
                        },
                        {
                            name: "Butternut metallic",
                            hex: "#E3AC59",
                            price: 7200,
                        },
                        {
                            name: "Oxalis metallic",
                            hex: "#5E3A48",
                            price: 7200,
                        },
                        {
                            name: "Pear metallic",
                            hex: "#94A322",
                            price: 7200,
                        },
                        {
                            name: "Pacific metallic",
                            hex: "#0179B5",
                            price: 7200,
                        },
                        {
                            name: "Strawberry metallic",
                            hex: "#DA0000",
                            price: 7200,
                        },
                    ],
                    wheels: [
                        {
                            name: "Standard",
                            id: "rims_standard",
                            price: 0,
                        },
                        {
                            name: "Posh",
                            id: "rims_posh",
                            price: 8900,
                        },
                    ],
                    extras: [
                        {
                            name: "Kylarprydnad",
                            id: "ornament",
                            price: 3000,
                        },
                        {
                            name: "Extraljus",
                            id: "high_beams",
                            price: 3300,
                        },
                        {
                            name: "Rallyvinge",
                            id: "spoiler",
                            price: 3300,
                        },
                        {
                            name: "Takmonterad koffert",
                            id: "rack",
                            price: 3900,
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
                id: 0,
                dealer: "Hanssons Bil",
                street: "Vidarevägen 22A",
                zip: "04035",
                town: "Klinteborg",
                areaCode: "02",
                phone: "12600",
                coordinates: [138.67975,157.51178],
            },
            {
                id: 1,
                dealer: "Holmström Motor",
                street: "Skeppsvägen 81",
                zip: "01028",
                town: "Uthamn",
                areaCode: "002",
                phone: "25500",
                coordinates: [128.54927,111.7044],
            },
            {
                id: 2,
                dealer: "SG Motor",
                street: "Anderhamnsvägen 99A",
                zip: "09060",
                town: "Skäreborg",
                areaCode: "009",
                phone: "30220",
                coordinates: [166.55879,174.23232],
            },
            {
                id: 3,
                dealer: "Sahlström Motor",
                street: "Östra vägen 55",
                zip: "00037",
                town: "Landnäs",
                areaCode: "001",
                phone: "55544",
                coordinates: [71.065422,111.56204],
            },
            {
                id: 4,
                dealer: "Wester Bil",
                street: "Verktygsgatan 21",
                zip: "09645",
                town: "Anderhamn",
                areaCode: "09",
                phone: "55544",
                coordinates: [162.35423,153.98811],
            },
            {
                id: 5,
                dealer: "Bilhallen",
                street: "Handlargatan 10A",
                zip: "05045",
                town: "Breda",
                areaCode: "006",
                phone: "36810",
                coordinates: [104.43433,161.91634],
            },
            {
                id: 6,
                dealer: "Åkerlunds Bil",
                street: "Västra infarten 8C",
                zip: "07021",
                town: "Österborg",
                areaCode: "008",
                phone: "50025",
                coordinates: [147.81921,187.68298],
            },
            {
                id: 7,
                dealer: "Bodén Bil",
                street: "Österlångallén 86A",
                zip: "05040",
                town: "Skeppsköping",
                areaCode: "01",
                phone: "12092",
                coordinates: [103.11295,145.39926],
            },
            {
                id: 8,
                dealer: "Bilpunkten",
                street: "Randgatan 20",
                zip: "04033",
                town: "Salvall",
                areaCode: "003",
                phone: "30095",
                coordinates: [139.13853,134.90736],
            },
        ],

        history: 
            {
                heading: "En historia om ett geni",
                quote: '"Jaha."',
                quoteBy: "Elizabeth Ager om Edwards död 1936",
                paragraphs: [
                    "1899 konstruerade den walesiske bonden och geniet Edward David Ager världens första ångdrivna fårsax. När affärerna gick bättre behövde han ett fordon för att ta sig runt och sälja sina produkter, och den första lastbilen med namnet Peiriant byggdes 1902.",
                    "Lastbilen blev snabbt populär och företaget utökade till att sälja personbilar. Peiriant Motor Cars gjorde sig snabbt ett gott rykte som prisvärda bilar med finurliga lösningar och personlighet.",
                    "Edwards fru Elizabeth lämnade honom efter allt resande, fåren rymde och drunknade och Edward dog på trottoaren utanför en bar i London, men anden lever alltjämt kvar över företaget än idag.",
                ]
            },

        footer: {
            address: {
                title: "Peiriant Motor Cars",
                street: "10 Shearer Street",
                town: "Prenynysig",
                county: "Mid Glamorgan",
                country: "United Kingdom",
                zip: "CF37 4DQ",
            },
        }
    }),
    actions: {
    },
  })