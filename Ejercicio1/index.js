let borderOn = false;
document.querySelector("img").addEventListener("click", () => {
  document.querySelector("img").style.border = (borderOn = !borderOn)
    ? "2px solid red"
    : "none";
});
