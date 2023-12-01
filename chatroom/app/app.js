/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Filler
\***************************************************************************/

// Defines socket = to a new websocket
const socket = new WebSocket('ws://localhost:3000');

// Function used to send a message
function sendMessage(e) { //sendMeassage recieves an event which is represented with the letter e\
    //Allows you to submit the form without reloading the page
    e.preventDefault();
    // Defines the input and grabs it from the html
    const input = document.querySelector('input');
    // If input has a value
    if (input.value) {
        // Send the value of the input
        socket.send(input.value);
        // Replace the input with nothing
        input.value = "";
    };
    // Puts the focus back on the input
    input.focus();
};

// Selects the form
document.querySelector('form').addEventListener('submit', sendMessage); // listens for the submit event of the form and calls the sendMessage function

// Listen for messages
socket.addEventListener('message', ({ data }) => {
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});