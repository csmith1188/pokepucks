/****************************** Script Header ******************************\
Project: PokePucks
Author: Brandon Camacho
Editors: Brandon Camacho

<Description>
Code for the backend server-side for the chatroom.
\***************************************************************************/
/*
// A list for all the required node modules to install
// Make sure terminal is in the server folder
npm i socket.io
npm i express
npm i -D nodemon (Not required but makes editing this file much more convenient. Nodemon will restart the server automatically every time you save the server.)
// Start the server by using 'npm start' while in the server folder
*/

import express from 'express';
import { Server } from "socket.io";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3500;
// Stopped tutorial here where the nodejs part starts - 15:20

const app = express(); // Our express server is referred to as app

app.use(express.static(path.join(__dirname, "public"))); // Defines our static folder so when we get a request to the root domain, it will send eveything to the public directory that will contain the static assets

const expressServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// Grabs the server imported from socket.io, gives it the expressServer, and gives it options
const io = new Server(expressServer, {
    cors: {
        // origin allows you to change what is accepted and what is blocked
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"] // Looks at the node environment. If the node environemnt equals production, origin is set to false because we don't want anyone outside of the domain the server is currently on to access it. If it doesn't equal production, origin is set to the address that we will allow to access our socket.io server
    }
})

// Once a connection is established, listen for a socket
io.on('connection', socket => {
    console.log(`User ${socket.id} connected`);

    // Upon connection - only to user
    socket.emit('message', "Welcome to Chat App!");

    // Upon connection - to all others
    socket.broadcast.emit('message', `User ${socket.id.substring(0, 5)} connected`);

    // Listening for a message event
    socket.on('message', data => {
        console.log(data);
        io.emit('message', `${socket.id.substring(0, 5)}: ${data}`); // Emits the message to everyone that is connected to the server
    });

    // When user disconnects - to all others
    socket.on('disconnect', () => {
        socket.broadcast.emit('message', `User ${socket.id.substring(0, 5)} disconnected`);
    });

    // Listen for activity
    socket.on('activity', (name) => {
        socket.broadcast.emit('activity', name);
    });
});