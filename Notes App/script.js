let mainBox = document.getElementById("mainBox");
let button = document.getElementById("btn");
button.addEventListener("click", addNotes);

// Add Notes Function
function addNotes(e, text = "") {
  let newNotesBox = document.createElement("div");
  newNotesBox.classList.add("notesBox");
  newNotesBox.innerHTML = `
     <div class="toolBar">
       <i  onclick="saveNotes(this)" class="fa-solid fa-floppy-disk"></i>
       <i  onclick="deleteNotes(this)" class="fa-solid fa-trash-can"></i>
     </div>
     <textarea onfocusout="save(this)" placeholder="Enter Note's">${text}</textarea>
   `;
  mainBox.appendChild(newNotesBox);
  saveNotes();
}

// Delete Notes Function
function deleteNotes(currElement) {
  currElement.parentElement.parentElement.remove();
  saveNotes();
}

// Save Notes Function
function saveNotes() {
  let notes = document.querySelectorAll("textarea");
  let data = [];
  notes.forEach((element) => {
    data.push(element.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("note");
  } else {
    localStorage.setItem("note", JSON.stringify(data));
  }
}

// Event listener
function save(e) {
  saveNotes();
}

// Self Calling Function for checking local storage Data
(function () {
  let lsNotes = JSON.parse(localStorage.getItem("note"));
  if (lsNotes == null) {
    addNotes();
  } else {
    lsNotes.forEach((lsNotes) => {
      addNotes("", lsNotes);
    });
  }
})();
