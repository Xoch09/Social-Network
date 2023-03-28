import { ROUTER } from "./router/router.js";
import { paths } from "./router/routes.js";
import { initApp, toggleSignIn } from "./lib/barrel.js";

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  if (navbar && logo) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.style.padding = "30px 10px";
      logo.style.fontSize = "25px";
    } else {
      navbar.style.padding = "80px 10px";
      logo.style.fontSize = "35px";
    }
  }
}

// Scroll just show with home and about view
document.addEventListener("DOMContentLoaded", function () {
  const homeView = document.getElementById("main");
  const aboutView = document.getElementById("about");

  if (homeView || aboutView) {
    scrollFunction();
  }
});

function initializeRouter() {
  const Router = new ROUTER(paths);
  Router.load("home");

  const signInHandler = () => {
    Router.loadBody("signIn");
    document.getElementById("formSignIn").addEventListener("input",() => {
      enableButtons("sign-in");
    });
  };
  const signUpHandler = () => {
    Router.loadBody("signUp");
    document.getElementById("formSignUp").addEventListener("input",() => {
    enableButtons("sign-up");
  });
  };

  const aboutHandler = () => {
    Router.load("about");
  };

  document.getElementById("signIn").addEventListener("click", signInHandler);
  document.getElementById("signUp").addEventListener("click", signUpHandler);
  document.getElementById("signUp2").addEventListener("click", signUpHandler);
  document.getElementById("about").addEventListener("click", aboutHandler);
}

/**
 * Change button attribute to disable
 */

function enableButtons(idElement,) {
  const elementButton = document.getElementById(idElement);
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  if (detectElement(idElement)) {
    if (validateInput(emailInput) && validateInput(passwordInput)) {
      elementButton.disabled = false;
    }
  }
  return emailInput.value, passwordInput.value;
}

function validateInput(input) {
  const value = input.value;
  let valid = true;
  if (input == "email") {
    if (!validateEmail(value)) {
      input.setCustomValidity(
        "Por favor, ingresa un correo electrónico válido"
      );
      valid = false;
    }
  } else {
    if (!validatePassword(value)) {
      input.setCustomValidity("Por favor, ingresa una contraseña válida");
      valid = false;
    }
  }
  return valid;
}

emailInput.setCustomValidity("Por favor, ingresa un correo electrónico.");

/**
 * Detect elements from views DOM with ID
 */
function detectElement(elementID) {
  const element = document.getElementById(elementID);
  let detected = false;
  if (element) {
    detected = true;
  }
  return detected;
}

// function detectButton(){
//   const signIn = document.getElementById("sign-in");
//   const signOut = document.getElementById("sign-up");

//   if (signIn) {

//     signIn.addEventListener("click", toggleSignIn, false);

//   } else if (signOut) {
//     signOut.addEventListener("click", handleSignUp, false);
//   }
// }

/**
 * Validate email input structure
 * @param {*} email
 * @returns boolean
 */
function validateEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}
//TODO:Agregar requerimentos de contraseña a la vista
/**
 * Validate password input structure
 * @param {*} password
 * @returns boolean
 */
function validatePassword(password) {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regexPassword.test(password);
}

initializeRouter();
