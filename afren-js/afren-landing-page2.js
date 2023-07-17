var messageIcon = document.querySelector(".message-icon");
var chatArea = document.querySelector(".chat-area");
var removeChat = document.querySelector(".remove-chat");
var cancel = document.querySelector(".cancel");



messageIcon.addEventListener("click", () => {
    chatArea.classList.add("active")
});
messageIcon.addEventListener("click", () => {
    cancel.classList.add("active")
});

cancel.addEventListener("click", () => {
    chatArea.classList.remove("active")
});
