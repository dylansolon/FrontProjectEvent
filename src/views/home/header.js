import Logo from "../../assets/img/event2.png";
import backgroundImg from "../../assets/img/event.jpg";

function Header() {
  return `
  <div class="hero-section">
        <img src="${backgroundImg}" alt="Event Image" class="hero-image">
        <div class="overlay"></div>
        <header class="header" id="header">
      <nav class="nav container">
        <a href="/home" class="nav__logo"> 
        <img src="${Logo}" alt="Logo" />
        </a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
          <li class="nav__item">
              <a href="/home" class="nav__link active-link">Accueil</a>
            </li>
            <li class="nav__item">
              <a href="/login" class="nav__link">Login/Register</a>
            </li>
            <li class="nav__item">
              <a href="/dashboard" class="nav__link">dashboard</a>
            </li>
          </ul>

          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-line"></i>
        </div>
      </nav>
    </header>
    <div class="hero-text">
            <h1>Organisez et Vivez les Meilleurs Événements Locaux</h1>
            <div class="footer__social">
          <a href="" target="_blank" class="footer__social-link">
            <i class="ri-user-fill"></i>
            
          </a>
          <p>déjà 5000 utilisateurs</p>
          <a href="" target="_blank" class="footer__social-link">
            <i class="ri-bug-fill"></i>
          </a>
          <p>j'ai pas d'inspi</p>
          <a href="" target="_blank" class="footer__social-link">
            <i class="ri-map-pin-fill"></i></i>
            
          </a>
          <p>partout en France</p>
        </div>
         <a style="--clr: #7808d0" class="button" href="#">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
           Prêt à sortir ?
        </a>
        </div>
    </div>
  `;
}

export default Header;
