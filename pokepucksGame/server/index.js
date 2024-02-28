/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho, Logan Cruz

<Description>
Code for the backend server-side for the PokePucks game.
\***************************************************************************/
/*
// A list for all the required node modules to install
// Make sure terminal is in the server folder
npm i socket.io
npm i express
npm i jsonwebtoken
npm i express-session
npm i ejs
npm i -D nodemon (Not required but makes editing this file much more convenient. Nodemon will restart the server automatically every time you save the server.)
// Start the server by using 'npm start' while in the server folder
// Start the server for testing by using 'npm run dev' while in the server folder
// Remember to change the ip address in both this file and the app.js file to the ip address of the computer you are using to run the server
*/
import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import session from 'express-session';

// Define the urls
const AUTH_URL = 'http://fillerIP:420/oauth'; // 'http://ipAddressOfFormbarInstance:port/oauth';
const THIS_URL = 'http://fillerIP:3000/login'; // 'http://ipAddressOfThisServer:port/login';
const GAME_URL = 'http://fillerIP:3000/'; // 'http://ipAddressOfThisServer:port/';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const ADMIN = "YrXoETWEMg5_jKLdAAADtkKSWJqh33L2lrcXAAABWbFLr2OR7EHk719MAAABxkXxW0_R2EuZ7XVXAAAD"; // Make sure this is longer than the maxlength of a username

var allActiveRooms = [];
var allActivePublicRooms = [];

const app = express(); // Our express server is referred to as app

app.set('view engine', 'ejs');

app.use(
    express.json(), // Allows us to parse JSON data
    express.static(path.join(__dirname, "views")), // Defines our static folder so when we get a request to the root domain, it will send eveything to the public directory that will contain the static assets
    session({
        secret: 'super secret string', // replace with environemnt variable later
        resave: false,
        saveUninitialized: false
    }));

app.get('/', (req, res) => {
    // Check if user is already logged in
    if (req.session && req.session.user) {
        // User is logged in, redirect to chatroom lobby
        res.redirect('/lobby');
    } else {
        // User is not logged in, render the login page
        res.render('login');
    };
});

app.get('/lobby', (req, res) => {
    // Check if user is logged in
    if (req.session && req.session.user) {
        // User is logged in, render the chatroom lobby with the username
        res.render('lobby', { sessionUser: req.session.user, activeRooms: allActivePublicRooms });
    } else {
        // User is not logged in, redirect to login
        res.redirect('/');
    };
});

app.get('/chatroom', (req, res) => {
    // Check if user is logged in
    if (req.session && req.session.user) {
        res.render('chatroom');
    } else {
        // User is not logged in, redirect to login
        res.redirect('/');
    };
});

app.get('/login', (req, res) => {
    // Check if user is already logged in
    if (req.session && req.session.user) {
        // User is logged in, redirect to chatroom
        res.redirect('/lobby');
    } else {
        if (req.query.token) {
            let tokenData = jwt.decode(req.query.token);
            req.session.token = tokenData;
            req.session.user = tokenData.username;
            res.redirect('/lobby');
        } else {
            res.redirect(`${AUTH_URL}?redirectURL=${THIS_URL}`);
        };
    };
});

