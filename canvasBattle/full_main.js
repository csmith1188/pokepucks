var tempArena = [];
class Game {
    constructor() {
        this.players = [new Player(), new Player()];
        this.stage = 'setup';
        this.phase = 0;
        this.step = 0;
        this.arene = [];
        this.turn = 0;
    }

    step() {
        switch (this.stage) {
            case 'setup':
                this.stage_setup();
                break;
            case 'loop':
                this.stage_loop();
                break;
            default:
                break;
        }

    }

    stage_setup() {
        switch (this.phase) {
            case 0: // Decide players
                this.phase++;
                break;
            case 1: // Decide Special Rules
                this.phase++;
                break;
            case 2: // Build health stack
                // for each player, add 14 pogs to their health stack
                for (i = 0; i <= this.players.length; i++) {

                    for (j = 0; j < 14; j++) {
                        this.players[i].hp.push(new Pog('pog', 1));
                    }
                }
                console.log(players[0].hp.length)
                console.log(players[1].hp.length)
                this.phase++;
                break;
            case 3: // Build arena
                // while arena is < 8, each player pops 1 from hp to arena
                for (i = 0; i < 4; i++) {
                    this.players[0].hp.pop();
                    this.arena.push(new Pog('pog', 1));
                    this.players[1].hp.pop();
                    this.arena.push(new Pog('pog', 1));
                }
                this.phase++;
                break;
            case 4: // Pick a slammer
                // each player picks a slammer
                this.players[0].slammer = new Slammer('slammer', 1,'down');
                this.players[1].slammer = new Slammer('slammer', 1,'down');
                this.phase++;
                break;
        }
        if (this.phase > 4) {
            this.stage = 'loop';
            this.phase = 0;
        }
    }

    stage_loop() {
        switch (this.phase) {
            case 0: // Top off
                // while arena is < 8, player pops 1 from hp to arena
                // if player has no pogs in their stack, stop and put into critical
                while (arena.length < 8) {
                    if (this.turn == 0) {
                        if (this.player[0].hp.length == 0) {
                            this.players[0].hp.pop();
                            this.arena.push(new Pog('pog', 1,'down'));
                        }
                    }
                    else {
                        if (this.player[1].hp.length == 0) {
                            this.players[1].hp.pop();
                            this.arena.push(new Pog('pog', 1,'down'));
                        }

                    }
                }
                this.phase++;
                break;
            case 1:// Knockout
                // if player has no pogs in their stack, move that player's slammer into the center.
                if (this.players[0].hp.length <= 0) {
                    this.players[0].hp = [];
                    tempArena = this.arena;
                    this.arena = [];
                    this.arena.push(this.players[0].slammer);

                }
                if (this.players[1].hp.length <= 0) {
                    this.players[1].hp = [];
                    this.arena = [];
                    this.arena.push(this.players[1].slammer);
                }
                this.phase++;
                break;
            case 2:// Count Attacks
                //Each player gets the bare minimum of 1 attack, before checking for abilities, status, and other special rules.
                this.phase++;
                break;
            case 3://Make Attacks
                //The current player makes an attack, then the other player makes an attack. Repeat until all attacks have been made. 
                //If a player has flipped over pogs in the arena, pick them up and place it in prize, the rest that have been knocked
                // over are placed back into the arena.

                this.phase++;
                break;
            case 4://Discard pucks
                //If a player wants to use a puck, remove that puck from the power stack and place it in the discard pile, while
                //checking rules for that puck, and special rules.
                this.phase++;
                break;
            case 5://Check for winner
                //If player is the only player remaining with either hp or non flipped slammer, they win.
                this.phase++;
                break;
        }
        if (this.phase > 4) {
            this.stage = 'setup';
            this.phase = 0;
        }
    }

}

const game = new Game();

function step() {
    game.step();
    requestAnimationFrame(step);
}
