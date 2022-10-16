const body = document.body;
const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.style.transition = "0.3s";
  } else {
    body.classList.add("dark");
    toggleButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
});
