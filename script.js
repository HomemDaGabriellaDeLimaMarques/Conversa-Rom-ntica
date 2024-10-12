const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let currentStep = 0;

const messages = [
    "Oiiiii, tudo bem?",
    "Qual é o seu nome?",
    "Que legal! Qual é a sua cor favorita?",
    "Você gosta de aventuras?",
    "Eu te amo!"
];

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addMessage(userMessage, 'user');
        userInput.value = '';
        setTimeout(nextMessage, 1000); // Aguardar um pouco antes de enviar a próxima pergunta
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática para a última mensagem
}

function nextMessage() {
    currentStep++;
    if (currentStep < messages.length) {
        addMessage(messages[currentStep], 'bot');
    } else {
        endConversation();
    }
}

function endConversation() {
    document.querySelector('.chat-container').innerHTML = `
        <h2>Eu te amo!</h2>
    `;
}
