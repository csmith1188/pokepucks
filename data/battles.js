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
            },
            {
                text: "If a player must move a puck from their Health Stack to another stack, but cannot because their Health Stack has no pucks in it, then their current Slammer gains the Critical Status.",
                notes: []
            }
        ],
        setup: [
            {
                text: "Decide Players",
                description: [
                    "Decide how many players are playing",
                    "Flip coins, rock/paper/scissors, and smash pucks to decide who goes first.",
                    "Decide who who take their turn clockwise from the first player",
                    "The first player will take their next turn after the last player's turn, making an infinite loop."
                ],
                notes: [
                    "PokéPucks is designed for 2 to 4 players, but can support more."
                ]
            },
            {
                text: "Special Rules",
                description: [
                    "Decide which Special Rules to add to this battle"
                ],
                notes: [
                    "For example, will you use Pokeball Slammer or Pokemon Slammer Abilities? Will you use Pokemon Slammer Types?",
                    "It is good to add in a few rules from the Ante Battle and Core Rules as you play more games to get used to the game."
                ]
            },
            {
                text: "Build Health Stack",
                description: [
                    "Each player puts 10 Sandbag Item Pucks in their Health Stack.",
                    "If they players agree, any puck can be used as a Sandbag Item Proxy."
                ],
                notes: [
                    "These Sandbag Item Pucks should be from a neutral collection that one, all, or none of the players owns. This way nobody can lose any pucks."
                ]
            },
            {
                text: "Build Arena",
                description: [
                    "Place 8 Sandbag Item Pucks in the Arena Stack",
                    "If they players agree, any puck can be used as a Sandbag Item Proxy."
                ],
                notes: [
                    "These Sandbag Item Pucks should be from a neutral collection that one, all, or none of the players owns. This way nobody can lose any pucks."
                ]
            },
            {
                text: "Pick a Slammer",
                description: ["In the turn order, each player selects a legal puck from their collection to be their slammer."],
                notes: []
            },
            {
                text: "Begin",
                description: ["Begin the battle by the first player in the turn order taking their turn in the Battle Loop."],
                notes: []
            }
        ],
        loop: [
            {
                text: "Top Off",
                description: ["The current player tops-off the Arena Stack from their Health Stack."],
                notes: [
                    "Check the Previous Player for Critical Status before topping off. This may reduce the number of pucks you need to Top Off.",
                    "If the previous player did well and picked up a lot of pucks, they have \"damaged\" your slammer by forcing you to top off more pucks from your Health stack."
                ]
            },
            {
                text: "Knock Out",
                description: [
                    "If the current player's Slammer has the Critical Status, the previous player may attempt a Knock Out against their Slammer.",
                    "If the Knock Out succeeds, the current player is out of the battle. Move their slammer and all of the pucks in their Health, Power, and Prize stacks to their collection. Skip to the end of this turn."
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
                    "Many Special Rules change the number of pucks you can pick up.",
                    "In an Ante Battle, you would pick up a different amount of pucks. Counting pucks seems pointless in a Training Battle, but it will help you learn to play Ante Battles if you choose to."
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
                text: "Players may not use Special Rules of pucks in a Prize stack, unless otherwise stated on the puck..",
                notes: []
            }
        ],
        setup: [
            {
                text: "Decide Players",
                description: [
                    "Decide how many players are playing",
                    "Flip coins, rock/paper/scissors, and smash pucks to decide who goes first.",
                    "Decide who who take their turn clockwise from the first player",
                    "The first player will take their next turn after the last player's turn, making an infinite loop."
                ],
                notes: [
                    "PokéPucks is designed for 2 to 4 players, but can support more."
                ]
            },
            {
                text: "Legal pucks",
                description: [
                    "Decide which pucks can or can not be used, and how many.",
                    "Decide which pucks can be used to represent another puck for rules purposes, in case you do not have enough of the correct type."
                ],
                notes: [
                    "Some pucks are not balanced or don't match the battle theme, and should have a maximum or a minimum limit per player or battle."
                ]
            },
            {
                text: "Special Rules",
                description: [
                    "Decide which Special Rules to add to this battle, or which rules to remove.",
                    "All players must agree to the rules before continuing."
                ],
                notes: [
                    "Feel free to make up totally new rules, or take rules away.",
                    "If you do not want your opponents to be able to take your slammer, do not agree to play with Pokeball Slammer Slammer Abilities."
                ]
            },
            {
                text: "Add Pucks",
                description: [
                    "In the turn order, each player moves a Slammer from their Collection to their Bench Stack. If a player does not wish to add another slammer after the first, they may pass their turn to the next player.",
                    "Repeat until every Player has either passed, or already added 3 Slammers to their Bench Stack.",
                    "Each player moves 10 to 16 Pucks from their Collection to their Health Stack. Subtract 1 from each of these numbers for each player in the Battle. to a minimum of 5."
                ],
                notes: [
                    "Once you move a puck or slammer from your Collection to the Battle, it is no longer your puck. It belongs to all players in the Battle until the Battle is over",
                    "Never move a puck from your Collection to the Battle if you wish to keep that puck."
                ]
            },
            {
                text: "Build Arena",
                description: [
                    "Starting with the first player, each player moves one puck from their Health Stack to the top of the Arena stack.",
                    "Once every player has done this, if the Arena Stack has less than 8 pucks in it, repeat the above.",
                    "If the Arena Stack has 8 or more pucks in it, the Arena Stack Size now equals the number of Pucks in the Arena Stack.",
                    "Each player's Health Stack Size becomes 10."
                ],
                notes: [
                    "Three player games will have 9 pucks in the arena stack. Seven player games will have 14. Twenty player games will have 20."
                ]
            },
            {
                text: "Begin",
                description: [
                    "Begin the battle by the first player in the turn order taking their turn in the Battle Loop."
                ],
                notes: []
            }
        ],
        loop: [
            {
                text: "Top Off",
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
                text: "Knock Out",
                description: [
                    "If the current player has the Critical Status, the previous player may attempt a Knock Out.",
                    "Set aside the pucks in the Arena stack. Move the current player's slammer into the Arena stack.",
                    "The previous player makes 1 attack. If the current player's slammer is flipped, do not pick up; the current player is out of the battle. Move their slammer and all of the pucks in their Health, Power, and Prize stacks to their collection. Skip to the end of this turn."
                ],
                notes: [
                    "Flipping slammers with other slammers is like the classic Japanse game of Menko, which predates pucks."
                ]
            },
            {
                text: "Select Slammer",
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
                text: "End Turn",
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