let namee = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let rePassword = document.getElementById("rePassword");
let checkbox = document.getElementById("checkbox");
validName = false;
validEmail = false;
validPassword = false;
validRePassword = false;
validCheckbox = false;

namee.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  let str = namee.value;
  if (regex.test(str)) {
    let invalidName = document.getElementById("invalidName");
    invalidName.innerHTML = ``;
    validName = true;
  } else {
    let invalidName = document.getElementById("invalidName");
    invalidName.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> You must enter your full name, only Alphabets`;
    validName = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^([\-\_\.0-9a-zA-Z])+@+([a-zA-z])+\.+[a-zA-z][^0-9]{2,7}/;
  let str = email.value;
  if (regex.test(str)) {
    let invalidEmail = document.getElementById("invalidEmail");
    invalidEmail.innerHTML = ``;
    validEmail = true;
  } else {
    let invalidEmail = document.getElementById("invalidEmail");
    invalidEmail.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Your email must be a valid email`;
    validEmail = false;
  }
});

password.addEventListener("blur", () => {
  let regex = /[\~\!\/\@\#\$\%\^\&\*a-zA-Z0-9]{8}/;
  let str = password.value;
  if (regex.test(str)) {
    let invalidPassword = document.getElementById("invalidPassword");
    invalidPassword.innerHTML = ``;
    validPassword = true;
  } else {
    let invalidPassword = document.getElementById("invalidPassword");
    invalidPassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Your password must contain 8 characters or more, numbers, alphabats and symbols`;
    validPassword = false;
  }
});

rePassword.addEventListener("blur", () => {
  if (rePassword.value === password.value) {
    let invalidRePassword = document.getElementById("invalidRePassword");
    invalidRePassword.innerHTML = ``;
    validRePassword = true;
  } else {
    let invalidRePassword = document.getElementById("invalidRePassword");
    invalidRePassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Your password cannot be matched`;
    validRePassword = false;
  }
});

let showPassword = document.getElementById("showPassword");
showPassword.addEventListener("click", (e) => {
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML = `<i class="fa-solid fa-eye" style="cursor: pointer"></i>`;
  } else {
    password.type = "password";
    showPassword.innerHTML = ` <i class="fa-solid fa-eye-slash" style="cursor: pointer"></i>`;
  }
});

let showRePassword = document.getElementById("showRePassword");
showRePassword.addEventListener("click", (e) => {
  if (rePassword.type === "password") {
    rePassword.type = "text";
    showRePassword.innerHTML = `<i class="fa-solid fa-eye" style="cursor: pointer"></i>`;
  } else {
    rePassword.type = "password";
    showRePassword.innerHTML = ` <i class="fa-solid fa-eye-slash" style="cursor: pointer"></i>`;
  }
});

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    let invalidCheckbox = document.getElementById("invalidCheckbox");
    invalidCheckbox.innerHTML = ``;
    validCheckbox = true;
  } else {
    let invalidCheckbox = document.getElementById("invalidCheckbox");
    invalidCheckbox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> You must accept the Terms of service`;
    validCheckbox = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validName &&
    validEmail &&
    validPassword &&
    validRePassword &&
    validCheckbox
  ) {
    let success = document.getElementById("success");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<strong>Successfully Signup !</strong> Welcome to our community. We are happy to have you on board`;
    newDiv.classList.add("success");
    success.appendChild(newDiv);
    setTimeout(() => {
      success.innerHTML = ``;
    }, 2000);

    let input = document.querySelectorAll("input");
    input.forEach((input) => {
      input.value = ``;
      input.checked = false;
    });
  } else {
    let error = document.getElementById("error");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<strong>Signup Failed !</strong> Please enter all the field correctly`;
    newDiv.classList.add("error");
    error.appendChild(newDiv);
    setTimeout(() => {
      error.innerHTML = ``;
    }, 2000);
  }
});
