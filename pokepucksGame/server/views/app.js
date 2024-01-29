/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho, Logan Cruz
Editors: Brandon Camacho, Logan Cruz

<Description>
Code for the frontend serer-side for the PokePucks game.
\***************************************************************************/
// Chatroom Code
// Define the urls
const ROOT_URL = 'http://172.16.3.162:3000/'; // 'http://ipAddressOfThisServer:port/';
const LOGIN_URL = 'http://172.16.3.162:3000/login'; // 'http://ipAddressOfThisServer:port/login';
const LOGOUT_URL = 'http://172.16.3.162:3000/logout'; // 'http://ipAddressOfThisServer:port/logout';
const LOBBY_URL = 'http://172.16.3.162:3000/lobby'; // 'http://ipAddressOfThisServer:port/lobby';
const CHATROOM_URL = 'http://172.16.3.162:3000/chatroom'; // 'http://ipAddressOfThisServer:port/chatroom';

// Defines socket = to a new websocket
const socket = io(ROOT_URL);

const msgInput = document.querySelector('#message');
const nameInput = document.querySelector('#name');
const chatRoom = document.querySelector('#room');
const activity = document.querySelector('.activity');
const usersList = document.querySelector('.user-list');
const chatDisplay = document.querySelector('.chat-display');

const loginPage = document.getElementById('login-page');
const lobbyPage = document.getElementById('lobby-page');
const chatroomPage = document.getElementById('chatroom-page');

var username = '';
var roomCode = '';
var privacy = '';
var method = '';

// Function used to send a message
function sendMessage(e) { // sendMessage recieves an event which is represented with the letter e
    // Allows you to submit the form without reloading the page
    e.preventDefault();
    socket.emit('message', {
        name: username,
        text: msgInput.value,
    });
    // Replace the msgInput with nothing
    msgInput.value = "";
    // Puts the focus back on the msgInput
    msgInput.focus();
};

// Generates room code used to enter a chatroom
function generateRoomCode() {
    let roomCode = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        roomCode += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;
    };
    return roomCode;
};

// Function used for pressing the login button
function login() {
    window.location.href = LOGIN_URL;

    // Store the state in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
};

function logout() {
    window.location.href = LOGOUT_URL;
};

function createRoom() {
    if (nameInput.value) {
        username = nameInput.value;
        chatRoom.value = generateRoomCode();
        roomCode = chatRoom.value;
        privacy = document.getElementById('privacy').value;
        method = 'create';

        // Store the values in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('roomCode', roomCode);
        sessionStorage.setItem('privacy', privacy);
        sessionStorage.setItem('method', method);

        window.location.href = CHATROOM_URL;
    };
};

// Function used for when a user generates a chatroom
function enterRoomCreate() {
    socket.emit('enterRoom', {
        name: username,
        room: roomCode,
        privacy: privacy,
        method: method
    });
    sessionStorage.setItem('method', 'join');
};

function joinRoom() {
    if (nameInput.value && chatRoom.value) {
        username = nameInput.value;
        roomCode = chatRoom.value;
        method = 'join';

        // Store the values in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('roomCode', roomCode);
        sessionStorage.setItem('method', method);

        // Emit 'enterRoom' event and wait for server response
        socket.emit('enterRoom', { name: username, room: roomCode, method: method }, (error) => {
            if (error) {
                alert(error);
            } else {
                // Only navigate to the chatroom page if there is no error
                window.location.href = CHATROOM_URL;
            }
        });
    } else { alert('Please fill in both name and room code fields.') };
};

function enterRoomClicked(roomCodeClicked) {
    if (!nameInput.value) {
        alert('Please fill in the name field.');
        return;
    }

    document.getElementById('room').value = roomCodeClicked || '';
    document.getElementById('join').click();

    username = nameInput.value;
    roomCode = roomCodeClicked;
    method = 'join';

    // Store the values in sessionStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('roomCode', roomCode);
    sessionStorage.setItem('method', method);

    window.location.href = CHATROOM_URL;
};

// Function used for when a user enters a chatroom
function enterRoomJoin() {
    socket.emit('enterRoom', {
        name: username,
        room: roomCode,
        method: method
    });
};

window.onload = function () {
    if (window.location.href === CHATROOM_URL) {
        // Retrieve the values from sessionStorage
        username = sessionStorage.getItem('username');
        roomCode = sessionStorage.getItem('roomCode');
        privacy = sessionStorage.getItem('privacy');
        method = sessionStorage.getItem('method');

        switch (method) {
            case 'create':
                enterRoomCreate();
                break;
            case 'join':
                enterRoomJoin();
                break;
            default:
                console.log('Error: No method given');
        };
    };
};

