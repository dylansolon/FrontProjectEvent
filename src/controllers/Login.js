import axios from "axios";
import viewHeader from "../views/home/header";
import viewLogin from "../views/login_register/login";

const Login = class {
  constructor(params) {
    this.el = document.querySelector("#root");
    this.params = params;
    this.data = [];
    this.run();
  }

  render() {
    return `
      ${viewHeader()}
      ${viewLogin()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.headerScript();
    document
      .getElementById("signupForm")
      .addEventListener("submit", (event) => this.register(event));
    document
      .getElementById("loginForm")
      .addEventListener("submit", (event) => this.login(event));
  }


  headerScript() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((n) =>
      n.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      })
    );

    const blurHeader = () => {
      const header = document.getElementById("header");
      window.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
    };
    window.addEventListener("scroll", blurHeader);
  }

  login(event) {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(document.getElementById("loginForm"))
    );
    formData.action = "login";

    axios
      .post("http://127.0.0.1:83/auth", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });
  }

  register(event) {
  event.preventDefault();
  const formData = Object.fromEntries(
    new FormData(document.getElementById("signupForm"))
  );
  formData.action = "register";

  const signupErrorElement = document.getElementById("signupError");
  signupErrorElement.style.display = "none";

  axios
    .post("http://127.0.0.1:83/auth", formData)
    .then((response) => {
      alert(response.data.message); // Display success message
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.error(error);
      // Handle error response
      if (error.response) {
        // Server responded with a status other than 200 range
        signupErrorElement.textContent = error.response.data.message;
        signupErrorElement.style.display = "block"; // Show error message element
      } else {
        // Something else happened while setting up the request
        signupErrorElement.textContent = "An error occurred while processing your request.";
        signupErrorElement.style.display = "block"; // Show error message element
      }
    });
}

}

export default Login;
