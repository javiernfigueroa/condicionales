let BTN = document.querySelector("button");
let SELECTA = document.getElementById("select_a");
let SELECTB = document.getElementById("select_b");
let SELECTC = document.getElementById("select_c");
let MSG = document.getElementById("msg");

BTN.addEventListener("click", function () {
  if (SELECTA.value == 9 && SELECTB.value == 1 && SELECTC.value == 1) {
    MSG.innerHTML = "password 1 correcto";
  } else if (SELECTA.value == 7 && SELECTB.value == 1 && SELECTC.value == 4) {
    MSG.innerHTML = "password 2 correcto";
  } else {
    MSG.innerHTML = "password incorrecto";
  }
});
