const Connections = [
    {
        zones: ["Route 19", "Route 20"], // Where to?
        direction: "both", // 'up' for [0] into [1], 'down' for [1] into [0], or 'both'
        req: ["surf", "water type pokemon"], // which requirements do they need? (and)
        alt: [] // failing that, what else could they have? (or)
    },
    {
        zones: ["Fuschia City", "Route 19"],
        direction: "both",
        req: [], // A normal route has these empty req/alt arrays
        alt: []
    },
    {
        zones: ["The SS Anne", "Fuschia City"],
        direction: "both",
        req: ["SS Anne Ticket"], // Item required
        alt: []
    },
    {
        zones: ["Route 17-18", "Fuschia City"],
        direction: "both",
        req: ["surf", "water type pokemon"], // You can use this route with surf AND water type...
        alt: ["bike"] // ... OR a bike
    },
    {
        zones: ["Indigo Plateau", "Victory Road"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Victory Road", "Route 22-23"],
        direction: "both",
        req: ["surf", "water type pokemon", "dig", "fighting type pokemon", "cut", "grass type pokemon", "8 badges"],
        alt: []
    },
    {
        zones: ["Route 22-23", "Viridian City"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Viridian City", "Route 2"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Route 2", "Viridian Forest"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Route 2", "Pewter City"],
        direction: "both",
        req: ["cut", "grass type pokemon"],
        alt: []
    },
    {
        zones: ["Viridian Forest", "Pewter City"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Pewter City", "Route 3"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Route 3", "Mt. Moon"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Mt. Moon", "Route 4"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Route 3", "Route 4"],
        direction: "both",
        req: ["dig", "fighting type pokemon"],
        alt: []
    },
    {
        zones: ["Route 4", "Cerulean Cave"],
        direction: "both",
        req: ["defeated elite 4"],
        alt: []
    },
    {
        zones: ["Viridian City", "Route 1"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Route 1", "Pallet Town"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Pallet Town", "Route 21"],
        direction: "both",
        req: ["surf", "water type pokemon"],
        alt: []
    },
    {
        zones: ["Cinnabar Island", "Pokemon Mansion"],
        direction: "both",
        req: [],
        alt: []
    },
    {
        zones: ["Cinnabar Island", "Route 20"],
        direction: "both",
        req: ["surf", "water type pokemon"],
        alt: []
    },
    {
        zones: ["Route 20", "Seafoam Islands"],
        direction: "both",
        req: ["surf", "water type pokemon"],
        alt: []
    }
]