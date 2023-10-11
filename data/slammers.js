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
                text: "After counting your attacks on your turn, you may choose to increase the number by 2. If you do, After counting your attacks on your next turn, reduce the number to 1. ",
                notes: []
            }
        },
        ballStrength: 2,
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
                text: "After making all of your attacks on your turn, if the previous player picked up any pucks in their turn, you may make 1 additional attack. You may only pick up 1 puck from this attack.",
                notes: []
            }
        },
        ballStrength: 2,
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
                text: "After making your last attack on your turn, if you flipped any pucks this turn, until the beginning of your next turn or you are out of the game, the next player cannot use any special effects from Item pucks, Trainer pucks, or Slammer Abilities that allow them to change their slammer. ",
                notes: []
            }
        },
        ballStrength: 3,
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
        notes: ""
    }, 



    

]