// Function used for when a user leaves a chatroom
function leaveRoom() {
    socket.emit('leaveRoom');
    socket.on('leaveRoomConfirmation', () => {
    });

    window.location.href = LOBBY_URL;
};

document.querySelector('.form-msg').addEventListener('submit', sendMessage);

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', username);
});

// Listen for messages
socket.on('message', (data) => {
    activity.textContent = "";
    const { name, text, id, time } = data;

    const li = document.createElement('li');
    li.className = 'post';
    if (id === socket.id) li.className = 'post post--left';
    if (id !== socket.id && name !== 'YrXoETWEMg5_jKLdAAADtkKSWJqh33L2lrcXAAABWbFLr2OR7EHk719MAAABxkXxW0_R2EuZ7XVXAAAD') li.className = 'post post--right';
    if (name !== 'YrXoETWEMg5_jKLdAAADtkKSWJqh33L2lrcXAAABWbFLr2OR7EHk719MAAABxkXxW0_R2EuZ7XVXAAAD') {
        li.innerHTML = `<div class="post__header ${id === socket.id
            ? 'post__header--user'
            : 'post__header--reply'
            }">
            <span class="post__header--name">${name}</span>
            <span class="post__header--time">${time}</span>
            </div>
            <div class="post__text">${text}</div>`
    } else {
        li.innerHTML = `<div class ="post__text">${text}</div>`
    };
    document.querySelector('.chat-display').appendChild(li);

    chatDisplay.scrollTop = chatDisplay.scrollHeight;
});

let activityTimer;
socket.on('activity', (name) => {
    activity.textContent = `${name} is typing...`

    // Clear after 3 seconds
    clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
        activity.textContent = "";
    }, 3000);
});

socket.on('userList', ({ users }) => {
    showUsers(users);
});

socket.on('roomList', ({ rooms }) => {
    showRooms(rooms);
});

socket.on('joinError', function (data) {
    alert(data.message);
});

function showUsers(users) {
    usersList.textContent = '';
    if (users) {
        usersList.innerHTML = `<em>Users in ${chatRoom.value}:</em>`;
        users.forEach((user, i) => {
            usersList.textContent += ` ${user.name}`;
            if (users.length > 1 && i !== users.length - 1) {
                usersList.textContent += ",";
            };
        });
    };
};

// Start Test
// // PokePucks Game Code
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// ctx.font = '20px Arial';
// document.getElementById('canvas').width = window.innerWidth
// document.getElementById('canvas').height = window.innerHeight
// ctx.fillStyle = 'silver';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

// function objectsAreEqual(a, b) {
//     return JSON.stringify(a) === JSON.stringify(b);
// }

// var tempArena = [];
// class Game {
//     constructor() {
//         this.players = [new Player([], [], [], 0), new Player([], [], [], 0, undefined)];
//         this.stage = 'setup';
//         this.phase = 0;
//         this.stepcount = 0;
//         this.arena = [];
//         this.turn = 0;
//     }

//     step() {
//         switch (this.stage) {
//             case 'setup':
//                 this.stage_setup();
//                 break;
//             case 'loop':
//                 this.stage_loop();
//                 break;
//             case 'end':
//                 this.stage_end();
//                 break;
//             default:
//                 break;
//         }

//     }

//     stage_setup() {
//         switch (this.phase) {
//             case 0: // Decide players
//                 this.phase++;
//                 console.log(this.players[0])
//                 console.log(this.players[1])
//                 break;
//             case 1: // Decide Special Rules
//                 this.phase++;
//                 break;
//             case 2: // Build health stack
//                 // for each player, add 14 pogs to their health stack
//                 if (this.players[0].hp.length == 0 && this.players[1].hp.length == 0) {


//                     for (let i = 0; i < this.players.length; i++) {

//                         for (let j = 0; j < 15; j++) {
//                             console.log(this.players[i].hp);
//                             this.players[i].hp.push(new Puck('pog', 1, 'down'));

