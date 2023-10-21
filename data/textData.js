const textData = {
    Introduction: [
        {
            header: "What is PokePucks?",
            body: "PokePucks is a game of collecting, trading, and staking Pokemon themed 'pucks'. While it can be enjoyed as small individual games called \"Battles\", it can also be played as an \"Adventure\". In an Adventure, players track their progress using competing for goals such as collecting all available Pokemon Slammers or Gym Badges. While there are many nuances to the game, the core of the experience is to stack up some pucks and throw a slammer at them, collecting the pucks that land face up."
        },
        {
            header: "What is a Puck?",
            body: "A puck is a flat disc about an inch and half across and about a 16th of an inch thick. Historically, pucks were first known as \"milkcaps\", because they were a collection of paper lids from glass milk and juice bottles in Hawaii during the Great Depression. They are better known by their 1990's trademarked name, \"Pogs\", a name derived from the \"Passion Fruit, Orange, and Guava\" bottles they were originally collected from. Many times several milkcaps were glued together to make a \"kini\", or a thicker, plastic pog was made to be a \"slammer\". Though milkcaps/pogs have always been made from paper, Pokepucks utilize the exciting world of 3D printing and computerized drafting to create new and unique pucks."
        },
        {
            header: "How do I begin playing?",
            body: "You want to build a collection of 9 or more pucks, one of which should be or be used as a slammer. Though any puck would count, some pucks are specifically Pokemon-themed. These are called PokePucks, or in the case of slammers, Pokeball Slammers and Pokemon Slammers. You will also need a friend with at least 9 or more pucks. If it is your first time playing, it is recommended that you play a Training Battle with no modified rules. After you understand the core gameplay setup and loop, start adding in rules such as puck abilities and slammer abilities."
        },
        {
            header: "Pokemon Battles",
            body: "The rules for a \"Battle\" consist of a Setup, Loop, and End Stages, General Rules, and Modifiers.\n In the Setup Stage, players involved will make several decisions about what game they want to play and begin putting the pieces in place. It's important that everyone agrees to the experience they want to have beforehand, else they may not have fun.\nIn the Loop Stage, players take turns going through a series of steps, called \"phases\", until only one player can take their turn, or another agreed upon condition is met.\nIn the End Stage, players decide who won the match, and how to distribute the pucks used in the game.\nGeneral Rules are rules that are always in effect at any Stage of the Battle. Modifiers are used in Battles that copy the base Setup and Loop from another Battle, and overwrite them with new rules. For example, an Even Ante Battle has all of the same rules as an Ante Battle, except there are a few rules changed so that both players leave the game with the same number of pucks as when they started."
        },
        {
            header: "A Note About Staking",
            body: "Dating back 100 years, a big part of the fun of pucks has been staking. In a small group of friends, it is an exciting way to trade extra pucks you had with others. In some game modes, your opponent will keep some of pucks from the game, even if they are yours! Some refer to this as gambling, but it is not. While some factors seem random, your own personal skill, and how you strategically use rules and abilities in the game allow you to control the outcome of the game.\nHowever, it can feel very bad losing a lot of your favorite pucks. It's important to agree what kind of game you want to play with your opponent before the game starts. There are game modes that do not involve staking, and game modes that split the pogs in a fair manner after the game. Once you put a puck into a game, it isn't your puck anymore. **Never play a game with a puck, a number of pucks, or a slammer that you want to keep.**"
        }
    ],
    changelog: [
        {
            header: "PokePucks 1.0 Launch Notes",
            changes: [
                {
                    rule: "Make Attacks",
                    text: "",
                    description: ["Added a step in the Make Attacks phase called Counting Pucks to Pickup. Instead of picking up every puck that flips, you must count the number of pucks you pick up in the way you count attacks, starting with 1."],
                    notes: [
                        "Some players have more access to PokePucks than others, and some players take a long time to build up a collection to play with. I have personally flipped 7 of 8 pucks with a baby pokemon slammer, so it is not especially difficult for an experienced player with a great Slammer to knock out a new player in a few turns, while taking no damage themselves.",
                        "Reducing the average number of pickups per attack gives a struggling opponent more chances to catch up, and get some pucks into their Prize stacks to be able to play another game. Games will also last longer for the amount of investment put in.",
                        "This also, relatively speaking, increases the effectiveness of having more attacks per turn.",
                        "Being able to boost number of attacks and the number of pickups adds more possibilities for combos."
                    ]
                },
                {
                    rule: "Bench Stack",
                    text: "",
                    description: ["Added the Bench Stack to Ante Battles, allowing you take up to 3 Pokemon Slammers into battle."],
                    notes: ["Before, the rules were written to put them in your Power Stack with the rest of you pucks.", "Functionally, you would seperate your Slammers into a seperate Power Stack. This jsut makes it an officially different stack."]
                },
                {
                    rule: "Pick a Slammer",
                    text: "",
                    description:["Added the Pick a Slammer phase to the turn, along with the Switch Sick Status."],
                    notes: ["Before, the only way to switch Pokemon was to get a Switch Item into the Arena, then successfully pick it up and use it.", "Pokemon are now able to switch freely, but at a penalty."]
                },
                {
                    rule: "HM Move",
                    text: "In a Battle, treat this Slammer as though it had the HM Move Item Puck in your Power Stack. If it is a Support Ability, you must choose this Slammer.\nIn an Adventure, if you possess this Slammer, you may make Move Actions as though you also possess the HM Move Item Puck.",
                    description: ["Added a new General Rule to Ante Battles and Adventure. This also changes the Slammer Abilities of Scyther, Lapras, and Onix"],
                    notes: [
                        "This is just to clarify that some Slammers are treated as already knowing the move needed to use the associated abilities, even if you do not have the puck.",
                        "It also clarifies that a Pokemon that already knows this move cannot give this move to another Pokemon."]
                },
                {
                    rule: "HM01 Cut",
                    text: "If your current Slammer's Energy Type is Grass, in each of your attacks on your turn, when counting the number of pucks to pick up, add 1 to that number.",
                    description: "",
                    notes: [
                        "Scyther's Slammer Ability now reads the same as well.",
                        "Cut should be a single sharp attack, with the potential to do more damage."
                    ]
                },
                {
                    rule: "HM02 Fly",
                    text: "In an Adventure, each time you make a Move Action, if you possess a Pokemon Slammer with a Wing Tag, you may move up to 4 times, but you must finish your Move Action in a City Zone.",
                    description: "",
                    notes: [
                        "You may not take other actions until your last move is finished.",
                        "This isn't the Gameboy game. Instantly teleporting across the map in a multiplayer game is over powered."
                    ]
                },
                {
                    rule: "HM03 Surf",
                    text: "Support: Once in your turn, if a Slammer in your Bench Stack has a Water Energy Type, when counting the number of pucks to pick up in the first attack made on your turn, add that Slammer's Ball Strength to that number.",
                    description: "",
                    notes: [
                        "Lapras's Slammer Ability now reads the same as well.",
                        "Surf is now the first and only 'Support' Ability, which allows it to be used on any Poekmon that is on the bench."
                    ]
                },
                {
                    rule: "HM04 Dig",
                    text: "If your current Slammer's Energy Type is Fighting, when counting attacks on your turn, you may choose to reduce that number to 1. If you do, you may pick up an additional puck in each of your attacks during your next turn.",
                    description: "",
                    notes: ["The classic Dig move allows you to dodge now and attack later. In PokePucks, it provides a greater delayed attack."]
                },
                {
                    rule: "Wing Attack",
                    text: "When counting attacks on your turn, if the next player's slammer Energy Type is Grass, may treat your slammer as having the Energy Type that matches their weakness.",
                    description: "Pidgeot",
                    notes: ["Changed to 'may treat'."]
                },
                {
                    rule: "Defense Curl",
                    text: "After making all your attacks on your turn, if you did not pick up any pucks this turn, the next time the previous player picks up, they must pick up 1 less puck in each of their attacks.",
                    description: "Squirtle",
                    notes: ["Boosted to 1 less puck per attack, instead of one less puck per turn."]
                },
                {
                    rule: "Hyper Beam",
                    text: "When counting attacks on your turn, you may choose to increase that number by 2. If you do, after counting your attacks on your next turn, reduce that number to 1.",
                    description: "Aerodactyl",
                    notes: ["Clarified 'when' and 'after'."]
                },
                {
                    rule: "Fire Spin",
                    text: "After making your last attack on your turn, if you flipped any pucks this turn, in the previous player's Pick a Slammer phase, they must pick the slammer they picked in their previous turn.",
                    description: "Flareon",
                    notes: [
                        "More clear explanation and modified for the new 'Pick Slammer' phase.",
                        "Note that the Switch Item Puck still bypasses this."
                    ]
                },
                {
                    rule: "Genetically Unstable",
                    text: "When counting attacks on your turn, if there is only 1 Energy Puck in your Power Stack, you may change this Slammer's Energy Type to match that Energy Puck.",
                    description: "Eevee",
                    notes: [
                        "This will give you the 1 additional attack from having an Energy Puck that matches the Slammer's Energy Type."
                    ]
                },
                {
                    rule: "Pay Day",
                    text: "After making an attack on your turn, after you pick up, you may pick up a flipped Item puck.",
                    description: "Meowth",
                    notes: [
                        "For example, if you flip an Energy Puck and an Item Puck, but can only pick up 1 this attack, you can pick up the Energy puck for you attack, then this ability allows you to pick up the item puck."
                    ]
                },
                {
                    rule: "Sleep",
                    text: "Before calculating the number of attacks to make on your turn, if this Slammer does not have the Sleep Status or the Switch Sick Status, you may give it the Sleep Status. If you do, you may top off your Health Stack from your Prize Stack. After calculating the number of attacks to make on your turn, reduce the number to 0.",
                    description: "Snorlax",
                    notes: [
                        "Succeeding or failing to top off the Health Stack does not matter. If your Health Stack Size is 10, and it has 4 pucks in it"
                    ]
                }
            ],
            body: ""
        }
    ]
}