const Pucks = [
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
                text: "You require a Fishing Rod to start a Catch Pokemon action for a Pokemon Slammer Type is Water.",
                notes: []
            }],
            battle: [{
                text: "After making a throw, if this puck is flipped, the current player moves it to their prize stack.",
                notes: ["This does not count towards the number of pucks the player is allowed to pick up."]
            }]
        }
    },
    {
        name: "Ms. Hicks",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
		description: "",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only Trainer Puck in your Power stack when the previous player makes a throw, you may pick up any pucks that landed outside of the Arena. The previous player must move as many pucks from their Health stack to the Arena stack as you picked up. If they cannot, their slammer gains the Critical Status. ",
                notes: []
            }]
        }
    },
    {
        name: "You",
        ids: [],
        type: "Trainer",
        role: "lottery",
        img: "",
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only trainer Puck in your Power stack when you finish an attack, if that throw didn't hit, you make 1 additional attack.",
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
        se: {
            adventure: [],
            battle: [{
                text: "If this is the only Trainer Puck in your Power stack when you finish topping-off, you may rearrange the Arena stack. ",
                notes: []
            }]
        }
    },
    {
        name: "Potions",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "heals your pokemon for 20 HP",
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
        description: "switch's out your current pokemon for a different one",
        se: {
            adventure: [],
            battle: [{
                text: "Before determining the number of attacks to make on your turn, you may replace your slammer with a legal slammer from your collection, then discard this puck. ",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "berry",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "heals your pokemon for 10 HP",
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
        description: "adds 1 attack if you have a pokemon with the same typing in your party",
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
        description: "adds 1 attack if you have a pokemon with the same typing in your party",
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
        description: "rempves all negatve status effects form one pokemon",
        se: {
            adventure: [],
            battle: [{
                text: "Remove all Status's from your slammer.",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "focus Sash",
        ids: [],
        type: "Item",
        role: "mart",
        img: "",
        description: "leaves your pokemon on 1 HP if they would have gotten 1-hit KO",
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
        description: "awakens sleeping pokemon",
        se: {
            adventure: [],
            battle: [{
                text: "Before you top-off, remove the Sleep Status from your slammer",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
    {
        name: "power stone",
        ids: [],
        type: "Item",
        role: "discovery",
        img: "",
        description: "evolves certain pokemon with the right stone",
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
        description: "ignores special conditions when determining the number of attacks",
        se: {
            adventure: [],
            battle: [{
                text: "When determine the number of attacks you can make on your turn, you may ignore any special rules that can reduce your number of attacks by one. ",
                notes: ["this does not count towards the number of pucks the player is allowed to pick up"]
            }]
        }
    },
]