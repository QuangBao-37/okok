
function toggleChat() {
  const container = document.getElementById("chatContainer");
  container.style.display = container.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const userText = input.value.trim();
  if (!userText) return;

  const userMessage = `<div><strong>Bạn:</strong> ${userText}</div>`;
  chatBox.innerHTML += userMessage;

  // Simple rule-based responses
  let reply = "Xin lỗi, mình chưa hiểu bạn nói gì.";
  if (userText.toLowerCase().includes("xin chào")) {
    reply = "Chào bạn, mình là Quang Bảo!";
  } else if (userText.toLowerCase().includes("bạn là ai")) {
    reply = "Mình là một nhà phát triển web.";
  } else if (userText.toLowerCase().includes("bạn làm gì")) {
    reply = "Mình làm website cá nhân, portfolio và các dự án web đẹp.";

  }

  const botMessage = `<div><strong>Bot:</strong> ${reply}</div>`;
  chatBox.innerHTML += botMessage;
  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}
