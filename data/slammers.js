const Slammers = [
    {
        name: "Bulbasaur",
        pokedex: "001",
        pucks:
        {
            "2223B05": {
                subname: "Bulbasaur",
                img: "",
                type: "Grass",
                resist: "Water",
                weakness: "Fire",
                weight: "4",
                size: "6"
            },
            "2223B03": {
                subname: "Bulbasaur Alpha",
                img: "",
                type: "Grass",
                resist: "None",
                weakness: "Fire",
                weight: "8",
                size: "6"
            }
        },
        description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon. ",
        ability: {
            name: "Leech-Seed",
            adventure: {},
            battle: {
                text: "After the previous player has restacked their last attack, you may make an attack. If you flip any pucks, do not pick them up. Instead, move 1 puck from your Prize Stack to your Health Stack.",
                notes: []
            }
        },
        ballStrength: 2, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Machop",
        pokedex: "066",
        pucks:
        {
            "2223B09": {
                subname: "Machop",
                img: "",
                type: "Fighting",
                resist: "Normal",
                weakness: "Psychic",
                weight: "4",
                size: "6"
            }
        },
        description: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
        ability: {
            name: "Cross Chop",
            adventure: {},
            battle: {
                text: "After making all of your attacks, if you picked up any pucks this turn, you may make 1 additional attack. You may only pick up 1 puck from this attack.",
                notes: []
            }
        },
        ballStrength: 3, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Meowth",
        pokedex: "052",
        pucks:
        {
            "2223B17": {
                subname: "Meowth",
                img: "",
                type: "Normal",
                resist: "Psychic",
                weakness: "Fighting",
                weight: "4",
                size: "6"
            }
        },
        description: "Adores circular objects. Wanders the street on a nightly basis to look for dropped loose change.",
        ability: {
            name: "Pay Day",
            adventure: {},
            battle: {
                text: "After you have made your last attack, if you picked up any Item Pucks this turn, you may move an Item Puck from your Prize Stack to the top of the Arena Stack. If you do, make an additional attack. You may only pick up flipped Item pucks.",
                notes: []
            }
        },
        ballStrength: 4, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Onix",
        pokedex: "095",
        pucks:
        {
            "2223B18": {
                subname: "Onix",
                img: "",
                type: "Fighting",
                resist: "Fire",
                weakness: "Water",
                weight: "20",
                size: "6"
            }
        },
        description: "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
        ability: {
            name: "Dig",
            adventure: {},
            battle: {
                text: "When counting attacks on your turn, you may choose to reduce that number to 1. If you do, the next time you determine the number of attacks to make on your turn, add 1 to that number.",
                notes: []
            }
        },
        ballStrength: 5, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Pikachu",
        pokedex: "025",
        pucks:
        {
            "2223B08": {
                subname: "Pikachu",
                img: "",
                type: "Electric",
                resist: "Water",
                weakness: "Fighting",
                weight: "4",
                size: "6"
            }
        },
        description: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
        ability: {
            name: "Thunder Wave",
            adventure: {},
            battle: {
                text: "Before making an attack, you may use this ability. If you do, and you flip any pucks, do not pick up. Instead, the next player gains the Paralyzed Status.",
                notes: []
            }
        },
        ballStrength: 3, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Pidgeot",
        pokedex: "018",
        pucks:
        {
            "2223B19": {
                subname: "Pidgeot",
                img: "",
                type: "Normal",
                resist: "Grass",
                weakness: "Electric",
                weight: "20",
                size: "6"
            }
        },
        description: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
        ability: {
            name: "Wing Attack",
            adventure: {},
            battle: {
                text: "When counting attacks on your turn, if the next player’s slammer Energy Type is Grass, treat your slammer as having the Energy Type that matches their weakness.",
                notes: []
            }
        },
        ballStrength: 7, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Squirtle",
        pokedex: "007",
        pucks:
        {
            "2223B01": {
                subname: "Squirtle",
                img: "",
                type: "Water",
                resist: "Fire",
                weakness: "Electric",
                weight: "4",
                size: "6"
            },

            "2223B07": {
                subname: "Squirtle Alpha",
                img: "",
                type: "Water",
                resist: "None",
                weakness: "Electric",
                weight: "8",
                size: "6"
            },
        },
        description: "After birth, its back swells and hardens into a shell. Powerful sprays foam from its mouth.",
        ability: {
            name: "Defense Curl",
            adventure: {},
            battle: {
                text: "After making all of your attacks on your turn, if you did not pick up any pucks this turn, the next time the previous player picks up, they must pick up 1 less puck.",
                notes: []
            }
        },
        ballStrength: 2, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Snorlax",
        pokedex: "143",
        pucks:
        {
            "2223B19": {
                subname: "Snorlax",
                img: "",
                type: "Normal",
                resist: "Psychic",
                weakness: "Fighting",
                weight: "20",
                size: "6"
            }
        },
        description: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
        ability: {
            name: "Thunder Wave",
            adventure: {},
            battle: {
                text: "Before you top-off, you may give your slammer the Sleep Status if it does not already have it. If you do, you may move pucks from your Prize Stack to your HP Stack until your HP Stack has as many pucks in it as it had at the beginning of your first turn, or your Prize Stack is empty.",
                notes: []
            }
        },
        ballStrength: 5, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Scyther",
        pokedex: "123",
        pucks:
        {
            "2223B08": {
                subname: "Scyther",
                img: "",
                type: "Grass",
                resist: "Fighting",
                weakness: "Fire",
                weight: "4",
                size: "6"
            }
        },
        description: "With ninja-like agility and speed, it can create the illusion that there is more than one.",
        ability: {
            name: "Cut",
            adventure: {},
            battle: {
                text: "After making all of your attacks on your turn, you may make 1 additional attack. You may only pick up 1 puck from this attack.",
                notes: []
            }
        },
        ballStrength: 7, // 1 is baby, 5 is masterball
        notes: ""
    },

    {
        name: "Vaporeon",
        pokedex: "134",
        pucks:
        {
            "2223B21": {
                subname: "Vaporeon",
                img: "",
                type: "Water",
                resist: "Fire",
                weakness: "Electric",
                weight: "8",
                size: "6"
            }
        },
        description: "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
        ability: {
            name: "Ice Beam",
            adventure: {},
            battle: {
                text: "When counting attacks on your turn, if the Energy Type of the next player’s slammer is Water, treat their Weakness Type as being Water, or if the Energy Type of the next player’s slammer is Fire, treat their Resistance Type as being Water. ",
                notes: []
            }
        },
        ballStrength: 6, // 1 is baby, 5 is masterball
        notes: ""
    },
]