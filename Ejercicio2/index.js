let BTN = document.querySelector("button");
let MSGBOT = document.getElementById("msg_bot");
let INPUTA = document.getElementById("input_a");
let INPUTB = document.getElementById("input_b");
let INPUTC = document.getElementById("input_c");

BTN.addEventListener("click", () => {
  let total =
    parseInt(INPUTA.value) + parseInt(INPUTB.value) + parseInt(INPUTC.value);
  const message =
    total > 10
      ? "Llevas demasiados stickers"
      : `Llevas ${total} stickers :D buen día !!`;
  MSGBOT.innerHTML = message;
});
