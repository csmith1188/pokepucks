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
        description: "A superb tool for relaxation, unless you are a hungry and unwitting water type Pokemon",
        se: {
            adventure: [],
            battle: [{
                text: "After making a throw, if this puck is flipped, the current player moves it to their prize stack.",
                notes: ["This does not count towards the number of pucks the player is allowed to pick up."]
            }]
        }
    }
]