const socket = io();

// socket.on("countUpdated", (count) => {
//   console.log("Count has been updated", count);
// });
// const increment = document.querySelector("#increment");
// increment.addEventListener("click", () => {
//   console.log("clicked");
//   socket.emit("increment");
// });

document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message);
});

socket.on("message", (msg) => {
  console.log(msg);
});
