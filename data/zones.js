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
        description: "The town's reputation as the home of the Professor Oaks Lab is due to its waterfront location.",
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
        description: "The House of Bill is a modest structure on Route 25 northeast of Kanto.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Eevee"]
    },
    {
        name: "Celadon Department Store",
        description: "The largest retailer in Kanto provides a vast selection of goods, some of which are not found in standard Pokémarts.",
        type: "location",
        mart: ["Focus Energy", "Full Heal", "Greatball", "Power Stone", "Switch"],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Celadon Game Corner",
        description: "A game corner that is located in Celadon City's southeast.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cerulean Cave",
        description: "The Cerulean Cave, a huge 4-story cave in Cerulean City, is only open to players who have conquered the Elite Four of Kanto.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Diglett's Cave",
        description: "From Route 11 to Route 2, a tunnel in Kanto provides an alternate route.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Indigo Plateau",
        description: "Pokémon Trainers who have earned badges arrive at this last location to face the Elite Four after defeating all eight of Kanto's gym leaders.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Mt. Moon",
        description: "The mountain is a mythical location famous for its regular meteor falls known as Moon Stones, which are fragments of stars.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Jigglypuff"]
    },
    {
        name: "Pokemon Mansion",
        description: "Cinnabar Island's Pokémon Mansion, a four-story structure, is where you can find the secret key that unlocks Cinnabar Gym.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Pokemon Stadium",
        description: "Intense Pokémon bouts can be witnessed by trainers right here in the arena.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Pokemon Tower",
        description: "Many people pay their condolences every day at the various graves of deceased Pokémon located in the seven-story edifice.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Gastly"]
    },
    {
        name: "Power Plant",
        description: "Power plants, or structures that produce and transmit electrical power, are frequently home to electric-type Pokémon.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Rock Tunnel",
        description: "To get to Lavender Town, which is situated in the center of Route 10 in Kanto, players must travel via the Rock Tunnel.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Onix"]
    },
    {
        name: "Safari Zone",
        description: "As well as acting as a sanctuary and providing access to a timed game, the site is home to unique, rare Pokémon that are not present anywhere else.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Scyther"]
    },
    {
        name: "Seafoam Islands",
        description: "Two islands separate Route 20 into two independent sections.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Silph Co. Headquarters",
        description: "The tallest structure in Saffron City serves as the covert headquarters of Team Rocket.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Silph Scope"],
        pkmn: []
    },
    {
        name: "Snorlax Blockade",
        description: "You must use the Pok Flute to awaken Snorlax since he is blocking your route.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Snorlax"]
    },
    {
        name: "The Dojo",
        description: "An establishment in Saffron City that is close to the Saffron City Gym.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Focus Sash"],
        pkmn: []
    },
    {
        name: "The SS Anne",
        description: "There are many Pokémon trainers on board this opulent cruise ship, including several gentlemen and sailors.",
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
        description: " Route 2 passes through Viridian Forest, which has open north and south gates and is positioned halfway between Viridian City and Pewter City.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Pikachu"]
    }
]