//                         }
//                     }
//                 }
//                 ctx.fillStyle = 'silver';
//                 ctx.fillRect(0, 0, canvas.width, canvas.height);
//                 console.log(this.players[0].hp.length)
//                 ctx.fillStyle = 'white';
//                 ctx.font = '40px Arial';
//                 ctx.fillText(`Player 1 Hp Stack ${this.players[0].hp.length}`, 100, 100);
//                 console.log(this.players[1].hp.length)
//                 ctx.fillStyle = 'white';
//                 ctx.font = '40px Arial';
//                 ctx.fillText(`Player 2 Hp Stack ${this.players[1].hp.length}`, 100, 200);
//                 this.phase++;
//                 break;
//             case 3: // Build arena
//                 // while arena is < 8, each player pops 1 from hp to arena
//                 while (this.arena.length < 8) {
//                     this.arena.push(this.players[0].hp.pop());
//                     this.arena.push(this.players[1].hp.pop());
//                 }
//                 this.phase++;
//                 break;
//             case 4: // Pick a slammer
//                 // each player picks a slammer
//                 this.players[0].Slammer = new Slammer('slammer', 1, 'down');
//                 this.players[1].Slammer = new Slammer('slammer', 1, 'down');
//                 this.phase++;
//                 break;
//         }
//         if (this.phase > 4) {
//             this.stage = 'loop';
//             this.phase = 0;
//         }
//     }

//     stage_loop() {
//         switch (this.phase) {
//             case 0: // Top off
//                 console.log('case 0 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 // while arena is < 8, player pops 1 from hp to arena
//                 // if player has no pogs in their stack, stop and put into critical
//                 while (this.arena.length < 8) {
//                     if (this.players[0].hp.length == 0) {
//                         break
//                     }

//                     if (this.turn == 0) {

//                         if (this.players[0].hp.length > 0) {
//                             this.arena.push(this.players[0].hp.pop());
//                             console.log('testing your mom 1')
//                         }
//                     }
//                     if (this.players[1].hp.length == 0) {
//                         break
//                     }
//                     else {
//                         if (this.players[1].hp.length > 0) {
//                             this.arena.push(this.players[1].hp.pop());
//                             console.log('testing your mom 2')
//                         }
//                     }
//                 }
//                 this.phase++;
//                 break;
//             case 1:// Knockout
//                 console.log('case 1 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 // if player has no pogs in their stack, move that player's slammer into the center.
//                 if (this.players[0].hp.length <= 0) {
//                     console.log('this should not run')
//                     this.players[0].hp = [];
//                     tempArena = this.arena;
//                     this.arena = [];
//                     this.arena.push(this.players[0].Slammer);

//                 }
//                 if (this.players[1].hp.length <= 0) {
//                     console.log('this should not run')
//                     this.players[1].hp = [];
//                     this.arena = [];
//                     this.arena.push(this.players[1].Slammer);
//                 }
//                 this.phase++;
//                 break;
//             case 2:// Count Attacks
//                 console.log('case 2 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 //Each player gets the bare minimum of 1 attack, before checking for abilities, status, and other special rules.
//                 this.players[0].attacks = 1;
//                 this.players[1].attacks = 1;
//                 ctx.fillStyle = 'silver';
//                 ctx.fillRect(0, 0, canvas.width, canvas.height);
//                 console.log(this.players[0].hp.length)
//                 ctx.fillStyle = 'white';
//                 ctx.font = '40px Arial';
//                 ctx.fillText(`Player 1 Hp Stack ${this.players[0].hp.length}`, 100, 100);
//                 console.log(this.players[1].hp.length)
//                 ctx.fillStyle = 'white';
//                 ctx.font = '40px Arial';
//                 ctx.fillText(`Player 2 Hp Stack ${this.players[1].hp.length}`, 100, 200);
//                 this.phase++;
//                 break;
//             case 3://Make Attacks
//                 console.log('case 3 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 //The current player makes an attack, then the other player makes an attack. Repeat until all attacks have been made. 
//                 //If a player has flipped over pogs in the arena, pick them up and place it in prize, the rest that have been knocked
//                 // over are placed back into the arena.

//                 let power
//                 if (this.turn == 0) {
//                     while (this.players[0].attacks > 0) {
//                         console.log('Man Im dead')
//                         console.log(this.players[0].attacks);
//                         power = this.players[this.turn].Slammer.attack();

//                         let slammerInArena = false;
//                         for (let i = 0; i < this.arena.length; i++) {
//                             console.log('Arena Slammer:', this.arena[i]);
//                             console.log('Player Slammer:', this.players[this.turn].Slammer);
//                             if (objectsAreEqual(this.arena[i], this.players[this.turn].Slammer)) {
//                                 console.log('test');
//                                 slammerInArena = true;
//                                 break;
//                             }
//                         }

