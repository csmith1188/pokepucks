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

const AUTH_URL = 'http://172.16.3.162:420/oauth';
const THIS_URL = 'http://172.16.3.162:3000/login';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const ADMIN = "YrXoETWEMg5_jKLdAAADtkKSWJqh33L2lrcXAAABWbFLr2OR7EHk719MAAABxkXxW0_R2EuZ7XVXAAAD"; // Make sure this is longer than the maxlength of a username

var allActiveRooms = [];
var allActivePublicRooms = [];

var sessionUser = false;

const app = express(); // Our express server is referred to as app

app.set('view engine', 'ejs');

app.use(
    express.static(path.join(__dirname, "views")), // Defines our static folder so when we get a request to the root domain, it will send eveything to the public directory that will contain the static assets
    session({
        secret: 'super secret string', // replace with environemnt variable later
        resave: false,
        saveUninitialized: false
    }));

app.get('/', (req, res) => {
    res.render('index', { sessionUser: sessionUser });
});

app.get('/login', (req, res) => {
    console.log("Redirecting based on login");
    console.log(`Query Token: ${req.query.token}`);
    if (req.query.token) {
        let tokenData = jwt.decode(req.query.token);
        req.session.token = tokenData;
        req.session.user = tokenData.username;
        sessionUser = req.session.user;
        res.redirect('/');
    } else {
        res.redirect(`${AUTH_URL}?redirectURL=${THIS_URL}`);
    };
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
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:3000", "http://172.16.3.162:3000/"] // Looks at the node environment. If the node environemnt equals production, origin is set to false because we don't want anyone outside of the domain the server is currently on to access it. If it doesn't equal production, origin is set to the address that we will allow to access our socket.io server
    }
});

// Once a connection is established, listen for a socket
io.on('connection', socket => {
    console.log(`User ${socket.id} connected`);

    // Upon connection - only to user
    socket.emit('message', buildMsg(ADMIN, "Welcome to Chat App!"));

    socket.on('enterRoom', ({ name, room, privacy, method }) => {
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

        allActiveRooms.push(room);

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
            allActiveRooms.splice(allActiveRooms.indexOf(room), 1);
            // Loops through the allActiveRooms array
            for (let i = 0; i < allActiveRooms.length; i++) {
                // Checks if any of the array items are equal to the room
                if (room === allActiveRooms[i]) {
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

                    // If a room is private, it removes it from the array
                    if (privacy === 'private') {
                        allActivePublicRooms.splice(allActivePublicRooms.indexOf(room), 1);
                    };

                    // update rooms list for everyone
                    io.emit('roomList', {
                        rooms: allActivePublicRooms,
                    });

                    io.emit('joinConfirmation', { success: true });
                } else {
                    console.log('No room with that code currently active.');
                };
            };
        };
    });

    // When user leaves a room - to all others
    socket.on('leaveRoom', () => {
        const user = getUser(socket.id);
        userLeavesApp(socket.id);

        if (user) {
            socket.leave(user.room);
            if (getUsersInRoom(user.room).length === 0) {
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

        if (user) {
            if (getUsersInRoom(user.room).length === 0) {
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