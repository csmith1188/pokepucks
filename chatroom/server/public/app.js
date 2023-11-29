/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Code for the frontend serer-side for the chatroom.
\***************************************************************************/

// Defines socket = to a new websocket
const socket = io('ws://localhost:3500');

const msgInput = document.querySelector('#message'); // Selects anything with the id of message in index.html
const nameInput = document.querySelector('#name'); // Selects anything with the id of name in index.html
const chatRoom = document.querySelector('#room'); // Selects anything with the id of room in index.html
const activity = document.querySelector('.activity'); // Selects anything with the activity class in index.html
const usersList = document.querySelector('.user-list'); // Selects anything with the user-list class in index.html
const roomList = document.querySelector('.room-list'); // Selects anything with the room-list class in index.html
const chatDisplay = document.querySelector('.chat-display'); // Selects anything with the chat-display class in index.html

// Function used to send a message
function sendMessage(e) { //sendMeassage recieves an event which is represented with the letter e\
    // Allows you to submit the form without reloading the page
    e.preventDefault();
    if (nameInput.value && msgInput.value && chatRoom.value) {
        socket.emit('message', {
            "name": nameInput.value,
            "text": msgInput.value,
        });
        // Replace the msgInput with nothing
        msgInput.value = "";
    };
    // Puts the focus back on the msgInput
    msgInput.focus();
};

// Function used for when a user enters a chatroom
function enterRoom(e) {
    // Allows you to submit the form without reloading the page
    e.preventDefault();
    if (nameInput.value && chatRoom.value) {
        socket.emit('enterRoom', {
            "name": nameInput.value,
            "room": chatRoom.value,
        });
    };
};

document.querySelector('.form-msg').addEventListener('submit', sendMessage);
document.querySelector('.form-join').addEventListener('submit', enterRoom);

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', nameInput.value);
});

// Listen for messages
socket.on('message', (data) => {
    activity.textContent = "";
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
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