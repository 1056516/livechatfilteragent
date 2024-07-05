function sendMessage() {
    const message = document.getElementById('messageText').value.trim();
    if (message !== '') {
        const currentTime = new Date().toLocaleTimeString();
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>You</strong> - ${currentTime}: ${message}`;
        document.getElementById('messages').appendChild(messageElement);
        document.getElementById('messageText').value = '';
    }
}
