/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Filler
\***************************************************************************/
/*
// A list for all the required node modules to install
// Make sure terminal is in the server folder
npm i ws
// Start the server by using 'npm start' or live server on /chatroom/app/index.html
*/

const ws = require('ws'); // Makes a dependency for the websockets module
const server = new ws.Server({ port: '3000' }); // Makes a new server which runs on port 3000

// Once a connection is established, listen for a socket
server.on('connection', socket => {
    // Listens for a message
    socket.on('message', message => {
        const b = Buffer.from(message);
        // Logs and sends the same message back
        console.log(message);
        socket.send(`${message}`);
    });
});