const Battles_description = "";
const Battles = [
    {
        name: "Training Battle",
        description: "A safe, no-stakes battle to learn how PokePucks is played. Players take turns in their turn order until all but one player has been eliminated! This is one of two \"complete Battles\", in that it doesn't modify any other existing Battle. This Battle is just so you can learn how to play a Battle. You can't lose any of your pucks, just relax and have fun with friends.",
        type: "battle",
        general: [
            {
                text: "Players may not touch the Arena Stack if they are not the current player.",
                notes: []
            },
            {
                text: "Players may not touch the pucks in other player's Health, Power, or Prize stack without that player's permission.",
                notes: []
            },
            {
                text: "Players may not discard pucks (move pucks to your Prize Stack from anywhere) at will.",
                notes: []
            },
            {
                text: "Players may not use the Special Rules of more than 1 of the same Item Puck in a single turn.",
                notes: []
            },
            {
                text: "Players may not use Special Rules of pucks in a Prize stack.",
                notes: []
            }
        ],
        setup: [
            {
                text: "Decide how many players are playing",
                description: [],
                notes: [
                    "PokéPucks is designed for 2 to 4 players, but can support more."
                ]
            },
            {
                text: "Decide which Special Rules to add to this battle",
                description: [
                    "Will you use Pokeball Slammer or Pokemon Slammer Abilities? Will you use Pokemon Slammer Types?"
                ],
                notes: [
                    "It is good to add in a few rules from the Ante Battle and Core Rules as you play more games to get used to the game."
                ]
            },
            {
                text: "Determine the turn order of all players",
                description: [
                    "Flip coins, rock/paper/scissors, and smash pucks to decide who goes first.",
                    "The first player will take their next turn after the last player's turn, making an infinite loop."
                ],
                notes: []
            },
            {
                text: "Each player puts 10 Sandbag Item Pucks in their Health Stack",
                description: [],
                notes: [
                    "These Sandbag Item Pucks should be from a neutral collection that one, all, or none of the players owns. This way nobody can lose any pucks."
                ]
            },
            {
                text: "Place 8 Sandbag Item Pucks in the Arena Stack",
                description: [],
                notes: [
                    "These Sandbag Item Pucks should be from a neutral collection that one, all, or none of the players owns. This way nobody can lose any pucks."
                ]
            },
            {
                text: "Each player selects a Slammer",
                description: ["In the turn order, each player selects a legal puck from their collection to be their slammer."],
                notes: []
            },
            {
                text: "Begin the battle by the first player in the turn order taking their turn in the Battle Loop.",
                description: [],
                notes: []
            }
        ],
        loop: [
            {
                text: "Top off the Arena Stack",
                description: ["The current player tops-off the Arena Stack from their Health Stack."],
                notes: [
                    "Check the Previous Player for Critical Status before topping off",
                    "If the previous player did well and picked up a lot of pucks, they have \"damaged\" your slammer by forcing you to top off more pucks from your Health stack."
                ]
            },
            {
                text: "Attempt a Knock Out",
                description: [
                    "Set aside the pucks in the Arena stack. Move the current player's slammer into the Arena stack.",
                    "The previous player makes one attack. If the current player's slammer is flipped, do not pick up; the current player is out of the battle. Move their slammer and all of the pucks in their Health, Power, and Prize stacks to their collection. Skip to the end of this turn."
                ],
                notes: [
                    "Flipping slammers with other slammers is like the classic Japanse game of Menko, which predates pucks."
                ]
            },
            {
                text: "Count Attacks",
                description: [
                    "The current player counts the number of attacks they can make.",
                    "The current player gets 1 attack.",
                    "The current player checks their Puck Abilities, Slammer Abilites, Slammer Status, and other Special Rules to find modifiers to this number.",
                    "If the current player's slammer has a Power Type matching the Weakness Type of the the next player's slammer, increase the number of attacks by 1.",
                    "If the current player's slammer has a Power Type matching the Resistance Type of the next player's slammer, decrease the number of attacks by 1, to a minimum of 1."
                ],
                notes: []
            },
            {
                text: "Make Attacks",
                description: [
                    "The current player makes all of their attacks, as follows",
                    "The current player makes a throw.",
                    "Count the number of pucks the current player can pick up, which is the number all flipped pucks inside of the arena.",
                    "Pick up that number of pucks by moving them to the current player's Power stack.",
                    "The current player restacks the pucks that were not picked up."
                ],
                notes: [
                    "Many Special Rules change the number of pucks you can pick up."
                ]
            },
            {
                text: "Discard Pucks",
                description: ["The current player may discard any pucks in their Power Stack."],
                notes: [
                    "Some Special Rules only apply if there aren't any of a certain type of puck in your Power stack. Now is your chance to get rid of the pucks that aren't helping you."
                ]
            },
            {
                text: "Check for a Winner",
                description: [
                    "If the current player is the only player still in the battle, the battle ends.",
                    "Set aside all of the remaining Sandbag Item Pucks in the Arena Stack, their Health Stack, their Power Stack, and their Prize Stack.",
                    "They are then out of the battle."
                ],
                notes: []
            }
        ],
        end: [
            {
                text: "Once all players are out of the battle, the last player to become out of the battle is the winner.",
                description: [],
                notes: []
            },
            {
                text: "Put Sandbags Away",
                description: ["Combine all Sandbag Item Pucks and return them to their owner."],
                notes: [
                    "These should be put into a neutral collection owned by one, all, or none of the players so they can share and player again later."
                ]
            }
        ],
        modifiers: [
            {
                setup: [],
                loop: [],
                end: []
            }
        ]
    },
    {
        name: "Ante Battle",
        description: "The most common way to play a Pokemon Battle. This is one of the only two base Battles. All other Battles are modifications of this one.",
        type: "battle",
        general: [
            {
                text: "Players may not touch the Arena Stack if they are not the current player.",
                notes: []
            },
            {
                text: "Players may not touch the pucks in other player's Health, Power, or Prize stack without that player's permission.",
                notes: []
            },
            {
                text: "Players may not discard pucks (move pucks to your Prize Stack) at will.",
                notes: []
            },
            {
                text: "Players may not use the Special Rules of more than 1 of the same Item Puck in a single turn.",
                notes: []
            },
            {
                text: "Players may not use Special Rules of pucks in a Prize stack.",
                notes: []
            }
        ],
        setup: [
            {
                text: "Determine the number of players and their turn order",
                description: [
                    "Flip coins, rock/paper/scissors, draw strawsm, or smash pucks to decide who goes first.",
                    "The first player will take their next turn after the last player's turn, making an infinite loop."
                ],
                notes: [
                    "PokéPucks is designed for 2 to 4 players, but can support more."
                ]
            },
            {
                text: "Select legal pucks and suitable proxies",
                description: [
                    "Decide which pucks can or can not be used, and how many.",
                    "Decide which pucks can be used to represent another puck for rules purposes, in case you do not have enough of the correct type."
                ],
                notes: [
                    "Some pucks are not balanced or don't match the battle theme, and should have a maximum or a minimum limit per player or battle."
                ]
            },
            {
                text: "Decide which Special Rules to add to this battle",
                description: [
                    "Pokeball Slammers cannot use their Slammer Abilities, unless all players agree now."
                ],
                notes: [
                    "If you do not want your opponents to be able to take your slammer, do not agree to play with Pokeball Slammer Slammer Abilities."
                ]
            },
            {
                text: "Add pucks to the Battle",
                description: ["Each player moves 8 to 20 Pucks from their Collection to their Health Stack."],
                notes: [
                    "Once you move a puck from your Collection to the Health Stack, it is no longer your puck. It belongs to all players in the Battle until the Battle is over",
                    "Never move a puck from your Collection to the Health stack if you wish to keep that puck."
                ]
            },
            {
                text: "Build the Arena Stack",
                description: [
                    "Starting with the first player, each player moves one puck from their Health Stack to the top of the Arena stack.",
                    "Once every player has done this, if the Arena Stack has less than 8 pucks in it, repeat the above.",
                    "If the Arena Stack has 8 or more pucks in it, the Arena Stack Size now equals the number of Pucks in the Arena Stack.",
                ],
                notes: [
                    "Three player games will have 9 pucks in the arena stack. Seven player games will have 14. Twenty player games will have 20."
                ]
            },
            {
                text: "Select Slammers",
                description: [
                    "In the turn order, each player moves 1 to 3 Slammers from their Collection to their Bench Stack.",
                    "The Bench Stack Size is 3.",
                    "If any player has less Slammers in the Bench Stack than the Bench Stack size, they may move a number of pogs from their Health Stack to their Power Stack equal to the difference."
                ],
                notes: ["For example, if you choose to only use 1 Slammer, you may move 2 pucks from your Health Stack to your Power Stack."]
            },
            {
                text: "Start the Loop.",
                description: ["Begin the battle by the first player in the turn order taking their turn in the Battle Loop."],
                notes: []
            }
        ],
        loop: [
            {
                text: "Top Off the Arena Stack",
                description: [
                    "The current player tops off the Arena Stack from their Health Stack.",
                    "If the player fails to top off the Arena Stack, there Slammer gains the \"Critical\" Status."
                ],
                notes: [
                    "Check the Previous Player for Critical Status before topping off",
                    "If the previous player did well and picked up a lot of pucks, they have \"damaged\" your slammer by forcing you to top off more pucks from your Health stack."
                ]
            },
            {
                text: "Attempt a Knock Out",
                description: [
                    "If the current player has the Critical Status, the previous player may attempt a Knock Out.",
                    "Set aside the pucks in the Arena stack. Move the current player's slammer into the Arena stack.",
                    "The previous player makes one attack. If the current player's slammer is flipped, do not pick up; the current player is out of the battle. Move their slammer and all of the pucks in their Health, Power, and Prize stacks to their collection. Skip to the end of this turn."
                ],
                notes: [
                    "Flipping slammers with other slammers is like the classic Japanse game of Menko, which predates pucks."
                ]
            },
            {
                text: "Pick a Slammer",
                description: [
                    "You may put your current slammer onto your Bench Stack, and select a different slammer to use.",
                    "If you do, your Slammer gains the Switch Sick Status."
                ],
                notes: []
            },
            {
                text: "Count Attacks",
                description: [
                    "The current player counts the number of attacks they can make.",
                    "The current player starts with 1 attack.",
                    "The current player checks their Puck Abilities, Slammer Abilites, Slammer Status, and other Special Rules to find modifiers to this number.",
                    "If the current player's slammer has a Power Type matching the Weakness Type of the the next player's slammer, increase the number of attacks by 1.",
                    "If the current player's slammer has a Power Type matching the Resistance Type of the next player's slammer, decrease the number of attacks by 1, to a minimum of 1."
                ],
                notes: []
            },
            {
                text: "Make Attacks",
                description: [
                    "The current player makes all of their attacks, as follows:",
                    "The current player makes a throw.",
                    "Count the number of pucks the current player can pick up, which is 1 to start.",
                    "Pick up that number of pucks by moving them to the current player's Power stack.",
                    "The current player restacks the pucks that were not picked up."
                ],
                notes: [
                    "Many Special Rules change the number of pucks you can pick up."
                ]
            },
            {
                text: "Discard Pucks",
                description: ["The current player may discard any pucks in their Power Stack."],
                notes: [
                    "Some Special Rules only apply if there aren't any of a certain type of puck in your Power stack. Now is your chance to get rid of the pucks that aren't helping you."
                ]
            },
            {
                text: "End of Turn",
                description: [
                    "If the current player is the only player still in the battle, the battle ends.",
                    "Move the Arena Stack, their Health Stack, their Power Stack, and their Prize Stack, and their Bench Stack to their Collection.",
                    "They are then out of the battle."
                ],
                notes: []
            }
        ],
        end: [
            {
                text: "Declare Winner",
                description: [
                    "Once all players are out of the battle, the last player to become out of the battle is the winner."
                ],
                notes: []
            }
        ],
        modifiers: [
            {
                setup: [],
                loop: [],
                end: []
            }
        ]
    }
];