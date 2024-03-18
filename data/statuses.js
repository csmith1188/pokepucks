const Statuses = [
    {
        name: "Critical",
        description: "Your Pokemon is hanging on by a thread. They are about to lose the battle.",
        text: "Your slammer cannot gain other Statuses. If your slammer has other Statuses, it loses them. During the next player's turn, treat the Arena Stack Size as being half its normal size.",
        notes: []
    },
    {
        name: "Switch Sick",
        description: "Your Pokemon is still disoriented from coming out of its Pokeball.",
        text: "After Counting Attacks on your turn, reduce the number of attacks to 1. In your End of Turn phase, this slammer loses this Status.",
        notes: []
    },
    {
        name: "Paralyzed",
        description: "Your Pokemon can not move for a few seconds.",
        text: "After determining the number of attackw you can make, reduce the number of attacks by 1, to a minimum of 1.",
        notes: []
    },
    {
        name: "Sleep",
        description: "Your Pokemon was put to sleep.",
        text: "After determining the number of attacks you can make, reduce the number of attacks to 1. If you flip any pucks in your turn, do nut pick up. Instead, your slammer loses Slep status.",
        notes: []
    },
    {
        name: "Poisoned",
        description: "Your Pokemon's health is deteriorating, your Pokemon was poisoned.",
        text: "When you top-off, treat the Arenas stack's max size as being 1 more.",
        notes: []
    },
    {
        name: "Confused",
        description: "Your Pokemon does not know whats going on anymore.",
        text: "After making all of your attacks on your turn, if you did not pick up any pucks, you must move 1 puck from your Health Stack to the Arena Stack.",
        notes: []
    }
]