let mainInput = document.getElementById("mainInput");
let lengthInput = document.getElementById("lengthInput");
let upperInput = document.getElementById("upperInput");
let lowerInput = document.getElementById("lowerInput");
let numberInput = document.getElementById("numberInput");
let symbolInput = document.getElementById("symbolInput");

let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let symbolSet = ")(*&^%$#@!?/";

function getRandomCharacter(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword(password = "") {
  if (upperInput.checked) {
    password += getRandomCharacter(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomCharacter(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomCharacter(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomCharacter(symbolSet);
  }

  if (password.length < lengthInput.value) {
    return generatePassword(password);
  }

  let randomPassword = truncateString(password, lengthInput.value);
  mainInput.value = randomPassword;
}

let button = document.querySelector("button");
button.addEventListener("click", generate);

function generate() {
  generatePassword();
}

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
