import axios from "axios";
import viewHeader from "../views/dashboard/headerDashboard";
import viewFormEvent from "../views/dashboard/formEvent";
import viewCardsEvent from "../views/dashboard/cardsEvent";
import Footer from "../views/home/footer"
import Layout from "../views/dashboard/layout";

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
      ${Layout()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.headerScript();
    this.addEventListeners();

  }

    addEventListeners() {
    document.getElementById("openForm").addEventListener("click", () => this.openForm());
    document.getElementById("closeForm").addEventListener("click", () => this.closeForm());
    document.getElementById("eventForm").addEventListener("submit", (event) => this.eventsForm(event));
    document.getElementById("icon1").addEventListener("click", () => this.showView('view1'));
    document.getElementById("icon2").addEventListener("click", () => this.showView('view2'));
    document.getElementById("icon3").addEventListener("click", () => this.showView('view3'));
  }

  showView(view) {
    const dynamicContent = document.getElementById("dynamicContent");
    if (view === 'view1') {
      dynamicContent.innerHTML = viewFormEvent() + viewCardsEvent();
    } else if (view === 'view2') {
      dynamicContent.innerHTML = Footer();
    } else if (view === 'view3') {
      dynamicContent.innerHTML = "<p>Content for view 3</p>"; // Remplacez par votre vue réelle
    }
  }

    openForm() {
    
    document.querySelector('.overlay1').classList.add('open');
    document.querySelector('.form-container').classList.add('open');
  }

  closeForm() {
    
    document.querySelector('.overlay1').classList.remove('open');
    document.querySelector('.form-container').classList.remove('open');
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

  eventsForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = Object.fromEntries(
    new FormData(document.getElementById("eventForm"))
  );
    console.log(formData);

    axios.post("http://127.0.0.1:83/event", formData)
      .then((response) => {
        console.log(response.data)
        alert("Événement créé avec succès !");
      })
      .catch((error) => {

        alert(error.response.data.message);
        console.log(error.data);
      });
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



/*   logout() {
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
          signupErrorElement.textContent =
            "An error occurred while processing your request.";
          signupErrorElement.style.display = "block"; // Show error message element
        }
      });
  } */
};

export default Dashboard;
