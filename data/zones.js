const Zones = [
    {
        name: "Route 1",
        description: "Connects Pallet Town to Viridian City, or cross the ocean to Route 21.",
        type: "route", // route, city, location
        mart: [], // Additional items sold in the PokeMart
        poi: [], // Points of interests, such as Gyms
        discoveries: [], // Pucks that can be found with a discovery action
        pkmn: ["Pidgeot"] // Pokemon Slammers that can be caught
    },
    {
        name: "Route 2",
        description: "Connects Viridian Forest to Viridian City, or cut from Route 2 to Pewter City.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 3",
        description: "Connects Pawter City to Mt. Moon, or to Route 4 threw a tunnel.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 4",
        description: "Connects to Route 3 threw a tunnel, or travel to Cerulean City, or defeat Elite 4 to travel to Cerulean Cave, or Travel to Mt. Moon.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 5",
        description: "Connects Cerulean City to Saffron City, or go to the Babysitter.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Meowth"]
    },
    {
        name: "Route 6",
        description: "Connects Saffron City to Vermillion City.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 7",
        description: "Connects Saffron City to Lavender Town.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 8",
        description: "Connects Saffron City to Celadon City",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 9-10",
        description: "Connects Cerulean City to Rock tunnel, or travel threw a tunnel to get to lavender Town, or cross the ocean to the Pwer Plant.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Machop"]
    },
    {
        name: "Route 11",
        description: "Cut threw Route 11 to Vermillion City, or use a PokeFlute to go to Routes 12/13/14 and or 15.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 12",
        description: "Connects to Lavender Town, or use PoekFlute to travel to Routes 11/13/14 and or 15.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["Fishing Rod"],
        pkmn: []
    },
    {
        name: "Route 13-15",
        description: "Connects to Fuschia City, or use a PokeFlute to travel to Routes 11 and or 12.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 16",
        description: "Connects to Celadon city, or Surf/Bike to Routes 17 and or 18.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["HM02 Fly"],
        pkmn: []
    },
    {
        name: "Route 17-18",
        description: "Surf/Bike to Fuschia City, or Surf/Bike to Route 16.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 19",
        description: "Connects to Fuschia City, or Surf to Route 20, or use a SS Anne Ticket to go to The SS Anne Docks.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 20",
        description: "Surf to Route 19, or surf to Seafoam Islands, or Surf to Cinnabar Island.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Lapras"]
    },
    {
        name: "Route 21",
        description: "Surf to Pallet Town, or Surf to Cinnabar Island.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 22-23",
        description: "Connects to Viridian City, or Only the most experienced trainers may go from Route 22/23 to Victory road.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Celadon City",
        description: "Celadon City home to of the Grass type specialists Erika make sure to bring Fire types to dispatch her fauna! Celadon City is home to the Celadon Department Store and the Celadon Game Corner, rumor has it there’s been some shady people walking in and out of the Game Corner; Officer Jenny has asked Trainers to be wary and on guard around the Game Corner, what’s it hiding?",
        type: "city",
        mart: [],
        poi: ["Rainbow Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cerulean City",
        description: "Cerulean City home of the Water type specialists Misty make sure to bring Electric types and give her a controlled shock! Their are rumors of a professor to the north of Cerulean, along with multiple towns people reported to have heard whispers in their minds of a cave that only a Champion could brave!",
        type: "city",
        mart: ["Bike", "Switch"],
        poi: ["Cascade Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cinnabar Island",
        description: "Cinnabar Island home of the Fire type specialists Blaine make sure to bring Water types and a 'Burn Heal' and wash him away! Cinnabar is also home to an abandoned Mansion no one dares go inside, rumor has it with a special fossil someone could give you a special prehistoric Pokémon.",
        type: "city",
        mart: ["Full Heal", "Ultraball"],
        poi: ["Volcano Badge Gym", "Pokegenics Lab"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Fuschia City",
        description: "Fuschia City home of the Poisen type specialists Koga make sure to bring Ground types to ground him and even the field! Also known around the world for its famous Safari Zone, rumor has it a rare Pokémon lives there.",
        type: "city",
        mart: ["Full Heal", "Ultraball", "Focus Energy", "Berry"],
        poi: ["Soul Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Lavender Town",
        description: "Lavender Town home to the Pokémon Tower as a trainer going to the tower could be an adventurous occasion or a disheartening one, Pokémon Tower is a grave dedicated to our beloved Pokémon companions. Rumor has it a Pokémon who was forcibly parted from something it held dear haunts the tower, if only there was a way to show the creatures true form?",
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
        description: "Pewter City home of the Rock type specialists Brock make sure to bring Water types to rain on his parade! Pewter City is also home to the Pewter Museum of Science.",
        type: "city",
        mart: ["Switch", "Energy"],
        poi: ["Boulder Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Saffron City",
        description: "Saffron City home of the Psychic type specialists Sabrina make sure to bring Dark types and dip her mind and clairvoyance in darkness! Saffron City is also home to Silph Co and the Fighting dojo, rumors say Silph Co has a device that can see the true form of ghosts.",
        type: "city",
        mart: ["Switch", "Energy", "Greatball"],
        poi: ["Marsh Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Vermillion City",
        description: "Vermillion City home of the Electric type specialist Lt. Surge make sure to bring Ground types and ground his electric personality! Vermillion City is right next to Diglett cave conveniently full of the Ground type Diglett, Vermillion also hosts the S.S. Anne! Rumor has it that with the right Pokémon one could take a shortcut to Viridian Forest.",
        type: "city",
        mart: ["Switch", "Energy", "Greatball", "Berry"],
        poi: ["Thunder Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Viridian City",
        description: "Viridian City hosts the eighth Pokémon League Gym whos gym leader has mysteriously disappeared. Viridian also hosts the route Trainers need to take if they wish to access Victory Road!",
        type: "city",
        mart: ["Berry", "Switch", "Energy"],
        poi: ["Earth Badge Gym"],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Bill's House",
        description: "Bill, the renown Pokemon Data Scientists, known for his invention of the Pokemon Box system, lives quietly in a luxury home in the north of Kanto.",
        type: "location",
        mart: [],
        poi: ["Bill"],
        discoveries: [],
        pkmn: []
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
        type: "city",
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
        name: "Rocket Hideout",
        description: "A hidden base in the basement of the Celadon Game Corner where Team Rocket organizes their operations.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
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
        description: "So, you've made it huh? Test your might on Victory Road if you can make it past this challenge nothing can stand between you and the Indigo Plateau, May only the brave travel this road.",
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