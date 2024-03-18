// Pokedex: Search the PokePucks data files and print the information
//
// Use printTerms() as an example of the design philosophy

/******Put into your HTML body for an example*******\
 
<div id="content"></div>

<script src="data/connections.js"></script>
<script src="data/battles.js"></script>
<script src="data/mart.js"></script>
<script src="data/pucks.js"></script>
<script src="data/slammers.js"></script>
<script src="data/statuses.js"></script>
<script src="data/terms.js"></script>
<script src="data/textData.js"></script>
<script src="data/zones.js"></script>

<script src="pokedex.js"></script>

<script>
    printSection();
    printBattle();
    printTerm();
    printPuck();
    printSlammer();
    //zones
    //statuses
</script> 

\************Add a CSS style************************/

// End Header

// Create a contentBox object from the content div layer
var contentBox = document.getElementById("content");
// Empty its contents
contentBox.innerHTML = "";


// print from textData
// sectionToFind: which key in textData to print (false for all)
// erase: clear the previous content (true/false)
function printSection(sectionToFind, erase) {
    // Clear the contentBox if they chose to erase
    if (erase)
        contentBox.innerHTML = "";

    //
    var sectPrint = sectionToFind;
    if (!sectionToFind)
        sectPrint = "Introduction";
    //Intro Paragraphs
    for (const point of textData[sectPrint]) {
        let newHeader = document.createElement("h1");
        newHeader.innerText = point.header;
        contentBox.appendChild(newHeader);
        if (point.date) {
            let newDate = document.createElement("p");
            newDate.classList.add('rule');
            contentBox.appendChild(newDate);
            let date = new Date(point.date);
            console.log(date);
            newDate.innerText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
        let splitPara = point.body.split(/\r?\n|\r|\n/g);
        for (const para of splitPara) {
            let newPara = document.createElement("p");
            newPara.innerText = para;
            contentBox.appendChild(newPara);
        }
        if (point.changes) {
            for (const change of point.changes) {
                let newChangeHeader = document.createElement("h3");
                contentBox.appendChild(newChangeHeader);
                newChangeHeader.innerText = change.rule;
                for (const desc of change.description) {
                    splitPara = desc.split(/\r?\n|\r|\n/g);
                    for (const para of splitPara) {
                        let newPara = document.createElement("p");
                        newPara.classList.add('desc');
                        newPara.innerText = para;
                        contentBox.appendChild(newPara);
                    }
                }
                splitPara = change.text.split(/\r?\n|\r|\n/g);
                for (const para of splitPara) {
                    let newPara = document.createElement("p");
                    newPara.classList.add('rule');
                    newPara.innerText = para;
                    contentBox.appendChild(newPara);
                }
                if (change.notes) {
                    let newNoteList = document.createElement("ul");
                    contentBox.appendChild(newNoteList);
                    for (const note of change.notes) {
                        let newBullet = document.createElement("li");
                        newBullet.innerText = note;
                        newNoteList.appendChild(newBullet);
                    }
                }
            }
        }
    } //End Intro
}

// print from Battles
// battleToFind: which key in Battles to print (false for all)
// erase: clear the previous content (true/false)
function printBattle(battleToFind, erase) {
    if (erase)
        contentBox.innerHTML = "";

    let BattlesToSearch = Battles;

    // If a battle was provided, find it and put it in a list
    if (battleToFind)
        BattlesToSearch = [Battles.find((battleSearch) => battleSearch.name == battleToFind)];
    // If you couldn't find that battle, revert back to all
    if (!BattlesToSearch)
        BattlesToSearch = Battles;

    //Battles
    let battleHeader = document.createElement("h1");
    battleHeader.innerText = "Battles";
    contentBox.appendChild(battleHeader);

    for (const mode of Battles) {

        //Battle Name
        let modeHeader = document.createElement("h2");
        modeHeader.innerText = mode.name;
        contentBox.appendChild(modeHeader);

        //Description
        let modeDesc = document.createElement("p");
        modeDesc.innerText = mode.description;
        contentBox.appendChild(modeDesc);

        // General Rules
        //Header
        generalHeader = document.createElement("h3");
        generalHeader.innerText = "General Rules";
        contentBox.appendChild(generalHeader);

        let generalList = document.createElement("ol");
        contentBox.appendChild(generalList);
        //For each Rule
        for (const rule of mode.general) {
            let newRule = document.createElement("li");
            newRule.classList.add(`rule`);
            newRule.innerText = rule.text;
            generalList.appendChild(newRule);
            //For each note
            if (rule.notes.length) {
                let notesList = document.createElement("ul");
                newRule.appendChild(notesList);
                for (const note of rule.notes) {
                    let newNote = document.createElement("li");
                    newNote.classList.add(`note`)
                    newNote.innerText = note;
                    notesList.appendChild(newNote);
                }
            }
        }

        //For each rule stage
        for (const stage of ["setup", "loop", "end"]) {
            //Header
            stageHeader = document.createElement("h3");
            stageHeader.innerText = stage;
            contentBox.appendChild(stageHeader);

            let stageList = document.createElement("ol");
            contentBox.appendChild(stageList);
            //For each Rule
            for (const rule of mode[stage]) {
                let newRule = document.createElement("li");
                newRule.classList.add(`rule`)
                newRule.innerText = rule.text;

                //For each description
                if (rule.description.length) {
                    let desList = document.createElement("ul");
                    newRule.appendChild(desList);
                    for (const desc of rule.description) {
                        let newDesc = document.createElement("li");
                        newDesc.innerText = desc;
                        desList.appendChild(newDesc);
                    }
                }
                //For each note
                if (rule.notes.length) {
                    let notesList = document.createElement("ul");
                    newRule.appendChild(notesList);
                    for (const note of rule.notes) {
                        let newNote = document.createElement("li");
                        newNote.classList.add(`note`)
                        newNote.innerText = note;
                        notesList.appendChild(newNote);
                    }
                }
                stageList.appendChild(newRule);
            }
        }
    } //End Game modes
}

// print from Terms
// termToFind: which key in Terms to print (false for all)
// erase: clear the previous content (true/false)
function printTerm(termToFind, erase) {
    // Clear the contentBox if the user chose to erase
    if (erase)
        contentBox.innerHTML = "";

    // Declare a list of Terms to search through
    let TermsToSearch = [];

    // If a term was provided, find it and put it in a list by itself
    if (termToFind)
        TermsToSearch = [Terms.find((termSearch) => termSearch.name === termToFind)];
    // If you couldn't find that term, just print everything
    if (!TermsToSearch.length)
        TermsToSearch = Terms

    //Terms
    let titleHeader = document.createElement("h1"); // <h1></h1>
    titleHeader.innerText = "Terms"; // <h1>Terms</h1>
    contentBox.appendChild(titleHeader); // Put it in the contentBox

    for (const term of TermsToSearch) { // Repeat for every term in the list

        //Term Name
        let termHeader = document.createElement("h3"); // <h3></h3>
        termHeader.innerText = term.name; // <h3>the term's name</h3>
        contentBox.appendChild(termHeader); // Put it in the contentBox

        // This text/notes combo is pretty typical for all rules in the game
        // The format typically goes:
        //  {
        //      name: "Name of the rule"
        //      text: "One String with \n if you need a new paragraph.",
        //      notes: ["an arry","with multiple notes"]
        //  }
        //text
        let termText = document.createElement("p"); // <p></p>
        termText.innerText = term.text; // <p>the term's rule text</p>
        contentBox.appendChild(termText); // Put it in the contentBox
        //notes
        if (term.notes.length) {
            let termNoteList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(termNoteList); // Put it in the contentBox
            for (const note of term.notes) { // For every note found in the term
                let termNote = document.createElement("li"); // <il></il>
                termNote.classList.add(`note`)  // <il class="note"></il>
                termNote.innerText = note; // <il class="note">the note text</il>
                termNoteList.appendChild(termNote); // <ul><il class="note">the note text</il></ul>
            }
        }

    } //End Terms
}

// print from Pucks
// puckToFind: which key in Pucks to print (false for all)
// erase: clear the previous content (true/false)
function printPuck(puckToFind, erase) {
    if (erase)
        contentBox.innerHTML = "";

    let PucksToSearch = Pucks;

    // If a puck was provided, find it and put it in a list
    if (puckToFind)
        PucksToSearch = [Pucks.find((puckSearch) => puckSearch.name == puckToFind)];
    // If you couldn't find that puck, revert back to all
    if (!PucksToSearch)
        PucksToSearch = Pucks

    //pucks
    let titleHeader = document.createElement("h1");
    titleHeader.innerText = "Pucks";
    contentBox.appendChild(titleHeader);

    for (const puck of PucksToSearch) {
        //puck Name
        let puckHeader = document.createElement("h2");
        puckHeader.innerText = puck.name;
        contentBox.appendChild(puckHeader);

        //type
        let puckType = document.createElement("p");
        puckType.classList.add(`pucktype`)
        puckType.innerText = puck.type;
        contentBox.appendChild(puckType);

        //description
        let puckText = document.createElement("p");
        puckText.classList.add(`desc`)
        puckText.innerText = puck.description;
        contentBox.appendChild(puckText);

        for (mode in puck.se) {
            if (puck.se[mode].length) {
                let ruleMode = document.createElement("h3");
                ruleMode.innerText = mode;
                contentBox.appendChild(ruleMode);
                for (const rule of puck.se[mode]) {
                    let puckText = document.createElement("p");
                    puckText.classList.add(`rule`)
                    puckText.innerText = rule.text;
                    contentBox.appendChild(puckText);
                    if (rule.notes.length) {
                        let puckNoteList = document.createElement("ul");
                        contentBox.appendChild(puckNoteList);
                        for (const note of rule.notes) {
                            let puckNote = document.createElement("li");
                            puckNote.classList.add(`note`)
                            puckNote.innerText = note;
                            puckNoteList.appendChild(puckNote);
                        }
                    }
                }
            }
        }

    } //End Pucks
}

// print from Slammers
// slammerToFind: which key in Slammers to print (false for all)
// erase: clear the previous content (true/false)
function printSlammer(slammerToFind, erase) {
    if (erase)
        contentBox.innerHTML = "";

    let SlammersToSearch = Slammers;

    // If a slammer was provided, find it and put it in a list
    if (slammerToFind)
        SlammersToSearch = [Slammers.find((slammerSearch) => slammerSearch.name == slammerToFind)];
    // If you couldn't find that slammer, revert back to all
    if (!SlammersToSearch)
        SlammersToSearch = Slammers;

    //slammers
    let titleHeader = document.createElement("h1");
    titleHeader.innerText = "Slammers";
    contentBox.appendChild(titleHeader);


    for (const slammer of SlammersToSearch) {
        //slammer Name
        let slammerHeader = document.createElement("h2");
        slammerHeader.innerText = slammer.name;
        contentBox.appendChild(slammerHeader);

        //dex
        let slammerDex = document.createElement("p"); // <p></p>
        slammerDex.classList.add(`pucktype`); // <p class='pucktype'></p>
        slammerDex.innerText = `PokeDex #: ${slammer.pokedex}`; // <p class='pucktype'>PokeDex #: Pokemon Name</p>
        contentBox.appendChild(slammerDex);

        //tag
        if (slammer.tags.length) {
            let tags = document.createElement("p"); // <p></p>
            tags.classList.add(`pucktype`); // <p class='pucktype'></p>
            tags.innerText = `Tags:`; // <p class='pucktype'>Tags:</p>
            for (const tag of slammer.tags) {
                tags.innerText += " " + tag;
            }
            contentBox.appendChild(tags);
        }

        //ballStrength
        let slammerBallStr = document.createElement("p");
        slammerBallStr.classList.add(`pucktype`);
        slammerBallStr.innerText = `Pokeball Strength: ${slammer.ballStrength}`;
        contentBox.appendChild(slammerBallStr);

        //description
        let slammerText = document.createElement("p");
        slammerText.classList.add(`desc`);
        slammerText.innerText = slammer.description;
        contentBox.appendChild(slammerText);

        // Ability Header
        let abilName = document.createElement("h3");
        abilName.innerText = slammer.ability.name;
        contentBox.appendChild(abilName);

        // Ability List
        for (abil in slammer.ability) {
            if (abil != 'name' && slammer.ability[abil].text) {
                let abilList = document.createElement("ul");
                contentBox.appendChild(abilList);

                let abilItem = document.createElement("li");
                abilItem.classList.add('rule');
                abilList.appendChild(abilItem);
                abilItem.innerText = abil;

                let rulesList = document.createElement("ul");
                abilItem.appendChild(rulesList);

                let rulesText = document.createElement("li");
                rulesList.appendChild(rulesText);
                rulesText.innerText = slammer.ability[abil].text;

                if (slammer.ability[abil].notes.length) {
                    let rulesNoteList = document.createElement("ul");
                    abilItem.appendChild(rulesNoteList);
                    for (const note of slammer.ability[abil].notes) {
                        let rulesNote = document.createElement("li");
                        rulesNote.classList.add(`note`);
                        rulesNote.innerText = note;
                        rulesNoteList.appendChild(rulesNote);
                    }
                }
            }
        }

        // Puck List
        for (puck in slammer.pucks) {

            let puckName = document.createElement("h3");
            puckName.innerText = slammer.pucks[puck].subname;
            contentBox.appendChild(puckName);

            let puckID = document.createElement("p");
            puckID.classList.add(`pucktype`);
            puckID.innerText = `Serial #: ${puck}`;
            contentBox.appendChild(puckID);

            let statList = document.createElement("ul");
            contentBox.appendChild(statList);
            for (const stat in slammer.pucks[puck]) {
                if (stat != 'img' && stat != 'subname') {
                    let statItem = document.createElement("li");
                    statItem.innerText = `${stat}: ${slammer.pucks[puck][stat]}`;
                    statList.appendChild(statItem);
                }
            }

        }

    }
} // End Slammers

// print from statuses
// statusToFind: which key in statuses to print (false for all)
// erase: clear the previous content (true/false)
function printStatus(statusToFind, erase) {
    // Clear the contentBox if they chose to erase
    if (erase)
        contentBox.innerHTML = "";

    //
    var statPrint = statusToFind;
    if (!statusToFind)
        statPrint = Statuses;

    // Header
    let mainHeader = document.createElement("h1");
    mainHeader.innerText = "Statuses";
    contentBox.appendChild(mainHeader);

    //Each Status
    for (const stat of statPrint) {
        let newHeader = document.createElement("h2");
        newHeader.innerText = stat.name;
        contentBox.appendChild(newHeader);
        let newDesc = document.createElement("p");
        newDesc.classList.add(`desc`);
        newDesc.innerText = stat.description;
        contentBox.appendChild(newDesc);
        let newStat = document.createElement("p");
        newStat.innerText = stat.text;
        contentBox.appendChild(newStat);
        if (stat.notes.length) {
            let rulesNoteList = document.createElement("ul");
            abilItem.appendChild(rulesNoteList);
            for (const note of stat.notes) {
                let rulesNote = document.createElement("li");
                rulesNote.classList.add(`note`);
                rulesNote.innerText = note;
                rulesNoteList.appendChild(rulesNote);
            }
        }
    } //End Intro
}

// print from Zones
// zoneToFind: which key in Zones to print (false for all)
// erase: clear the previous content (true/false)
function printZone(zoneToFind, erase) {

    // Clear the contentBox if the user chose to erase
    if (erase)
        contentBox.innerHTML = "";

    // Declare a list of Zones to search through
    let ZonesToSearch = [];

    // If a zone was provided, find it and put it in a list by itself
    if (zoneToFind)
        ZonesToSearch = [Zones.find((zoneSearch) => zoneSearch.name === zoneToFind)];
    // If you couldn't find that zone, just print everything
    if (!ZonesToSearch.length)
        ZonesToSearch = Zones

    //Zones
    let titleHeader = document.createElement("h1"); // <h1></h1>
    titleHeader.innerText = "Zones"; // <h1>Zones</h1>
    contentBox.appendChild(titleHeader); // Put it in the contentBox
    let titleAnchor = document.createElement("a");
    titleAnchor.name = "Zones";
    contentBox.appendChild(titleAnchor);

    // Zone List
    for (zone of ZonesToSearch) {
        let titleAnchor = document.createElement("a");
        titleAnchor.name = zone.name;
        contentBox.appendChild(titleAnchor);
        let zoneName = document.createElement("h2");
        zoneName.innerText = zone.name;
        contentBox.appendChild(zoneName);

        let zoneID = document.createElement("p");
        zoneID.classList.add(`pucktype`);
        zoneID.innerText = `Type: ${zone.type}`;
        contentBox.appendChild(zoneID);

        //text
        let zoneDesc = document.createElement("p"); // <p></p>
        zoneDesc.innerText = zone.description; // <p>the zone's rule text</p>
        zoneID.classList.add(`desc`);
        contentBox.appendChild(zoneDesc); // Put it in the contentBox


        // PKMN
        if (zone.pkmn.length) {

            let pkmnHeader = document.createElement("h3");
            pkmnHeader.innerText = "Pokemon";
            contentBox.appendChild(pkmnHeader);

            let zonePKMNList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(zonePKMNList); // Put it in the contentBox
            for (const pkmn of zone.pkmn) { // For every pkmn found in the zone
                let zonePKMN = document.createElement("li");
                zonePKMN.innerText = pkmn;
                zonePKMNList.appendChild(zonePKMN);
            }
        }

        //mart
        if (zone.type == 'city') {
            let martHeader = document.createElement("h3");
            martHeader.innerText = "PokeMart Items";
            contentBox.appendChild(martHeader);

            let zoneMartList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(zoneMartList); // Put it in the contentBox
            for (const puck of findStdMart().concat(zone.mart)) { // For every puck found in the mart
                let zoneMart = document.createElement("li");
                zoneMart.innerText = puck;
                zoneMartList.appendChild(zoneMart);
            }
        }

        // POI
        if (zone.poi.length) {

            let poiHeader = document.createElement("h3");
            poiHeader.innerText = "Points of Interest";
            contentBox.appendChild(poiHeader);

            let zonePOIList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(zonePOIList); // Put it in the contentBox
            for (const poi of zone.poi) { // For every poi found in the zone
                let zonePOI = document.createElement("li");
                zonePOI.innerText = poi;
                zonePOIList.appendChild(zonePOI);
            }
        }

        // Disc
        if (zone.discoveries.length) {

            let discoveriesHeader = document.createElement("h3");
            discoveriesHeader.innerText = "Discoveries";
            contentBox.appendChild(discoveriesHeader);

            let zoneDiscList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(zoneDiscList); // Put it in the contentBox
            for (const discoveries of zone.discoveries) { // For every discoveries found in the zone
                let zoneDisc = document.createElement("li");
                zoneDisc.innerText = discoveries;
                zoneDiscList.appendChild(zoneDisc);
            }
        }


        // Connections
        let connSearch = findConnections(zone.name);
        if (connSearch.length) {
            let connectionHeader = document.createElement("h3");
            connectionHeader.innerText = "Connects to";
            contentBox.appendChild(connectionHeader);

            let zoneConnList = document.createElement("ul"); // <ul></ul>
            contentBox.appendChild(zoneConnList); // Put it in the contentBox
            for (const connection of connSearch) { // For every connection found in the zone
                let zoneConn = document.createElement("li");
                zoneConn.classList.add(`clickable`);
                zoneConnList.appendChild(zoneConn);
                let zoneLink = document.createElement("a");
                zoneConn.appendChild(zoneLink);
                if (connection.zones[0] == zone.name) {
                    zoneLink.innerText = connection.zones[1];
                    zoneLink.onclick = () => { printZone(connection.zones[1], true) }
                    zoneLink.href = "#" + connection.zones[1];
                }
                else {
                    zoneLink.innerText = connection.zones[0];
                    zoneLink.onclick = () => { printZone(connection.zones[0], true) }
                    zoneLink.href = "#" + connection.zones[0];
                }
            }
        }

    }
} // End Zones

// reverse true if you want to search one way routes coming into thisZone
function findConnections(thisZone, reverse) {
    if (!thisZone)
        return [];
    // How will filter() check if it's connected?
    const findDirect = (zone) => {
        if (reverse)
            return zone.direction == 'down' && zone.zones[0] == thisZone
        else
            return (zone.direction == 'up' && zone.zones[0] == thisZone) || (zone.direction == 'both' && zone.zones.includes(thisZone))
    };
    let xFound = Connections.filter(findDirect);
    return xFound;
}

// Return a list of strings that are the names of items that are in every Mart
// fullObj true if you want the entire object, instead of just their names
function findStdMart(fullObj) {
    let stdMart = [];
    for (const puck of Mart.filter((puck) => puck.std)) {
        stdMart.push(((fullObj) ? puck : puck.name));
    }
    return stdMart;
}