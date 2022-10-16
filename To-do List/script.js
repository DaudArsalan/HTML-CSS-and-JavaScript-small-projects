let parentList = document.getElementById("parentList");
let input = document.getElementById("input");
input.addEventListener("keyup", enterList);

function enterList(e) {
  if (input.value.length >= 1) {
    if (e?.key == "Enter") {
      createElement(input.value);
      saveLists();

      input.value = "";
    }
  }
}

function createElement(text = "") {
  let newLi = document.createElement("li");
  newLi.classList.add("list");
  newLi.innerHTML = `<p>${text}</p>
  <i onclick='deleteList(this)' class="fa-solid fa-xmark"></i>
  `;

  newLi.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  parentList.appendChild(newLi);
}

function saveLists() {
  let lists = document.querySelectorAll("p");
  let data = [];
  lists.forEach((element) => {
    data.push(element.textContent);
  });
  if (data.length === 0) {
    localStorage.removeItem("todolist");
  } else {
    localStorage.setItem("todolist", JSON.stringify(data));
  }
}

function deleteList(currElement) {
  currElement.parentElement.remove();
  saveLists();
}

(function () {
  const lsLists = JSON.parse(localStorage.getItem("todolist"));
  lsLists.forEach((list) => {
    createElement(list);
  });
})();
