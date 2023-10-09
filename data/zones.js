const Zones = [
    {
        name: "Route 1",
        description: "",
        type: "route", // route, city, location
        mart: [], // Additional items sold in the PokeMart
        poi: [], // Points of interests, such as Gyms
        discoveries: [], // Pucks that can be found with a discovery action
        pkmn: ["Pidgeot"] // Pokemon Slammers that can be caught
    },
    {
        name: "Route 2",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 3",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 4",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 5",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Meowth"]
    },
    {
        name: "Route 6",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 7",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 8",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 9-10",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Machop"]
    },
    {
        name: "Route 11",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 12",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["Fishing Rod"],
        pkmn: []
    },
    {
        name: "Route 13-15",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 16",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["HM02 Fly"],
        pkmn: []
    },
    {
        name: "Route 17-18",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 19",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 20",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Lapras"]
    },
    {
        name: "Route 21",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 22-23",
        description: "",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Celadon City",
        description: "",
        type: "city",
        mart: [],
        poi: ["Rainbow Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cerulean City",
        description: "",
        type: "city",
        mart: ["Bike", "Switch"],
        poi: ["Cascade Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cinnabar Island",
        description: "",
        type: "city",
        mart: ["Full Heal", "Ultraball"],
        poi: ["Volcano Badge Gym", "Pokegenics Lab"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Fuschia City",
        description: "A city celebrated for its connection to the wilderness around it. Known around the world for its famous Safari Zone.",
        type: "city",
        mart: ["Full Heal", "Ultraball", "Focus Energy"],
        poi: ["Soul Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Lavender Town",
        description: "",
        type: "city",
        mart: ["Great Ball", "Switch", "Focus Energy"],
        poi: [],
        discoveries: ["PokeFlute"],
        pkmn: []
    },
    {
        name: "Pallet Town",
        description: "",
        type: "location",
        mart: [],
        poi: ["Homesweet", "Professor Oak's Lab"],
        discoveries: ["Berry"],
        pkmn: []
    },
    {
        name: "Pewter City",
        description: "",
        type: "city",
        mart: ["Switch", "Energy"],
        poi: ["Boulder Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Saffron City",
        description: "",
        type: "city",
        mart: ["Switch", "Energy", "Greatball"],
        poi: ["Marsh Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Vermillion City",
        description: "",
        type: "city",
        mart: ["Switch", "Energy", "Greatball", "Berry"],
        poi: ["Thunder Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Viridian City",
        description: "",
        type: "city",
        mart: ["Berry", "Switch", "Energy"],
        poi: ["Earth Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Bill's House",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Eevee"]
    },
    {
        name: "Celadon Department Store",
        description: "",
        type: "location",
        mart: ["Focus Energy", "Full Heal", "Greatball", "Power Stone", "Switch"],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Celadon Game Corner",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cerulean Cave",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Diglett's Cave",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Indigo Plateau",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Mt. Moon",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Jigglypuff"]
    },
    {
        name: "Pokemon Mansion",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Pokemon Stadium",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Pokemon Tower",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Gastly"]
    },
    {
        name: "Power Plant",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Rock Tunnel",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Onix"]
    },
    {
        name: "Safari Zone",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Scyther"]
    },
    {
        name: "Seafoam Islands",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Silph Co. Headquarters",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Silph Scope"],
        pkmn: []
    },
    {
        name: "Snorlax Blockade",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Snorlax"]
    },
    {
        name: "The Dojo",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Focus Sash"],
        pkmn: []
    },
    {
        name: "The SS Anne",
        description: "",
        type: "location",
        mart: [],
        poi: ["SS Anne"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Victory Road",
        description: "",
        type: "city",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Viridian Forest",
        description: "",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Pikachu"]
    }
]