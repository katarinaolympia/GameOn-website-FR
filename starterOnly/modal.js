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
const modalClose = document.querySelector(".close");
const cgvInput = document.querySelector(".checkbox2-label");
const inputSubmit = document.querySelector(".btn-submit");
let firstNameInput = document.getElementById("first");
let lastNameInput = document.getElementById("last");
let emailInput = document.getElementById("email");
let birthDateInput = getElementById("birthdate");
let quantityInput = document.getElementById("quantity");
let checkboxInput = document.querySelector(".checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing modal form
modalClose.addEventListener("click", (e) => {
  style.display = "none";
});

// Implémenter les entrées du formulaire
// Champs Nom & Prénom
firstNameInput.addEventListener("input", () => {
  if ((firstNameInput.minLenght = 2)) {
    return true;
  } else {
    document.getElementById("first").innerHTML =
      "Veuillez entrez votre prénom.";
      return false;
  }
});

lastNameInput.addEventListener("input", () => {
  if ((lastNameInput.minLenght = 2)) {
    return true;
  } else {
    document.getElementById("last").innerHTML = "Veuillez entrez votre nom.";
    return false;
  }
});

// Champ email
emailInput.addEventListener("input", () => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?: \.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    alert("Entrez une adresse email valide !");
    return false;
  }
});

// Champ date de naissance
birthDateInput.addEventListener("input", () => {
  if (isNaN) {
    document.getElementById("birthdate").innerHTML =
      "Entrez votre date de naissance.";
    return false;
  } else {
    return true;
  }
});

// Champ nombre de tournoi
quantityInput.addEventListener("input", () => {
  if (quantity >= 0 && quantity < 99) {
    return true;
  } else {
    document.getElementById("quantity").innerHTML = "Entrez un numéro valide.";
    return false;
  }
});

// Champ sélection ville
checkboxInput.addEventListener("input", () => {
  if (checkboxInput.checked) {
    return true;
  } else {
    innerHTML = "Sélectionnez une ville.";
    return false;
  }
});

// Champ conditions générales
cgvInput.addEventListener("input", () => {
  if (cgvInput.checked) {
    return true;
  } else {
    innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  }
});

// Envoi formulaire
formData.addEventListener("submit", (e) => {
  e.preventDefault();
  firstNameInput.minLenght = 2;
  lastNameInput.minLength = 2;
  emailInput = true;
  validateBirthDate = true;
  quantityInput = true;
  checkboxInput = true;
  cgvInput = true;
});

// Récupération de data
inputName.addEventListener("input", (e) => {
  firstName = e.target.value;
});
inputLastName.addEventListener("input", (e) => {
  lastName = e.target.value;
});

// Message de confirmation d'envoi réussi : PAS OPÉRATIONNEL
inputSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  alert ("Merci ! Votre réservation a été reçue.");
  innerHTML =
      "Merci pour votre inscription";
  style.
});


