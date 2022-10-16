let addBtn = document.getElementById("addBtn");
let parentList = document.getElementById("parentList");
let message = document.getElementById("message");
addBtn.addEventListener("click", addNotes);

function addNotes(e) {
  let getValue = addBtn.previousElementSibling.value;
  if (getValue.length >= 3) {
    let newLi = document.createElement("li");
    newLi.classList.add("list");
    newLi.textContent = getValue;
    newLi.innerHTML = ` <h4 id="heading"  class="basicStyling">${getValue}</h4>                   
    <button id="editBtn" onclick="editNotes(this)" class="listBtn basicStyling">Edit</button>
    <button id="deletebtn" onclick="deleteNotes(this)" class="listBtn basicStyling">Delete</button>`;
    parentList.appendChild(newLi);
  } else {
    alert("Warning! Note's Title must be 3 characters or more");
  }

  let addNotes = document.getElementById("addNotes");
  addNotes.value = " ";
  message.style.display = "none";
}

function editNotes(currElement) {
  if (currElement.textContent == "Edit") {
    currElement.textContent = "Add";
    let firstInput = currElement.previousElementSibling.textContent;
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Enter Note's Title";
    newInput.className = "basicStyling newInput";
    newInput.value = firstInput;

    currElement.parentElement.replaceChild(
      newInput,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Edit";
    let firstInput = currElement.previousElementSibling.value;
    let newheading = document.createElement("h4");
    newheading.className = "basicStyling newInput";
    newheading.textContent = firstInput;

    currElement.parentElement.replaceChild(
      newheading,
      currElement.previousElementSibling
    );
  }
}

function deleteNotes(currElement) {
  currElement.parentElement.remove();
  message.style.display = "block";
}