//                         console.log('slammerInArena:', slammerInArena);
//                         console.log('this.turn:', this.turn);
//                         if (slammerInArena && this.turn == 0) {
//                             console.log('slammer up maybe');
//                             let power1 = this.players[1].Slammer.attack();
//                             if (power > power1) {
//                                 this.players[1].Slammer.side = 'up';
//                             }
//                         }
//                         if (!slammerInArena) {
//                             console.log('bruh');
//                             for (let i = this.arena.length - 1; i >= 0; i--) {
//                                 if (this.arena[i] && typeof this.arena[i].flip === 'function') {
//                                     let flipnum = this.arena[i].flip();
//                                     console.log('power:', power);
//                                     console.log('flipnum:', flipnum);
//                                     if (power > flipnum) {
//                                         this.arena[i].side = 'up';
//                                         this.players[this.turn].prize.push(this.arena[i]);
//                                         this.arena.splice(i, 1);
//                                         console.log('test')
//                                     }
//                                 }
//                             }
//                         }
//                         this.players[this.turn].attacks--
//                     }
//                 }
//                 else {
//                     while (this.players[1].attacks > 0) {

//                         power = this.players[this.turn].Slammer.attack();
//                         if (this.arena == this.players[this.turn].Slammer && this.turn == 1) {
//                             let power1 = this.players[0].Slammer.attack();
//                             if (power > power1) {
//                                 this.players[0].Slammer.side = 'up';
//                             }
//                         }
//                         if (this.arena != this.players[this.turn].Slammer) {
//                             for (let i = this.arena.length - 1; i >= 0; i--) {
//                                 if (this.arena[i] && typeof this.arena[i].flip === 'function') {
//                                     let flipnum = this.arena[i].flip();
//                                     console.log('power:', power);
//                                     console.log('flipnum:', flipnum);
//                                     if (power > flipnum) {
//                                         this.arena[i].side = 'up';
//                                         this.players[this.turn].prize.push(this.arena[i]);
//                                         this.arena.splice(i, 1);
//                                         console.log('test')
//                                     }
//                                 }
//                             }
//                         }
//                         this.players[this.turn].attacks--;
//                     }
//                 }

//                 this.phase++;
//                 break;
//             case 4://Discard pucks
//                 console.log('case 4 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 //If a player wants to use a puck, remove that puck from the power stack and place it in the discard pile, while
//                 //checking rules for that puck, and special rules.
//                 if (this.turn == 0) {
//                     this.turn = 1;
//                 }
//                 else {
//                     this.turn = 0;
//                 }
//                 this.phase++;
//                 break;
//             case 5://Check for winner
//                 console.log('case 5 test');
//                 console.log(this.players[0].Slammer.side);
//                 console.log(this.players[1].Slammer.side);
//                 //If player is the only player remaining with either hp or non flipped slammer, they win.
//                 if (this.players[0].hp.length == 0 && this.players[0].Slammer.side == 'up') {
//                     this.stage = 'end';
//                     console.log('player 2 wins');
//                 }
//                 if (this.players[1].hp.length == 0 && this.players[1].Slammer.side == 'up') {
//                     this.stage = 'end';
//                     console.log('player 1 wins');
//                 }
//                 this.arena = tempArena;
//                 this.phase++;
//                 break;
//         }
//         if (this.phase > 5 && this.stage == 'loop') {
//             this.stage = 'loop';
//             this.phase = 0;
//         }
//         if (this.stage == 'end') {
//             this.phase = 0;
//         }
//     }
//     stage_end() {
//         // if player 1 wins, display player 1 wins
//         if (this.players[1].hp.length == 0 && this.players[1].Slammer.side == 'up') {
//             ctx.fillText(`Player 1 Wins`, 400, 400);
//         };
//         if (this.players[0].hp.length == 0 && this.players[0].Slammer.side == 'up') {
//             ctx.fillText(`Player 2 Wins`, 400, 400);
//         };
//     };
// };

// const game = new Game();
// function startGame() {
//     game.step();
//     console.log(game);
// };

// function stepGame() {
//     game.step();
//     console.log(game);
// };

let gameStarted = false;

function gameStart() {
    if (!gameStarted) {
        socket.emit('gameStart', {});
        gameStarted = true;
    }
};

function stepGameClient() {
    fetch('/step-game', {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
};