app.get('/logout', (req, res) => {
    // Destroy the session and redirect to login
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

const expressServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// State
const UsersState = {
    users: [],
    setUsers: function (newUsersArray) {
        this.users = newUsersArray;
    }
};

// Grabs the server imported from socket.io, gives it the expressServer, and gives it options
const io = new Server(expressServer, {
    cors: {
        // origin allows you to change what is accepted and what is blocked
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:3000", GAME_URL] // Looks at the node environment. If the node environemnt equals production, origin is set to false because we don't want anyone outside of the domain the server is currently on to access it. If it doesn't equal production, origin is set to the address that we will allow to access our socket.io server
    }
});

// Create a map to hold game instances for each room
const games = new Map();

// Once a connection is established, listen for a socket
io.on('connection', socket => {
    console.log(`User ${socket.id} connected`);

    // Upon connection - only to user
    socket.emit('message', buildMsg(ADMIN, "Welcome to Chat App!"));

    socket.on('enterRoom', ({ name, room, privacy, method }, callback) => {
        // leave previous room
        const prevRoom = getUser(socket.id)?.room;

        if (prevRoom) {
            socket.leave(prevRoom);
            io.to(prevRoom).emit('message', buildMsg(ADMIN, `${name} has left the room`));
        };

        const user = activateUser(socket.id, name, room);

        // cannot update previous room users list until after the state update in activate user
        if (prevRoom) {
            io.to(prevRoom).emit('userList', {
                users: getUsersInRoom(prevRoom)
            });
        };

        // If user is creating a room, user creates and joins the room like normal
        if (method === 'create') {
            // join room
            socket.join(user.room);

            // to user who joined
            socket.emit('message', buildMsg(ADMIN, `You have joined the ${user.room} chat room`));

            // to everyone else
            socket.broadcast.to(user.room).emit('messsage', buildMsg(ADMIN, `${user.name} has joined the room`));

            // update user list for room
            io.to(user.room).emit('userList', {
                users: getUsersInRoom(user.room)
            });

            allActiveRooms.push(room);
            allActivePublicRooms.push(room);

            // If a room is private, it removes it from the array
            if (privacy === 'private') {
                allActivePublicRooms.splice(allActivePublicRooms.indexOf(room), 1);
            };

            // update rooms list for everyone
            io.emit('roomList', {
                rooms: allActivePublicRooms,
            });
        };

        if (method === 'join') {
            let roomExists = false;

            // Iterate over all active rooms
            for (let i = 0; i < allActiveRooms.length; i++) {
                if (allActiveRooms[i] === room) {
                    console.log("Room:", room);
                    console.log('Room Exists');
                    roomExists = true;
                    break;
                };
            };

            if (roomExists) {
                if (getUsersInRoom(user.room).length <= 2) {
                    // Join the room
                    socket.join(user.room);

                    console.log(`# of Users in room after Join: ${getUsersInRoom(user.room).length}`);

                    // Send messages
                    socket.emit('message', buildMsg(ADMIN, `You have joined the ${user.room} chat room`));
                    io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has joined the room`));

                    // Update user list for room
                    io.to(user.room).emit('userList', {
                        users: getUsersInRoom(user.room)
                    });

                    // If a room is private, remove it from the public rooms array
                    if (privacy === 'private') {
                        allActivePublicRooms.splice(allActivePublicRooms.indexOf(room), 1);
                    };

                    // Update rooms list for everyone
                    io.emit('roomList', {
                        rooms: allActivePublicRooms,
                    });

                    if (callback) callback(); // No error
                } else { // Room is full
                    socket.emit('joinedRoomFull');
                    return;
                };
            } else { // Room does not exist
                socket.emit('joinedRoomNotFound');
                return;
            };
        };
      
        // Server-side game logic
      let gameStarted = new Map();
      
        // Goes through the steps of the games
        socket.on('step-game', function (room, callback) {
            console.log('step-game test');
            const game = games.get(room);
            if (game) {
                try {
                    game.step();
                    let gameData = {
                        game: game,
                    };
                    callback(null, { status: 'success' });
                    io.to(room).emit('step-game-success', { status: 'success' }, gameData);
                } catch (error) {
                    callback(error.message);
                };
            } else {
                callback('No game found for this room');
            };
        });
      
        socket.on('gameStart', () => {
            // Logic for starting the game
            if (gameStarted.get(room)) {
                callback('Game already started');
            } else {
                gameStarted.set(room, true);
                io.to(room).emit('game started');
                console.log('gameStart test');

            function objectsAreEqual(a, b) {
                return JSON.stringify(a) === JSON.stringify(b);
            };

            var tempArena = [];
            var turn;
            class Player {
                constructor(hp, power, prize, attack, slammer) {
                    this.hp = hp;
                    this.power = power;
                    this.prize = prize;
                    this.attack = attack;
                    this.slammer = slammer;
                };
            };
            class Puck {
                constructor(name, weight, side) {
                    this.name = name;
                    this.weight = weight;
                    this.side = side;
                };
                flip() {
                    // flip
                    let power;
                    power = Math.floor(Math.random() * 100) + 1 + this.weight;
                    if (power > 100) {
                        power = 100;
                    };
                    return power;
                };
            };
            class Slammer {
                constructor(name, weight, side) {
                    this.name = name;
                    this.weight = weight;
                    this.side = side;
                };
                attack() {
                    // attack
                    let power;
                    power = Math.floor(Math.random() * 100) + 1 + this.weight / 1.5;
                    if (power > 100) {
                        power = 100;
                    };
                    return power;
                };
            };
            class Game {
                constructor() {
                    this.players = [new Player([], [], [], 0,'squirtle'), new Player([], [], [], 0, 'bulbasaur')];
                    this.stage = 'setup';
                    this.phase = 0;
                    this.stepcount = 0;
                    this.arena = [];
                    this.turn = 0;
                };

                step() {
                    switch (this.stage) {
                        case 'setup':
                            this.stage_setup();
                            break;
                        case 'loop':
                            this.stage_loop();
                            break;
                        case 'end':
                            this.stage_end();
                            break;
                        default:
                            break;
                    };
                };

                stage_setup() {
                    switch (this.phase) {
                        case 0: // Decide players
                            this.phase++;
                            this.turn = Math.floor(Math.random() * 2);
                            console.log(this.players[0]);
                            console.log(this.players[1]);
                            this.players[0].pogsBackup = [];
                            this.players[1].pogsBackup = [];
                            break;
                        case 1: // Decide Special Rules
                            this.phase++;
                            break;
                        case 2: // Build health stack
                            // for each player, add 14 pogs to their health stack
                            if (this.players[0].hp.length == 0 && this.players[1].hp.length == 0) {
                                for (let i = 0; i < this.players.length; i++) {
                                    for (let j = 0; j < 15; j++) {
                                        console.log(this.players[i].hp);
                                        this.players[i].hp.push(new Puck('pog', 1, 'down'));
                                    };
                                };
                            };
                            console.log(this.players[0].hp.length);
                            console.log(this.players[1].hp.length);
                            this.phase++;
                            break;
                        case 3: // Build arena
                            // while arena is < 8, each player pops 1 from hp to arena
                            while (this.arena.length < 8) {
                                this.arena.push(this.players[0].hp.pop());
                                this.arena.push(this.players[1].hp.pop());
                            };
                            this.phase++;
                            break;
                        case 4: // Pick a slammer
                            // each player picks a slammer
                            this.players[0].Slammer = new Slammer('slammer', 1, 'down');
                            this.players[1].Slammer = new Slammer('slammer', 1, 'down');
                            this.phase++;
                            break;
                    };
                    if (this.phase > 4) {
                        this.stage = 'loop';
                        this.phase = 0;
                    };
                };

                stage_loop() {
                    switch (this.phase) {
                        case 0: // Top off
                            console.log('case 0 test');
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            if (this.turn == 0 && this.players[0].hp.length === 0 && this.players[0].pogsBackup.length > 0) {
                                this.players[0].hp = [...this.players[0].pogsBackup];
                                this.players[0].pogsBackup = [];
                            };
                            if (this.turn == 1 && this.players[1].hp.length === 0 && this.players[1].pogsBackup.length > 0) {
                                this.players[1].hp = [...this.players[1].pogsBackup];
                                this.players[1].pogsBackup = [];
                            };
                            // while arena is < 8, player pops 1 from hp to arena
                            // if player has no pogs in their stack, stop and put into critical
                            while (this.arena.length < 8) {
                                console.log('Arena Length:' + this.arena.length);
                                console.log('Arena:' + this.arena);
                                if (this.players[0].hp.length == 0) {
                                    break;
                                } else if (this.turn == 0) {
                                    if (this.players[0].hp.length > 0) {
                                        this.arena.push(this.players[0].hp.pop());
                                        console.log('player 1 losing hp test');
                                    };
                                };
                                if (this.players[1].hp.length == 0) {
                                    break;
                                } else if (this.turn == 1) {
                                    if (this.players[1].hp.length > 0) {
                                        this.arena.push(this.players[1].hp.pop());
                                        console.log('player 2 losing hp test');
                                    };
                                };
                                console.log('Arena Length End:' + this.arena.length);
                                console.log('Player 1 HP:' + this.players[0].hp.length);
                                console.log('Player 2 HP:' + this.players[1].hp.length);
                            };
                            this.phase++;
                            break;
                        case 1:// Knockout
                            console.log('case 1 test');
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            // if player has no pogs in their stack, move that player's slammer into the center.
                            console.log('Before replacing slammer with turn:', this.arena, this.turn);
                            // Before replacing the player's pogs with the slammer, store the pogs
                            if (this.players[0].hp.length <= 0 && this.turn === 1) {
                                this.players[0].pogsBackup = [...this.players[0].hp];
                                this.players[0].hp = [];
                                tempArena = this.arena;
                                this.arena = [];
                                this.arena.push(this.players[0].Slammer);
                            };
                            
                            this.phase++;
                            break;
                        case 2:// Count Attacks
                            console.log('After replacing slammer with turn:', this.arena, this.turn);
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            //Each player gets the bare minimum of 1 attack, before checking for abilities, status, and other special rules.
                            this.players[0].attacks = 1;
                            this.players[1].attacks = 1;
                            console.log(this.players[0].hp.length);
                            console.log(this.players[1].hp.length);
                            this.phase++;
                            break;
                        case 3://Make Attacks
                            console.log('case 3 test');
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            //The current player makes an attack, then the other player makes an attack. Repeat until all attacks have been made. 
                            //If a player has flipped over pogs in the arena, pick them up and place it in prize, the rest that have been knocked
                            // over are placed back into the arena.
                            let power;
                            if (this.turn == 0) {
                                while (this.players[0].attacks > 0) {
                                    console.log('Player attack Slammer');
                                    console.log(this.players[0].attacks);
                                    power = this.players[this.turn].Slammer.attack();
                                    let slammerInArena = false;
                                    for (let i = 0; i < this.arena.length; i++) {
                                        console.log('Arena Slammer:', this.arena[i]);
                                        console.log('Player Slammer:', this.players[this.turn].Slammer);
                                        if (objectsAreEqual(this.arena[i], this.players[this.turn].Slammer)) {
                                            console.log('Slammer in Arena');
                                            slammerInArena = true;
                                            break;
                                        };
                                    };

                                    console.log('slammerInArena:', slammerInArena);
                                    console.log('this.turn:', this.turn);
                                    if (slammerInArena && this.players[1].hp.length == 0) {
                                        console.log('Player 2 slammer attack test');
                                        let power1 = this.players[1].Slammer.attack();
                                        if (power > power1) {
                                            this.players[1].Slammer.side = 'up';
                                        };
                                    };
                                    console.log('Arena for Player 1:', this.arena);
                                   
                                    console.log('Slammer weight:', this.weight);
                                    for (let i = 0; i < this.arena.length; i++) {
                                        if (this.arena[i] && typeof this.arena[i].flip === 'function') {
                                            console.log('Puck weight:', this.arena[i].weight);
                                            let flipnum = this.arena[i].flip();
                                            console.log('power:', power);
                                            console.log('flipnum:', flipnum);
                                            if (power > flipnum) {
                                                
                                                console.log('Puck is flipped');
                                                this.arena[i].side = 'up';
                                                console.log(this.arena[i])
                                                this.players[this.turn].prize.push(this.arena[i]);
                                                this.arena.splice(i, 1);
                                                console.log(this.arena[i])
                                            } else {
                                                console.log(this.arena[i])
                                                console.log('Puck is not flipped');
                                               
                                            }
                                        }
                                    }
                                   
                                    this.players[this.turn].attacks--;
                                };
                            } else {
                                while (this.players[1].attacks > 0) {
                                    let slammerInArena = false;
                                    for (let i = 0; i < this.arena.length; i++) {
                                        console.log('Arena Slammer:', this.arena[i]);
                                        console.log('Player Slammer:', this.players[this.turn].Slammer);
                                        if (objectsAreEqual(this.arena[i], this.players[this.turn].Slammer)) {
                                            console.log('Slammer in Arena');
                                            slammerInArena = true;
                                            break;
                                        };
                                    }
                                    power = this.players[this.turn].Slammer.attack();
                                    if (slammerInArena && this.players[0].hp.length == 0) {
                                        let power1 = this.players[0].Slammer.attack();
                                        if (power > power1) {
                                            this.players[0].Slammer.side = 'up';
                                        };
                                    };
                                    console.log('Arena for Player 2:', this.arena);
                                    
                                    console.log('Slammer weight:', this.weight);
                                    for (let i = 0; i<this.arena.length; i++) {
                                        if (this.arena[i] && typeof this.arena[i].flip === 'function') {
                                            console.log('Puck weight:', this.arena[i].weight);
                                            let flipnum = this.arena[i].flip();
                                            console.log('power:', power);
                                            console.log('flipnum:', flipnum);
                                            if (power > flipnum) {
                                                
                                                console.log('Puck is flipped');
                                                this.arena[i].side = 'up';
                                                console.log(this.arena[i])
                                                this.players[this.turn].prize.push(this.arena[i]);
                                                this.arena.splice(i, 1);
                                                console.log(this.arena[i])
                                            } else {
                                                console.log(this.arena[i])
                                                console.log('Puck is not flipped');
                                                ;
                                            }
                                        }
                                    }
                                    
                                    this.players[this.turn].attacks--;
                                };
                            };
                            if (this.turn == 0) {
                                // Remove the slammer from the arena
                                const slammerIndex = this.arena.findIndex(pog => pog === this.players[0].Slammer);
                                if (slammerIndex !== -1) {
                                    this.arena.splice(slammerIndex, 1);
                                };
                                // Add the pogs back into the arena from tempArena
                                this.arena = [...this.arena, ...tempArena];
                                tempArena = [];
                            } else {
                                // Remove the slammer from the arena
                                const slammerIndex = this.arena.findIndex(pog => pog === this.players[1].Slammer);
                                if (slammerIndex !== -1) {
                                    this.arena.splice(slammerIndex, 1);
                                };
                                // Add the pogs back into the arena from tempArena
                                this.arena = [...this.arena, tempArena];
                                tempArena = [];
                            };
                            console.log('Arena:', this.arena.hp);
                            this.phase++;
                            break;
                        case 4://Discard pucks
                            console.log('case 4 test');
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            //If a player wants to use a puck, remove that puck from the power stack and place it in the discard pile, while
                            //checking rules for that puck, and special rules.
                            if (this.turn == 0) {
                                this.turn = 1;
                            } else {
                                this.turn = 0;
                            };
                            this.phase++;
                            break;
                        case 5://Check for winner
                            console.log('case 5 test');
                            console.log(this.players[0].Slammer.side);
                            console.log(this.players[1].Slammer.side);
                            //If player is the only player remaining with either hp or non flipped slammer, they win.
                            if (this.players[0].hp.length == 0 && this.players[0].Slammer.side == 'up') {
                                this.stage = 'end';
                                console.log('player 2 wins');
                            };
                            if (this.players[1].hp.length == 0 && this.players[1].Slammer.side == 'up') {
                                this.stage = 'end';
                                console.log('player 1 wins');
                            };
                            this.arena = tempArena;
                            this.phase++;
                            break;
                    };
                    if (this.phase > 5 && this.stage == 'loop') {
                        this.stage = 'loop';
                        this.phase = 0;
                    };
                    if (this.stage == 'end') {
                        this.phase = 0;
                    };
                };
                stage_end() {
                    // if player 1 wins, display player 1 wins
                    if (this.players[1].hp.length == 0 && this.players[1].Slammer.side == 'up') {
                        console.log('P1 wins');
                    };
                    if (this.players[0].hp.length == 0 && this.players[0].Slammer.side == 'up') {
                        console.log('P2 wins');
                    };
                };
            };

                const game = new Game();

                function startGame() {
                    const game = games.get(room);
                    if (game) {
                        try {
                            game.step();
                            callback(null, { status: 'success' });
                        } catch (error) {
                            callback(error.message);
                        };
                    } else {
                        callback('No game found for this room');
                    };
                    console.log('Game:', game);
                };

                startGame();
                games.set(user.room, game);
                console.log('Games Map:', games);
                console.log('gameEnd test');
            };
        });
    });
  
      let readyPlayers = new Map();

    socket.on('player ready', function (room, callback) {
        if (!readyPlayers.has(room)) {
            readyPlayers.set(room, []);
        };

        readyPlayers.get(room).push(socket.id);

        console.log(readyPlayers.get(room));
        console.log(readyPlayers);
        console.log(`Player ${socket.id} is ready in room ${room}. Total ready players: ${readyPlayers.get(room).length}`);

        let roomSize = getUsersInRoom(room).length;
        if (readyPlayers.get(room).length === roomSize) {
            console.log(`All players are ready in room ${room}. Starting game.`);
            io.to(room).emit('all players ready');
        };
    });

    socket.on('disconnect', function () {
        readyPlayers.forEach((value, key) => {
            value.delete(socket.id);
        });
    });

    // When user leaves a room - to all others
    socket.on('leaveRoom', () => {
        const user = getUser(socket.id);
        userLeavesApp(socket.id);
              readyPlayers.forEach((value, key) => {
            value.delete(socket.id);
        });
        if (user) {
            console.log(`# of Users in room after Leave: ${getUsersInRoom(user.room).length}`);
            socket.leave(user.room);
            if (getUsersInRoom(user.room).length === 0) {
                games.delete(user.room);
                console.log('room gone');
                // Loops through the allActiveRooms array
                for (let i = 0; i < allActiveRooms.length; i++) {
                    // If the room value of user is equal to any of the array items
                    if (user.room === allActiveRooms[i]) {
                        // Removes that room from the allActiveRooms array
                        allActiveRooms.splice(allActiveRooms.indexOf(user.room), 1);
                    };
                };
                // Loops through the allActivePublicRooms array
                for (let i = 0; i < allActivePublicRooms.length; i++) {
                    // If the room value of user is equal to any of the array items
                    if (user.room === allActivePublicRooms[i]) {
                        // Removes that room from the allActivePublicRooms array
                        allActivePublicRooms.splice(allActivePublicRooms.indexOf(user.room), 1);
                    };
                };
            };

            socket.emit('leaveRoomConfirmation');

            io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has left the room`));

            io.to(user.room).emit('userList', {
                users: getUsersInRoom(user.room)
            });

            io.emit('roomList', {
                rooms: allActivePublicRooms
            });
        };

        console.log(`User ${socket.id} disconnected`);
    });

    // When user disconnects - to all others
    socket.on('disconnect', () => {
        const user = getUser(socket.id);
        userLeavesApp(socket.id);
              readyPlayers.forEach((value, key) => {
            value.delete(socket.id);
        });
        if (user) {
            console.log(`# of Users in room after Disconnect: ${getUsersInRoom(user.room).length}`);
            if (getUsersInRoom(user.room).length === 0) {
                games.delete(user.room);
                console.log('room gone');
                // Loops through the allActiveRooms array
                for (let i = 0; i < allActiveRooms.length; i++) {
                    // If the room value of user is equal to any of the array items
                    if (user.room === allActiveRooms[i]) {
                        // Removes that room from the allActiveRooms array
                        allActiveRooms.splice(allActiveRooms.indexOf(user.room), 1);
                    };
                };
                // Loops through the allActivePublicRooms array
                for (let i = 0; i < allActivePublicRooms.length; i++) {
                    // If the room value of user is equal to any of the array items
                    if (user.room === allActivePublicRooms[i]) {
                        // Removes that room from the allActivePublicRooms array
                        allActivePublicRooms.splice(allActivePublicRooms.indexOf(user.room), 1);
                    };
                };
            };
            io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has left the room`));

            io.to(user.room).emit('userList', {
                users: getUsersInRoom(user.room)
            });

            io.emit('roomList', {
                rooms: allActivePublicRooms
            });
        };

        console.log(`User ${socket.id} disconnected`);
    });

    // Listening for a message event
    socket.on('message', ({ name, text }) => {
        const room = getUser(socket.id)?.room;
        if (room) {
            io.to(room).emit('message', buildMsg(name, text, socket.id));
        };
    });

    // Listen for activity
    socket.on('activity', (name) => {
        const room = getUser(socket.id)?.room;
        if (room) {
            socket.broadcast.to(room).emit('activity', name);
        };
    });
});

function buildMsg(name, text, id) {
    return {
        name,
        text,
        id,
        time: new Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format(new Date())
    };
};

// User functions
function activateUser(id, name, room) {
    const user = { id, name, room };
    UsersState.setUsers([
        ...UsersState.users.filter(user => user.id !== id),
        user
    ]);
    return user;
};

function userLeavesApp(id) {
    UsersState.setUsers(
        UsersState.users.filter(user => user.id !== id)
    );
};

function getUser(id) {
    return UsersState.users.find(user => user.id === id);
};

function getUsersInRoom(room) {
    return UsersState.users.filter(user => user.room === room);
};