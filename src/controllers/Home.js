import axios from 'axios';
import viewHeader from '../views/home/header';
import viewMain from '../views/home/main';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];
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
