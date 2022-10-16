const buttons = document.querySelectorAll(".click-btn");
const inputItems = document.getElementById("input-items");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    enterValues(button.dataset.val);
  });
});

const clearEntryBtn = document.getElementById("clear-entry-btn");
clearEntryBtn.addEventListener("click", () => {
  clearEntry();
});

const clearAllBtn = document.getElementById("all-clear-btn");
clearAllBtn.addEventListener("click", () => {
  clearAll();
});

const equalBtn = document.getElementById("equal-btn");
equalBtn.addEventListener("click", () => {
  try {
    result = eval(inputItems.innerText);
    inputItems.innerText = result;
  } catch (error) {
    inputItems.innerText = "*Syntax Error*";
    inputItems.style.fontSize = "2rem";
    inputItems.style.color = "red";

    setTimeout(() => {
      inputItems.innerText = "";
      inputItems.style.color = "white";
    }, 1500);
  }
});

const clearAll = () => {
  inputItems.innerText = "";
};

const clearEntry = () => {
  inputItems.innerText = inputItems.innerText.toString().slice(0, -1);
};

const enterValues = (value) => {
  if (inputItems.innerText.length < 39) {
    inputItems.innerText += value;
  }
};
