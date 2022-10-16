let button = document.querySelector("button");
let hexCode = document.querySelector("p");
document.querySelector(".box").style.backgroundColor = "white";
button.addEventListener("click", generateColor);

function generateColor(e) {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let hexNumber = "#" + randomNumber.toString(16);
  hexCode.textContent = hexNumber;
  document.body.style.backgroundColor = hexNumber;
  navigator.clipboard.writeText(hexNumber);
}

generateColor();
