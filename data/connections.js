/*
'req' are the things you need before moving
'alt' are the alternatives if you don't have the requirements.

Use Cut with a pokemon with the grass energy type
Fly is a movement option that does not require a pokemnon
Use Surf with a pokemon with the water energy type
Use Dig with a pokemon with the fighting energy type

alternatives are stated on the zone map

use 'both' for all direction fields unless directed otherwise
*/
const Connections = [
    //Matthew's Corrections (AKA- TheCyanHusky)
    //zone titles have capitals; requirements and alternatives do not
    {
        zones: ["Route 19", "Route 20"], // Where to?
        direction: "both", // 'up' for [0] into [1], 'down' for [1] into [0], or 'both'
        req: ["surf", "water type pokemon"] // which requirements do they need? (and)
        // failing that, what else could they have? (or)
    },
    {
        zones: ["Fuschia City", "Route 19"],
        direction: "both",
        req: [] // A normal route has these empty req/alt arrays
    },
    {
        zones: ["The SS Anne", "Route 19"],
        direction: "both",
        req: ["ss anne ticket"] // Item required
    },
    {
        zones: ["Route 17-18", "Fuschia City"],
        direction: "both",
        req: ["surf", "water type pokemon"] // You can use this route with surf AND water type...
    },
    {
        zones: ["Route 17-18", "Fuschia City"],
        direction: "both",
        req: ["bike"] // You can use this route with surf AND water type...
    },
    {
        zones: ["Safari Zone", "Fuchsia City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 13-15", "Fuchsia City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Bill's House", "Route 24-25"],
        direction: "both",
        req: []
    },
    {
        zones: ["Snorlax Blockade", "Route 13-15"],
        direction: "both",
        req: ["pokeflute"]
    },
    {
        zones: ["Route 12", "Snorlax Blockade"],
        direction: "both",
        req: ["pokeflute"]
    },
    {
        zones: ["Route 11", "Snorlax Blockade"],
        direction: "both",
        req: ["pokeflute"]
    },
    {
        zones: ["Lavender Town", "Route 12"],
        direction: "both",
        req: []
    },
    {
        zones: ["Pokemon Tower", "Lavender Town"],
        direction: "both",
        req: ["silph scope"]
    },
    {
        zones: ["Rock Tunnel", "Lavender Town"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 9-10", "Lavender Town"],
        direction: "both",
        req: ["dig", "fighting type pokemon"]
    },
    {
        zones: ["Route 7", "Lavender Town"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 9-10", "Rock Tunnel"],
        direction: "both",
        req: []
    },
    {
        zones: ["Power Plant", "Route 9-10"],
        direction: "both",
        req: ["surf", "water type pokemon"]
    },
    {
        zones: ["Cerulean City", "Route 9-10"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 24-25", "Cerulean City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 4", "Cerulean City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 5", "Cerulean City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Babysitter", "Route 5"],
        direction: "both",
        req: []
    },
    {
        zones: ["Saffron City", "Route 5"],
        direction: "both",
        req: []
    },
    {
        zones: ["Silph Co. Headquarters", "Saffron City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 7", "Saffron City"],
        direction: "both",
        req: []
    },
    {
        zones: ["The Dojo", "Saffron City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 6", "Saffron City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 8", "Saffron City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Vermillion City", "Route 6"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 11", "Vermillion City"],
        direction: "both",
        req: ["cut", "grass type pokemon"]
    },
    {
        zones: ["Diglett's Cave", "Vermillion City"],
        direction: "both",
        req: []
    },
    {
        zones: ["The SS Anne", "Vermillion City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Celadon City", "Route 8"],
        direction: "both",
        req: []
    },
    {
        zones: ["Celadon Department Store", "Celadon City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Celadon Game Corner", "Celadon City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Rocket Hideout", "Celadon Game Corner"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 16", "Celadon City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 17-18", "Route 16"],
        direction: "both",
        req: ["surf", "water type pokemon"]
    },
    {
        zones: ["Route 17-18", "Route 16"],
        direction: "both",
        req: ["bike"]
    },
    //Jordan's Work
    {
        zones: ["Indigo Plateau", "Victory Road"],
        direction: "both",
        req: []
    },
    {
        zones: ["Victory Road", "Route 22-23"],
        direction: "both",
        req: ["surf", "water type pokemon", "dig", "fighting type pokemon", "cut", "grass type pokemon", "8 badges"]
    },
    {
        zones: ["Route 22-23", "Viridian City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Viridian City", "Route 2"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 2", "Viridian Forest"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 2", "Pewter City"],
        direction: "both",
        req: ["cut", "grass type pokemon"]
    },
    {
        zones: ["Viridian Forest", "Pewter City"],
        direction: "both",
        req: []
    },
    {
        zones: ["Pewter City", "Route 3"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 3", "Mt. Moon"],
        direction: "both",
        req: []
    },
    {
        zones: ["Mt. Moon", "Route 4"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 3", "Route 4"],
        direction: "both",
        req: ["dig", "fighting type pokemon"]
    },
    {
        zones: ["Route 4", "Cerulean Cave"],
        direction: "both",
        req: ["defeated elite 4"]
    },
    {
        zones: ["Viridian City", "Route 1"],
        direction: "both",
        req: []
    },
    {
        zones: ["Route 1", "Pallet Town"],
        direction: "both",
        req: []
    },
    {
        zones: ["Pallet Town", "Route 21"],
        direction: "both",
        req: ["surf", "water type pokemon"]
    },
    {
        zones: ["Cinnabar Island", "Pokemon Mansion"],
        direction: "both",
        req: []
    },
    {
        zones: ["Cinnabar Island", "Route 20"],
        direction: "both",
        req: ["surf", "water type pokemon"]
    },
    {
        zones: ["Route 20", "Seafoam Islands"],
        direction: "both",
        req: ["surf", "water type pokemon"]
    }
]

//Babysitter and Route 24-25 dont work or go anywhere(?)