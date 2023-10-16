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
        description: "Connects Pewter City to Mt. Moon, or to Route 4 threw a tunnel.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 4",
        description: "Connects to Route 3 though a tunnel, travel to Cerulean City, defeat the Elite 4 to enter Cerulean Cave, or Travel to Mt. Moon.",
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
        description: "Connects Cerulean City to Rock tunnel, travel though a tunnel to get to lavender Town, or cross the ocean to the Power Plant.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Machop"]
    },
    {
        name: "Route 11",
        description: "Cut though Route 11 to Vermillion City, or use a PokeFlute to go to Routes 12, 13, 14, and 15.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 12",
        description: "Connects to Lavender Town, or use the PokéFlute to travel to Routes 11/13/14 and or 15.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["Fishing Rod"],
        pkmn: []
    },
    {
        name: "Route 13-15",
        description: "Connects to Fuschia City, or use the PokéFlute to travel to Routes 11 and or 12.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 16",
        description: "Connects to Celadon city, use Surf, or cycle with a Bike to Routes 17 and 18.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: ["HM02 Fly"],
        pkmn: []
    },
    {
        name: "Route 17-18",
        description: "Surf or cycle with a Bike to Fuschia City, or to Route 16.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 19",
        description: "Connects to Fuschia City, Surf to Route 20, or use a SS Anne Ticket to go to The SS Anne Docks.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 20",
        description: "Surf to Route 19, surf to the Seafoam Islands, or Surf to Cinnabar Island.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Lapras"]
    },
    {
        name: "Route 21",
        description: "Surf to Pallet Town, or to Cinnabar Island.",
        type: "route",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Route 22-23",
        description: "Connects to Viridian City, or Route 22/23 where only the most experienced trainers may go to enter Victory road.",
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
        description: "A quiet small town near the water in Kanto. It houses the Pokémon Professor Oak's Lab know for researching Pokémon!",
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
        description: "Bill, the renowned Pokémon Data Scientists, known for his invention of the Pokémon Box system, lives quietly in a luxury home in the north of Kanto.",
        type: "location",
        mart: [],
        poi: ["Bill"],
        discoveries: [],
        pkmn: ["Eevee"]
    },
    {
        name: "Celadon Department Store",
        description: "The largest retailer in Kanto provideing a vast selection of goods, some of which are not found in standard Pokémarts.",
        type: "location",
        mart: ["Focus Energy", "Full Heal", "Greatball", "Power Stone", "Switch"],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Celadon Game Corner",
        description: "A game corner that is located in Celadon City's southeast. Sightings of shady individuals have been entering and leaving the corner, Police haven't tracked down the source but advise caution",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Cerulean Cave",
        description: "The Cerulean Cave, a powerful psychic aura envelopes the cavern. Champion are you the challenge met?",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Diglett's Cave",
        description: "A tunnel in Kanto full of Diglett! Convenietly a Electric type gym was placed next to it!.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Indigo Plateau",
        description: "Pokémon Trainers who have faithfully earned 8 badges have the oppertunity to challenge the Elite 4. You have reached the culmination of your journey be proud Trainer theirs only rockbottom from here.",
        type: "city",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Mt. Moon",
        description: "The mountain is a mystical mountain famous for its abundant meteorites known as Moon Stones, which are said to be fragments of stars.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Jigglypuff"]
    },
    {
        name: "Pokemon Mansion",
        description: "Cinnabar Island's Pokémon Mansion, a delapatated structure, what mysteries hide within.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Pokemon Tower",
        description: "Many people pay their condolences every day at the various graves of deceased Pokémon located in the seven-story edifice. Let's pray you won't need to anytime soon...",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Gastly"]
    },
    {
        name: "Power Plant",
        description: "A Power plant that produced and transmited electrical power, Electric type Pokémon seem to roam the rubble now.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Rock Tunnel",
        description: "Rock Tunnel located in route 10 leads to Lavender town. Various Rock type Pokémon reside in the tunnels darkness.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Onix"]
    },
    {
        name: "Rocket Hideout",
        description: "WHATS THIS!!! TEAM ROCKET!!! Quickly to their hideout now!",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Safari Zone",
        description: "As well as acting as a sanctuary and providing access to a catching game, the site is home to unique, rare Pokémon that are not present anywhere else.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Scyther"]
    },
    {
        name: "Seafoam Islands",
        description: "Two islands located in route 20. Many water types make their home there.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: []
    },
    {
        name: "Silph Co. Headquarters",
        description: "Headquarters of the leading manufacturer of Pokémon technology! Know for creating some of the most commercially used Poké Balls along side technical machines.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Silph Scope"],
        pkmn: []
    },
    {
        name: "Snorlax Blockade",
        description: "Oh no Snorlax is blocking the way! Rumor has it that snorlax once woke up to the sound of a special flute.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Snorlax"]
    },
    {
        name: "The Dojo",
        description: "ONE! TWO!! THREE!!! KNOCKOUT! train with your fellow trainer's Fighting types, Masters of the martial arts!",
        type: "location",
        mart: [],
        poi: [],
        discoveries: ["Focus Sash"],
        pkmn: []
    },
    {
        name: "The SS Anne",
        description: "The cruse of many Kantonian dreams, now 99% Gyarados proof! Hopefully...",
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
        description: "A small dense forest home to many Bug type Pokémon! Rumor has it theirs a special yellow mouse waiting to be captured.",
        type: "location",
        mart: [],
        poi: [],
        discoveries: [],
        pkmn: ["Pikachu"]
    }
]