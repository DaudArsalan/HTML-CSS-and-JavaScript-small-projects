const boxes = document.getElementsByClassName("box");
const img = document.querySelector(".image");

img.addEventListener("dragstart", (e) => {
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});
img.addEventListener("dragend", (e) => {
  e.target.className = "image";
});

for (box of boxes) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  box.addEventListener("drop", (e) => {
    e.target.append(img);

  });
}
