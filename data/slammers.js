const Slammers = [

    {
        name: "Aerodactyl",
        pokedex: "142",
        pucks:
        {
            "2223B09": {
                subname: "Aerodactyl",
                img: "",
                type: "Fighting",
                resist: "Normal",
                weakness: "Electric",
                weight: "4",
                size: "6"
            },
        },
        description: "Aerodactyl bears a resemblance to a pterosaur and exhibits distinct features such as an arrowhead-shaped tip at the end of its tail, a conical spike on its back, purplish-gray skin, and a lower jaw armed with sharp teeth.",
        ability: {
            name: "Hyper Beam",
            adventure: {},
            battle: {
                text: "When counting attacks on your turn, you may choose to increase that number by 2. If you do, after counting your attacks on your next turn, reduce that number to 1.",
                notes: []
            }
        },
        ballStrength: 2,
        tags: ["wing"],
        notes: ""
    }, 

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
        ballStrength: 2, // 1 is baby, 2 is 4g, 3 is 8g, 4 is higher, 5 is masterball
        tags: [],
        notes: ""
    },

    {
        name: "Charmander",
        pokedex: "004",
        pucks:
        {
            "2223B06": {
                subname: "Charmander",
                img: "",
                type: "Fire",
                resist: "Grass",
                weakness: "Water",
                weight: "4",
                size: "6"
            },
            "2223B02": {
                subname: "Charmander Alpha",
                img: "",
                type: "Fire",
                resist: "None",
                weakness: "Water",
                weight: "8",
                size: "6"
            }
        },
        description: "It clearly favors warmer environments, and when it rains, it's rumored that steam emanates from the end of its tail.",
        ability: {
            name: "Rage",
            adventure: {},
            battle: {
                text: "After making all of your attacks on your turn, if the previous player picked up any pucks in their turn, you may make 1 additional attack. You may only pick up 1 puck from this attack.",
                notes: []
            }
        },
        ballStrength: 2,
        tags: [],
        notes: ""

    },

