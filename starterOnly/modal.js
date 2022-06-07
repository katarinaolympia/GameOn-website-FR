function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const inputSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector("#modal-confirmation");
const modalConfirmationCloseBtn = document.querySelectorAll(".btn-close");

// DOM Error Message

const errorMessageFirst = document.querySelector("#error-message-first");
const errorMessageLast = document.querySelector("#error-message-last");
const errorMessageEmail = document.querySelector("#error-message-email");
const errorMessageBirthDate = document.querySelector(
  "#error-message-birthdate"
);
const errorMessageNumber = document.querySelector("#error-message-number");
const errorMessageLocation = document.querySelector("#error-message-location");
const errorMessageCheckbox = document.querySelector("#error-message-checkbox");

// launch modal event (1)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form (1)
function launchModal() {
  modalbg.style.display = "block";
}

// closing modal form (1)
modalCloseBtn.forEach((btn) => btn.addEventListener("click", modalClose));

function modalClose() {
  modalbg.style.display = "none";
}

// Form input implementation
const checkFirstName = function (inputName) {
  if (inputName.length < 2 || inputName === "") {
    errorMessageFirst.style.display = "inline-block";
    document.querySelector(".error-outline-first").style.outline =
      "1px solid red";
    return false;
  }
  errorMessageFirst.style.display = "none";
  document.querySelector(".error-outline-first").style.outline = "none";
  return true;
};

const checkLastName = function (lastNameInput) {
  if (lastNameInput.length < 2 || lastNameInput === "") {
    errorMessageLast.style.display = "inline-block";
    document.querySelector(".error-outline-last").style.outline =
      "1px solid red";
    return false;
  } else {
    errorMessageLast.style.display = "none";
    document.querySelector(".error-outline-last").style.outline = "none";
    return true;
  }
};

const checkEmail = function (emailInput) {
  const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (validRegex.test(emailInput)) {
    errorMessageEmail.style.display = "none";
    document.querySelector(".error-outline-email").style.outline = "none";
    return true;
  } else {
    errorMessageEmail.style.display = "inline-block";
    document.querySelector(".error-outline-email").style.outline =
      "1px solid red";
    return false;
  }
};

const checkBirthDate = function (birthdateInput) {
  let birthdate = new Date(birthdateInput);

  if (
    birthdateInput === "" ||
    birthdate.getFullYear() > 2022 ||
    birthdate.getFullYear() < 1932
  ) {
    errorMessageBirthDate.style.display = "inline-block";
    document.querySelector(".error-outline-birthdate").style.outline =
      "1px solid red";
    return false;
  } else {
    errorMessageBirthDate.style.display = "none";
    document.querySelector(".error-outline-birthdate").style.outline = "none";
    return true;
  }
};

const checkNumberOfGame = function (quantityInput) {
  if (
    quantityInput.isNan ||
    quantityInput === "" ||
    quantityInput > 99 ||
    quantityInput < 0
  ) {
    errorMessageNumber.style.display = "inline-block";
    document.querySelector(".error-outline-number").style.outline =
      "1px solid red";
    return false;
  } else {
    errorMessageNumber.style.display = "none";
    document.querySelector(".error-outline-number").style.outline = "none";
    return true;
  }
};

const checkLocation = function () {
  if (
    document.getElementById("location1").checked ||
    document.getElementById("location2").checked ||
    document.getElementById("location3").checked ||
    document.getElementById("location4").checked ||
    document.getElementById("location5").checked ||
    document.getElementById("location6").checked
  ) {
    errorMessageLocation.style.display = "none";
    return true;
  } else {
    errorMessageLocation.style.display = "inline-block";
    return false;
  }
};

const checkCheckbox = function (checkboxInput) {
  if (document.getElementById("checkbox1").checked) {
    errorMessageCheckbox.style.display = "none";
    return true;
  } else {
    errorMessageCheckbox.style.display = "inline-block";
    return false;
  }
};

// form validation
inputSubmit.addEventListener("click", (event) => {
  // DOM Let elements
  event.preventDefault();
  let firstNameValue = document.querySelector("#first").value;
  let lastNameValue = document.querySelector("#last").value;
  let emailValue = document.querySelector("#email").value;
  let birthdateValue = document.querySelector("#birthdate").value;
  let quantityValue = document.querySelector("#quantity").value;

  if (
    checkFirstName(firstNameValue) === true &&
    checkLastName(lastNameValue) === true &&
    checkEmail(emailValue) === true &&
    checkBirthDate(birthdateValue) === true &&
    checkNumberOfGame(quantityValue) === true &&
    checkLocation() === true &&
    checkCheckbox() === true
  ) {
    return launchModalConfirmation();
    // return launchModalConfirmation();
  }
});

// launch modal confirmation form (2)
function launchModalConfirmation() {
  modalbg.style.display = "none";
  modalConfirmation.style.display = "block";
}

// closing modal confirmation form (2)
modalCloseBtn.forEach((btn) =>
  btn.addEventListener("click", modalCloseConfirmation)
);

modalConfirmationCloseBtn.forEach((btn) =>
  btn.addEventListener("click", modalCloseConfirmation)
);

function modalCloseConfirmation() {
  modalConfirmation.style.display = "none";
}
