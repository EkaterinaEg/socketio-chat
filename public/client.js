const socket = io();

function sendMessage() {
  const inputMessage = document.getElementById("inputMessage");
  const message = inputMessage.value;
  inputMessage.value = "";

  socket.emit("chat message", message);
}

socket.on("chat message", (msg) => {
  const messages = document.getElementById("messages");
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});
