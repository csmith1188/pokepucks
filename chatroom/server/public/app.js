/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Code for the frontend serer-side for the chatroom.
\***************************************************************************/

// Defines socket = to a new websocket
const socket = io('ws://localhost:3500');

const activity = document.querySelector('.activity'); // Selects anything with the activity class in index.html
const msgInput = document.querySelector('input');

// Function used to send a message
function sendMessage(e) { //sendMeassage recieves an event which is represented with the letter e\
    //Allows you to submit the form without reloading the page
    e.preventDefault();
    // If input has a value
    if (msgInput.value) {
        // Emits the value of the msgInput
        socket.emit('message', msgInput.value);
        // Replace the msgInput with nothing
        msgInput.value = "";
    };
    // Puts the focus back on the msgInput
    msgInput.focus();
};

// Selects the form
document.querySelector('form').addEventListener('submit', sendMessage); // listens for the submit event of the form and calls the sendMessage function

// Listen for messages
socket.on('message', (data) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', socket.id.substring(0, 5))
}); // stopped tutorial at 4:02 while writing this code