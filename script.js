const socket = io(); // Connect to the WebSocket server

function sendMessage() {
    const message = document.getElementById('messageText').value.trim();
    if (message !== '') {
        const currentTime = new Date().toLocaleTimeString();
        const formattedMessage = `<strong>You</strong> - ${currentTime}: ${message}`;
        socket.emit('message', formattedMessage); // Send the message to the server
        document.getElementById('messageText').value = '';
    }
}

// Listen for incoming messages from the server
socket.on('message', (message) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    document.getElementById('messages').appendChild(messageElement);
});
