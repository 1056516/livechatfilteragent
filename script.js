const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('User connected');

    // Handle incoming messages
    socket.on('message', (message) => {
        // Process the message (e.g., store in a database)
        // Broadcast the message to all connected clients
        io.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
