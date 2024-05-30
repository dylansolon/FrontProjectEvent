import axios from "axios";
import Cookies from "js-cookie";
import viewHeader from "../views/dashboard/headerDashboard";
import viewLogin from "../views/login_register/loginRegister";

const LoginRegister = class {
  constructor(params) {
    this.el = document.querySelector("#root");
    this.params = params;
    this.data = [];
    this.validateSessionId();
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
      .getElementById("register")
      .addEventListener("click", () => this.register(event));
    document
      .getElementById("login")
      .addEventListener("click", () => this.login(event));
  }

validateSessionId() {
  const sessionCookie = Cookies.get("Session");
  if (sessionCookie) {
    window.location.href = '/home';
    const userSession = JSON.parse(sessionCookie);
    console.log(userSession.sessionId);

    axios
      .get(`http://127.0.0.1:83/auth/${userSession.sessionId}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  } else {
    console.log("No session cookie found.");
  }
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

    const signupErrorElement = document.getElementById("signupErrorLogin");
    signupErrorElement.style.display = "none";

    axios
      .post("http://127.0.0.1:83/login", formData)
      .then((response) => {
        alert(response.data.message);
        console.log(response.data.message);

        const userSession = {
          name: response.data.name,
          sessionId: response.data.sessionId,
        };

        Cookies.set("Session", JSON.stringify(userSession));
        console.log(JSON.parse(Cookies.get("Session")));
        /* window.location.href = "/dashboard"; */
      })
      .catch((error) => {
        console.error(error.response.data.message);
        signupErrorElement.textContent = error.response.data.message;
        signupErrorElement.style.display = "block";
      });
  }

  register(event) {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(document.getElementById("signupForm"))
    );

    const signupErrorElement = document.getElementById("signupError");
    signupErrorElement.style.display = "none";

    axios
      .post("http://127.0.0.1:83/register", formData)
      .then((response) => {
        alert(response.data.message);
        console.log(response.data.message);

        const userSession = {
          name: response.data.name,
          sessionId: response.data.message,
        };

        Cookies.set("Session", JSON.stringify(userSession));
        console.log(JSON.parse(Cookies.get("Session")));
        /* window.location.href = "/dashboard"; */
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
        if (error.response) {
          // Server responded with a status other than 200 range
          signupErrorElement.textContent = error.response.data.message;
          signupErrorElement.style.display = "block";
        } else {
          // Something else happened while setting up the request
          signupErrorElement.textContent =
            "An error occurred while processing your request.";
          signupErrorElement.style.display = "block";
        }
      });
  }
};

export default LoginRegister;
