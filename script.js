document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Add a welcoming message when the page loads
    appendMessage('Esper Chats', 'Welcome to Esper Chats! Feel free to start chatting.');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            appendMessage('User', messageText); // You can replace 'User' with the actual user ID
            messageInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        // Adding the user ID icon using Font Awesome
        messageElement.innerHTML = `<i class="fas fa-user-circle"></i> <strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
