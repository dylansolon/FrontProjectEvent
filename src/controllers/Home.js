import axios from "axios";
import Cookies from "js-cookie";
import viewHeader from "../views/home/header";
import viewMain from "../views/home/main";
import ViewSection2 from "../views/home/section2";
import ViewSection3 from "../views/home/section3";
import Footer from "../views/home/footer";

const Home = class {
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
      ${viewMain()}
      ${ViewSection2()}
      ${ViewSection3()}
      ${Footer()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.headerScript();
  }

validateSessionId() {
  const sessionCookie = Cookies.get("Session");
  if (sessionCookie) {
    window.location.href='/dashboard';
    /* const userSession = JSON.parse(sessionCookie);
    console.log(userSession.sessionId);

    axios
      .get(`http://127.0.0.1:83/auth/${userSession.sessionId}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      }); */
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
};

export default Home;
