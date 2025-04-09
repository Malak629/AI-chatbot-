function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
  
    if (message === "") return;
  
    const chatBox = document.getElementById("chat-box");
  
    // Add user's message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = message;
    chatBox.appendChild(userDiv);
  
    // Temporary bot response (we’ll replace this with AI later)
    const botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.textContent = "Thanks for your question! (AI will answer soon...)";
    chatBox.appendChild(botDiv);
  
    // Clear input and scroll to bottom
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  