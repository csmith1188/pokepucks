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

var privacy = '';

// Function used to send a message
function sendMessage(e) { // sendMeassage recieves an event which is represented with the letter e
    // Allows you to submit the form without reloading the page
    e.preventDefault();
    if (nameInput.value && msgInput.value && chatRoom.value) {
        socket.emit('message', {
            name: nameInput.value,
            text: msgInput.value,
        });
        // Replace the msgInput with nothing
        msgInput.value = "";
    };
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

// Function used for when a user generates a chatroom
function createRoom() {
    privacy = document.getElementById('privacy').value;
    if (nameInput.value) {
        chatRoom.value = generateRoomCode();
        socket.emit('enterRoom', {
            name: nameInput.value,
            room: chatRoom.value,
            privacy: privacy,
            method: 'create'
        });
        lobbyPage.style.visibility = 'hidden';
        chatroomPage.style.visibility = 'visible';
        // Store the roomId in sesssionStorage
        sessionStorage.setItem('chatroomID', chatroom.value);
    };
};

// Function used for when a user enters a chatroom
function joinRoom(e) {
    // Allows you to submit the form without reloading the page
    e.preventDefault();
    if (nameInput.value && chatRoom.value) {
        socket.emit('enterRoom', {
            name: nameInput.value,
            room: chatRoom.value,
            method: 'join'
        });
        socket.on('joinConfirmation', (data) => {
            if (data.success) {
                lobbyPage.style.visibility = 'hidden';
                chatroomPage.style.visibility = 'visible';
                // Store the roomId in sessionStorage
                sessionStorage.setItem('chatroomID', chatroom.value);
            } else {
                console.log('No room with that code currently active.');
            };
        });
    };
};

window.onload = function () {
    const chatroomID = sessionStorage.getItem('chatroomID');
    if (chatroomID) {
        joinRoom(chatroomID);
    }
};

// Function used for when a user leaves a chatroom
function leaveRoom() {
    socket.emit('leaveRoom');

    socket.on('leaveRoomConfirmation', () => {
        lobbyPage.style.visibility = 'visible';
        chatroomPage.style.visibility = 'hidden';
    });
};

if (sessionStorage.getItem('chatroomID')) {
    // Rejoin the chatroom
    socket.emit('rejoin', sessionStorage.getItem('chatroomID'));
};

document.querySelector('.form-msg').addEventListener('submit', sendMessage);
document.querySelector('.form-join').addEventListener('submit', joinRoom);

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', nameInput.value);
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