{
        name: "Eevee",
        pokedex: "133",
        pucks:
        {
            "2223B11": {
                subname: "Eevee",
                img: "",
                type: "Normal",
                resist: "psychic",
                weakness: "Fighting",
                weight: "4",
                size: "6"
            },
        },
        description: "Eevee is a diminutive, fox-like being covered in a coat of brown fur. Its snout resembles that of a cat, featuring a petite, triangular, and black nose. Encircling its neck is a fluffy, cream-colored ruff, and it sports a bushy brown tail reminiscent of a fox, adorned with a cream-colored tip.",
        ability: {
            name: "Genetically unstable",
            adventure: {},
            battle: {
                text: "When counting attacks on your turn, if there is only 1 Energy Puck in your Power Stack, you may change this Slammer's Energy Type to match that Energy Puck.",
                notes: ["This will give you the 1 additional attack from having an Energy Puck that matches the Slammer's Energy Type."]
            }
        },
        ballStrength: 2,
        tags: [],
        notes: ""
    },

    {
        name: "Flareon",
        pokedex: "136",
        pucks:
        {
            "2223B23": {
                subname: "Flareon",
                img: "",
                type: "Fire",
                resist: "Grass",
                weakness: "Water",
                weight: "8",
                size: "6"
            },
        },
        description: " Flareon is a four-legged, mammalian Pokémon. It boasts vibrant flame-orange fur along with a thick, yellow mane, a broad and fluffy tail shaped like a flame, and a fireball-shaped tuft of yellow fur on top of its head.",
        ability: {
            name: "Fire Spin",
            adventure: {},
            battle: {
                text: "After making your last attack on your turn, if you flipped any pucks this turn, in the previous player's Pick a Slammer phase, they must pick the slammer they picked in their previous turn.",
                notes: ["Note that the Switch Item Puck still bypasses this."]
            }
        },
        ballStrength: 3,
        tags: [],
        notes: ""
    },

    
    {
        name: "Gastly",
        pokedex: "092",
        pucks:
        {
            "2223B10": {
                subname: "Gastly",
                img: "",
                type: "Psychic",
                resist: "Resistance",
                weakness: "Grass",
                weight: "4",
                size: "6"
            },
        },
        description: "Gastly's visual characteristics include a dark sphere serving as its 'head,' enveloped by a haze of light purple gas. This spectral creature possesses sizable, white eyes and a wide mouth adorned with a small set of fangs.",
        ability: {
            name: "Poison Cloud",
            adventure: {},
            battle: {
                text: "Before making an attack, you may use this ability. If you do, and you flip any pucks, do not pick up. Instead, the next player gains the Poison Status.",
                notes: []
            }
        },
        ballStrength: 2,
        tags: [],
        notes: ""
    },

      
    {
        name: "Jigglypuff",
        pokedex: "039",
        pucks:
        {
            "2223B11": {
                subname: "Jigglypuff",
                img: "",
                type: "Normal",
                resist: "Psychic",
                weakness: "Fighting",
                weight: "4",
                size: "6"
            },
        },
        description: "Jigglypuff is a petite, circular, pink Pokémon that sports a cluster of curly fur on its head. It features compact, limbless appendages, ear structures reminiscent of a cat's, and sizeable blue eyes.",
        ability: {
            name: "Sing",
            adventure: {},
            battle: {
                text: "Before making an attack, you may use this ability. If you do, and you flip any pucks, do not pick up. Instead, the next player gains the Sleep Status. ",
                notes: []
            },
        },
        ballStrength: 2,
        tags: [],
        notes: ""
    },

       
    {
        name: "Jolteon",
        pokedex: "Electric",
        pucks:
        {
            "2223B22": {
                subname: "Jolteon",
                img: "",
                type: "Electric",
                resist: "Water",
                weakness: "Fighting",
                weight: "8",
                size: "6"
            },
        },
        description: "Jolteon is a four-legged, mammalian Pokémon adorned in prickly, vibrant yellow fur. Its lengthy ears resemble those of a rabbit, and it boasts deep purple, almond-shaped eyes. Its snout is reminiscent of a cat's, featuring a petite, black, triangular nose.",
        ability: {
            name: "Swift",
            adventure: {},
            battle: {
                text: "After making an attack, if you did not pick up any pucks, you may make another attack. You may only pick up 1 puck from this attack. (Extra attacks from this ability do not grant more attacks if you do not pick up pucks from them)",
                notes: []
            }
        },
        ballStrength: 3,
        tags: [],
        notes: ""
    }, 

    {
        name: "Lapras",
        pokedex: "131",
        pucks:
        {
            "2223B20": {
                subname: "Lapras",
                img: "",
                type: "Water",
                resist: "Fire",
                weakness: "Electric",
                weight: "8",
                size: "6"
            },
        },
        description: "Lapras is an enormous Pokémon of the Water/Ice type, bearing a striking resemblance to a plesiosaur. Its predominantly light blue skin extends to a cream/white underside. Lapras possesses an exceptionally long neck that leads to a rounded head. Its ears take on a spiral shape, and it sports a petite horn on its forehead.",
        ability: {
            name: "Surf",
            adventure: {},
            battle: {
                text: "[Support] After you top-off, you may move up to 2 pucks from your Prize Stack to the top of the Arena Stack. (Support Slammer Abilities can be used if the slammer is in your Power stack, in addition to your current slammer's Slammer Ability)",
                notes: []
            }
        },
        ballStrength: 3,
        tags: [],
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
        ballStrength: 2, // 1 is baby, 5 is masterball
        tags: [],
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
                text: "After making an attack on your turn, after you pick up, you may pick up a flipped Item puck.",
                notes: ["For example, if you flip an Energy Puck and an Item Puck, but can only pick up 1 this attack, you can pick up the Energy puck for you attack, then this ability allows you to pick up the item puck."]
            }
        },
        ballStrength: 2, // 1 is baby, 5 is masterball
        tags: [],
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
        ballStrength: 4, // 1 is baby, 5 is masterball
        tags: [],
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
        ballStrength: 2, // 1 is baby, 5 is masterball
        tags: [],
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
                text: "When counting attacks on your turn, if the next player's slammer Energy Type is Grass, may treat your slammer as having the Energy Type that matches their weakness.",
                notes: []
            }
        },
        ballStrength: 3, // 1 is baby, 5 is masterball
        tags: ["wing"],
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
                text: "After making all your attacks on your turn, if you did not pick up any pucks this turn, the next time the previous player picks up, they must pick up 1 less puck in each of their attacks.",
                notes: []
            }
        },
        ballStrength: 2, // 1 is baby, 5 is masterball
        tags: [],
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
                text: "Before calculating the number of attacks to make on your turn, if this Slammer does not have the Sleep Status or the Switch Sick Status, you may give it the Sleep Status. If you do, you may top off your Health Stack from your Prize Stack. After calculating the number of attacks to make on your turn, reduce the number to 0.",
                notes: ["Succeeding or failing to top off the Health Stack does not matter. If your Health Stack Size is 10, and it has 4 pucks in it"]
            }
        },
        ballStrength: 4, // 1 is baby, 5 is masterball
        tags: [],
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
                text: "If your current Slammer's Energy Type is Grass, in each of your attacks on your turn, when counting the number of pucks to pick up, add 1 to that number.",
                notes: []
            }
        },
        ballStrength: 2, // 1 is baby, 5 is masterball
        tags: [],
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
        ballStrength: 3, // 1 is baby, 5 is masterball
        tags: [],
        notes: ""
    }
]
