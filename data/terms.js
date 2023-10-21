const Terms = [
    {
        name: "Arena",
        alternates: [],
        text: "A coordoned off section of play, where the Arena Stack is placed, throws can be made, and pucks can land. A standard Arena is a minimum of 11\"x8.5\" (the size of a sheet of standard letter paper), on a hard surface (typically wood), inside of an open box that is at least 4 inches deep.",
        notes: ["Rules for setting up the Arena are in the Setup portion of your Battle."]
    },
    {
        name: "Arena Stack",
        alternates: [],
        text: "The stack of pucks in the Arena where all players make their attacks. This stack is a face down stack.",
        notes: ["As the Arena Stack has no Owner, Special Rules that refer to the Next, Previous, or Current player go by the turn order."]
    },
    {
        name: "Attack",
        alternates: [],
        text: "Straighten the Arena Stack, throw, pick-up, and restack.",
        notes: ["An attack is the entire process, not just the throw."]
    },
    {
        name: "Battle",
        alternates: [],
        text: "All of the pucks, stacks, players, Special Rules, and turns in this play session.",
        notes: []
    },
    {
        name: "Bench Stack",
        alternates: [],
        text: "The stack where each player keeps their slammers during the Battle.",
        notes: []
    },
    {
        name: "Collection",
        alternates: [],
        text: "Any pucks a player owns that are not in the battle.",
        notes: ["This terms refers to your legal right of possession in real life law.", "If you move a puck from your collection to the Battle, you forfeit your legal ownership of that puck. You must win it back by following the rules agreed upon by all players before the battle begins."]
    },
    {
        name: "Current Player",
        alternates: [],
        text: "The player who is taking their turn now.",
        notes: []
    },
    {
        name: "Discard",
        alternates: [],
        text: "Move a selected puck to that player's Prize Stack.",
        notes: []
    },
    {
        name: "Energy Puck",
        alternates: ['Energy'],
        text: "A puck that is clearly marked with the Energy Type it represents on its face.",
        notes: []
    },
    {
        name: "Energy Types",
        alternates: ['Type'],
        text: "There are seven icons that represent a “type” of Pokémon. Grass (green), Fire (red), Water (blue), Electric (yellow), Fighting (orange), Psychic (purple), and Normal (grey). That are often represented by their associated symbols in the Pokémon Trading Card Game.",
        notes: []
    },
    {
        name: "Face-Down",
        alternates: ["Face Down"],
        text: "A puck that is laying in the Arena with the back side facing up and visible.",
        notes: ["A puck that is leaning against an arena wall is neither face up or face down."]
    },
    {
        name: "Face-Up",
        alternates: ["Face Up"],
        text: "A puck that is laying in the Arena with the graphics side facing up and visible.",
        notes: ["A puck that is leaning against an arena wall is neither face up or face down."]
    },
    {
        name: "First Player",
        alternates: [],
        text: "The first person to take their turn in a Battle.",
        notes: []
    },
    {
        name: "Flip",
        alternates: ["Flipped", "Face-Up", "Face Up"],
        text: "To cause a puck to land face-up inside of the Arena by making a throw.",
        notes: []
    },
    {
        name: "Hit",
        alternates: [],
        text: "When the slammer touches the top puck on the Arena Stack and the player is no longer physically touching the slammer.",
        notes: []
    },
    {
        name: "Health Stack",
        alternates: [],
        text: "The pucks that can be used by a player to refill the Arena Stack.",
        notes: []
    },
    {
        name: "HM Move",
        alternates: [],
        text: "In a Battle, treat this Slammer as though it had the HM Move Item Puck in your Power Stack. If it is a Support Ability, you must choose this Slammer.\nIn an Adventure, if you possess this Slammer, you may make Move Actions as though you also possess the HM Move Item Puck.",
        notes: []
    },
    {
        name: "Item Puck",
        alternates: ["Items"],
        text: "Any puck that is listed in the PuckMart, or is listed as a suitable proxy for one. It has the special rules listed for that puck.",
        notes: [""]
    },
    {
        name: "Knock Out",
        alternates: ["knockout"],
        text: "Set aside the pucks in the Arena Stack and move the current player's slammer into the Arena Stack. The previous player must make 1 throw. If the current player's slammer lands face up, the Knockout was successful. Otherwise, remove the current player's slammer and move the set aside pucks into the Arena Stack.",
        notes: []
    },
    {
        name: "Legal",
        alternates: [],
        text: "Any puck or slammer that the players have agreed be playable in this battle.",
        notes: []
    },
    {
        name: "Laying Flat",
        alternates: [],
        text: "When a puck is laying in the arena with and entire face touching the bottom arena surface.",
        notes: ["No pucks may be under the puck in question."]
    },
    {
        name: "Next Player",
        alternates: [],
        text: "The player that is clockwise to the current player or, if read in a Special Rule, the player that is clockwise to the player who owns the puck with the Special Rule.",
        notes: ["For example, if you are playing against one other player, and your Pokemon Slammer has a Slammer Ability that refers to the Next Player, it always refers to you. It does not mean you are the Next Player while your opponent is taking their turn."]
    },
    {
        name: "Out of the Battle",
        alternates: [],
        text: "This player, their slammer, and Special Rules from their pucks and stacks are no longer part of the battle and have no effect.",
        notes: []
    },
    {
        name: "Own",
        alternates: [],
        text: "To possess a puck or stack of pucks in a Battle.",
        notes: ["This does not mean you own the puck outside of the battle."]
    },
    {
        name: "Phase",
        alternates: [],
        text: "A step in the Loop stage of an Adventure or Battle",
        notes: []
    },
    {
        name: "Pick up",
        alternates: ["pickup", "picks up"],
        text: "Move any flipped pucks in the Arena to your Power Stack if they are Energy Pucks, Item Pucks, or Trainer Pucks, and your Prize Stack if they are not.",
        notes: []
    },
    {
        name: "Player",
        alternates: [],
        text: "A real, human, participant in the battle. Each player has a Collection, a Slammer, a Health Stack, and Power Stack, a Prize Stack, and a Bench Stack.",
        notes: []
    },
    {
        name: "Pokémon Slammer",
        alternates: ["Pokemon Slammer"],
        text: "A slammer that has a Resistance Type, Power Type and a Weakness Type (left, middle, and right sides of the puck). Can use Slammer Abilities.",
        notes: ["A list of these Slammers and their rules are in the PuckDex."]
    },
    {
        name: "Power Stack",
        alternates: [],
        text: "Pucks that are out of play that can be used for Special Rules. Each player owns a Power Stack.",
        notes: ["This is analogous to your \"hand\" in a card game."]
    },
    {
        name: "Previous Player",
        alternates: [],
        text: "The player that is counterclockwise to the current player or you.",
        notes: ["For example, if you are playing against one other player, and your Pokemon Slammer has a Slammer Ability that refers to the Previous Player, it always refers to you. It does not mean you are the Previous Player while your opponent is taking their turn."]
    },
    {
        name: "Prize Stack",
        alternates: [],
        text: "Pucks that have been removed from play and cannot be used for Special Rules. Each player has a Prize Stack.",
        notes: ["This is analogous to your \"discard pile\" in a card game."]
    },
    {
        name: "Puck",
        alternates: [],
        text: "A plastic or paper puck 41.37mm in diameter and at least 1.6mm thick, with a face side that has a graphic, and a back side that is blank or has a serial number on it.",
        notes: ["If puck is reccessed, no part of the reccess can be deeper than 0.8mm, the recess must be more than at least 1mm from the oute edge of the puck, and cannot cover more than half the surface area of the puck face.", "All pucks must be able to lay flat. If a puck's entire face cannot touch the flat bottom surface of the Arena, it cannot be selected as a Legal Puck for any Battle."]
    },
    {
        name: "Restack",
        alternates: [],
        text: "Put all pucks back onto the Arena Stack, with the pucks closest to the center of the Arena on the bottom and the farthest away from the center of the Arena on top. Pucks that were moved into the Arena by players then go on top in order of choosing of the Current Player.",
        notes: []
    },
    {
        name: "Set aside",
        alternates: [],
        text: "To move to a new, temporary stack that are out of the battle.",
        notes: ["If the rules do not specify, assume the new stack is a face up stack."]
    },
    {
        name: "Slammer",
        alternates: [],
        text: "The puck the player has chosen to make their throws with. In addition to other puck requirements, Slammer pucks may be paper, plastic, or metal, and be up to 72mm in thickness. No slammer may be heavier than 30 grams in weight.",
        notes: ["Note that some Slammers may qualify as pucks and be used in the battle for other purposes."]
    },
    {
        name: "Special Rule",
        alternates: [],
        text: "A special rule that overrides the normal rules of the battle.",
        notes: ["These most frequently come from Item, Trainer, and Pokemon pucks."]
    },
    {
        name: "Stack Size",
        alternates: ["Max", "Max Size"],
        text: "The maximum number of pucks that go into a given stack.",
        notes: ["The most common example of this is the Arena Stack Size and each player's Health Stack Size", "This does not refer to the current number of pucks in a given stack."]
    },
    {
        name: "Stage",
        alternates: [],
        text: "The Setup, Loop, or End of an Adventure or Battle.",
        notes: []
    },
    {
        name: "Stack",
        alternates: [],
        text: "A pile of completely concentric pucks seperated from other pucks for different purposes. Stacks may be face up or face down. Face up stacks may be viewed and arranged by their owner at any time. Face down stacks may not be viewed or rearranged. Some stacks have a Stack Size.",
        notes: []
    },
    {
        name: "Status",
        alternates: [],
        text: "A sub-category of Special Rules that represents the condition of the player's Pokémon Slammer.",
        notes: ["A list of Statuses can be found in the PuckCenter."]
    },
    {
        name: "Throw",
        alternates: [],
        text: "An attempt to hit the Arena Stack with your slammer.",
        notes: ["A single throw is not an attack. A throw does not neccesitate picking up or restacking."]
    },
    {
        name: "Top Off",
        alternates: ["topoff", "topping off", "tops off", "topped off"],
        text: "Move a puck from one stack to another until the number of pucks in the second pile equals its Stack Size. If this happens, you have succeeded in topping off. If you cannot, because the first stack has no pucks remaining in it, then the top off has failed.",
        notes: ["In the rules, it will state which stack to move pucks to and from what stack.", "Because the most common instance of topping off is when the Current Player tops off the Arena Stack from their Health Stack, this phase of the game is frequently jsut referred to as \"topping off\". If the rule does not specify, assume this to be the case."]
    },
    {
        name: "Turn Order",
        alternates: [],
        text: "The order in which players take their turns (clockwise from the first player).",
        notes: []
    }
]