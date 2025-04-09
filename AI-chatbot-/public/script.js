function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");

  // Show user message
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.textContent = message;
  chatBox.appendChild(userDiv);

  // Show bot typing...
  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";
  botDiv.textContent = "Typing...";
  chatBox.appendChild(botDiv);

  // Scroll
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Call backend API
  fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  })
    .then(res => res.json())
    .then(data => {
      botDiv.textContent = data.reply;
      chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(() => {
      botDiv.textContent = "Sorry, something went wrong.";
    });
}
