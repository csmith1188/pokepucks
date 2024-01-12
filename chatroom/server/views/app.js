/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Code for the frontend serer-side for the chatroom.
\***************************************************************************/
// Defines socket = to a new websocket
const socket = io('http://172.16.3.162:3000/');

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
function sendMessage(e) { // sendMeassage recieves an event which is represented with the letter e
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
    window.location.href = 'http://172.16.3.162:3000/login';

    // Store the state in sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');
};

function logout() {
    window.location.href = 'http://172.16.3.162:3000/logout';
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

        window.location.href = 'http://172.16.3.162:3000/chatroom';
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

        window.location.href = 'http://172.16.3.162:3000/chatroom';
    } else { alert('Please fill in both name and room code fields.') };
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
    if (window.location.href === 'http://172.16.3.162:3000/chatroom') {
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

    window.location.href = 'http://172.16.3.162:3000/lobby';
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