import axios from 'axios';
import viewHeader from "../views/dashboard/headerDashboard";
import viewMain from "../views/dashboard/main";

const Dashboard = class {
  constructor(params) {
    this.el = document.querySelector("#root");
    this.params = params;
    this.data = [];
    // this.sessionstart();
    this.run();
  }

  render() {
    return `
      ${viewHeader()}
      ${viewMain()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.headerScript();
      document
      .getElementById("logout")
      .addEventListener("click", () => this.logout());
    document.getElementById("logo").addEventListener("click", () => this.sessionstart());
  }

// sessionstart() {
//   axios
//     .get("http://127.0.0.1:83/auth")
//     .then((response) => {
//       // Handle the response data if needed
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//       window.location.href = "/home";
//     });
// }


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

logout() {
    const formData = { action: "logout" };

    const signupErrorElement = document.getElementById("signupError");
    if (signupErrorElement) {
      signupErrorElement.style.display = "none";
    }

    axios
      .post("http://127.0.0.1:83/auth", formData)
      .then((response) => {
        alert(response.data.message); // Affiche le message de succès
        window.location.href = "/home"; // Redirige vers la page d'accueil
      })
      .catch((error) => {
        console.error(error);
        if (error.response && signupErrorElement) {
          // Server responded with a status other than 200 range
          signupErrorElement.textContent = error.response.data.message;
          signupErrorElement.style.display = "block"; // Show error message element
        } else if (signupErrorElement) {
          // Something else happened while setting up the request
          signupErrorElement.textContent = "An error occurred while processing your request.";
          signupErrorElement.style.display = "block"; // Show error message element
        }
      });
  }
};

export default Dashboard;
