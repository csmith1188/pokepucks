const Pucks = [
    {
        name: "You",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        description: "This is you",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only trainer Puck in your Power stack when you finish an attack, if that throw didn't hit, you make 1 additional attack.",
                notes: []
            }]
        }
    },
    {
        name: "Ms. Hicks",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        description: "One of the trainers you will find along your way.",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only Trainer Puck in your Power stack when the previous player makes a throw, you may pick up any pucks that landed outside of the Arena. The previous player must move as many pucks from their Health stack to the Arena stack as you picked up. If they cannot, their slammer gains the Critical Status. ",
                notes: []
            }]
        }
    },
    {
        name: "Mr. Merkert",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        description: "One of the trainers you will find along your way.",
        se: {
            adventure: [],
            battle: [{
                text: "if this is the only Trainer Puck in your Power stack after you have made your last attack and you did not pick up and pucks this turn, you may make 1 additional attack",
                notes: []
            }]
        }
    },
    {
        name: "Mr. Saia",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        description: "One of the trainers you will find along your way.",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only Trainer Puck in your Power stack when previous player finishes making a throw, you may move a flipped puck to your Health stack and move a puck from your Health stack into the Arena face-up. ",
                notes: []
            }]
        }
    },
    {
        name: "Mr. Smith",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        description: "One of the trainers you will find along your way.",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only Trainer Puck in your Power stack when you finish topping-off, you may rearrange the Arena stack. ",
                notes: []
            }]
        }
    },
    {
        name: "Bike",
        ids: [],
        type: "Item", // Item, Trainer, Energy, Pokemon
        role: "mart", // Mart, Discovery, Lottery
        img: "",
        description: "A little pricey, but there's no better way for a trainer to zip around the world.",
        se: {
            adventure: [{
                text: "When you make a move action, you may make one additional move action at no cost.",
                notes: ["Obviously, the free move action does not receive another free move."]
            }],
            battle: [{
                text: "After making a throw, if this puck is flipped, the current player moves it to their prize stack.",
                notes: ["This does not count towards the number of pucks the player is allowed to pick up."]
            }]
        }
    },
    {
        name: "Fishing Rod",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "A superb tool for relaxation, unless you are a hungry and unwitting water type Pokemon",
        se: {
            adventure: [{
                text: "You require a Fishing Rod to start a Catch Pokemon action for a Pokemon Slammer Type of Water. In addition, you may start said Catch Action if you are in a Zone with a connection that requires 'Surf' to get to the Zone where the Pokemon is located.",
                notes: ["Example: If you are in Route 19, you may catch a Pokemon located in Route 20 if you possess this puck, even if you do not have Surf and a Water Type Pokemon.", "Vaporeon may be evolved from Eevee with Water Stones without a Fishing Rod, because it is not a Catch Action."]
            }],
            battle: [{
                text: "After making a throw, if this puck is flipped, the current player moves it to their prize stack.",
                notes: ["This does not count towards the number of pucks the player is allowed to pick up."]
            }]
        }
    },
    
    {
        name: "Potions",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "Brings 2 pokemon into your deck to battle.",
        se: {
            adventure: [],
            battle: [{
                text: "Before you top-off, you may move up to 2 pucks from Prize stack onto your Health stack without going over the max size, then discard this puck. ",
                notes: ["This does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "Switch",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "Switch's out your current pokemon for another.",
        se: {
            adventure: [],
            battle: [{
                text: "Before determining the number of attacks to make on your turn, you may replace your slammer with a legal slammer from your collection, then discard this puck. ",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "Berry",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "Rejuvanates your pokemon to keep them in the fight.",
        se: {
            adventure: [],
            battle: [{
                text: "When you pick up this puck, if your Health stack has less pucks than its max size, you may move this puck to your Health stack. ",
                notes: []
            }]
        }
    },
    {
        name: "Focus Energy",
        ids: [],
        type: "Item",
        role: "Energy",
        img: "",
        description: "gives your pokemon with ever increasing strength of they're attacks",
        se: {
            adventure: [],
            battle: [{
                text: "After counting attacks on your turn, if your slammer's Energy Type matches the icon on the puck, add 1 to that number, or discard this puck to add two to that number",
                notes: []
            }]
        }
    },
    {
        name: "Energy",
        ids: [],
        type: "Item",
        role: "Energy",
        img: "",
        description: "Helps your pokemon work well eith moves of it's same typing.",
        se: {
            adventure: [],
            battle: [{
                text: "When determining how many attacks to make on your turn, if this puck is in your Power stack, and the icon on it matches your slammer's Energy Type, add 1 to that number",
                notes: []
            }]
        }
    },
    {
        name: "Full Heal",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "Removes all statuses from one of your pokemon.",
        se: {
            adventure: [],
            battle: [{
                text: "Remove all Status's from your slammer.",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "Focus Sash",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "A good tool to make sure your pokemon will keep fighting",
        se: {
            adventure: [],
            battle: [{
                text: "Before you top-off, if this item is in your Power stack, you may reduce the max size of the Arena stack to equal the number of pucks in the Arena stack plus the number of pucks in your Health stack, then discard this puck.",
                notes: []
            }]
        }
    },
    {
        name: "PokeFlute",
        ids: [],
        type: "Item",
        role: "Discovery",
        img: "",
        description: "Awakens your pokemon.",
        se: {
            adventure: [],
            battle: [{
                text: "Before you top-off, remove the Sleep Status from your slammer",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "Power Stone",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "If the power stone is the same type as your pokemon, itmakes those moves stronger.",
        se: {
            adventure: [],
            battle: [{
                text: "If your slammer's Power Type matches the Energy Type on this puck, after determining the number of attacks you can make, add 1 to that number, then discard this puck. ",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "Silph Scope",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "ignores anything that might change this pokemons turn.",
        se: {
            adventure: [],
            battle: [{
                text: "When determine the number of attacks you can make on your turn, you may ignore any special rules that can reduce your number of attacks by one. ",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
]