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
    }
]