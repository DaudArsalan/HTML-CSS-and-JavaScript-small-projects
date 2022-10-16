class library {
  constructor(bookName, authorName, typeOfBook) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.typeOfBook = typeOfBook;
  }
}

class Display {
  validate(book) {
    if (book.bookName.length < 3 || book.authorName.length < 3) {
      return false;
    } else {
      return true;
    }
  }

  add(book) {
    let tableBody = document.getElementById("tableBody");
    let newTr = document.createElement("tr");
    newTr.classList.add("newTr");
    newTr.innerHTML = `
        <td>${book.bookName}</td>
        <td>${book.authorName}</td>
        <td>${book.typeOfBook}</td>
       <td> <i onclick="deleteBook(this)" class="fa-solid fa-xmark"></i></td>
        `;
    tableBody.appendChild(newTr);
  }
  clear() {
    let form = document.getElementById("form");
    form.reset();
  }

  show(type, displayMessage) {
    let message = document.getElementById("message");
    let text;

    if (type == "success") {
      text = "Success";
    } else {
      text = "Error";
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${text}: </strong> ${displayMessage} </div>`;

    setTimeout(function () {
      message.innerHTML = ``;
    }, 3000);
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;
  let typeOfBook;

  let fiction = document.getElementById("fiction");
  let crime = document.getElementById("crime");
  let horror = document.getElementById("horror");

  if (fiction.checked) {
    typeOfBook = fiction.value;
  } else if (crime.checked) {
    typeOfBook = crime.value;
  } else if (horror.checked) {
    typeOfBook = horror.value;
  }

  let book = new library(bookName, authorName, typeOfBook);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your book has been successfully added");
  } else {
    display.show("danger", "Sorry you cannot add this book");
  }
}

function deleteBook(currElement) {
  currElement.parentElement.parentElement.remove();
}
