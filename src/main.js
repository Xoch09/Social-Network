import { ROUTER } from "./router/router.js";
import { paths } from "./router/routes.js";
import funct from "./lib/barrel.js";


function scrollFunction() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  if (navbar && logo) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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
  };
  const signUpHandler = () => {
    Router.loadBody("signUp");
  };
  const aboutHandler = () => {
    Router.load("about");
  };

  document.getElementById("signIn").addEventListener("click", signInHandler);
  document.getElementById("signUp").addEventListener("click", signUpHandler);
  document.getElementById("signUp2").addEventListener("click", signUpHandler);
  document.getElementById("about").addEventListener("click", aboutHandler);
}

initializeRouter();

// Call initApp if views are created
document.addEventListener("DOMContentLoaded", function () {
  const loginView = document.getElementById("signInView");
  const logupView = document.getElementById("signUpView");

  if (loginView || logupView) {
    funct.initApp();
  }
});

// let Router;

// function initializeRouter() {
//   Router = new ROUTER(paths);
//   Router.load('home');
// }

// window.onload = () => {
//   initializeRouter();
//   document.getElementById('signIn').addEventListener('click', () => { Router.loadBody('signIn'); });
//   document.getElementById('signUp').addEventListener('click', () => { Router.loadBody('signUp'); });
//   document.getElementById('signUp2').addEventListener('click', () => { Router.loadBody('signUp'); });
//   document.getElementById('about').addEventListener('click', () => { Router.load('about'); });
// };

/* // Initialize authentication email/password
window.onload = function () {
  funct.initApp();
}; */
