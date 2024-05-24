import Logo from '../../assets/img/event2.png';

function Header() {

  return `
<header class="headerDashboard" id="header">
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
              <a href="/login" class="nav__link">Logout</a>
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
  `;

}

export default Header;
