import Logo from '../../assets/img/logo.svg';

function Header() {

  return `
        <header class="header" id="header">
      <nav class="nav container">
        <a href="/home" class="nav__logo"> <img src="${Logo}" alt="Logo" /></a>
        <p id="logo">session</p>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <p id="logout" class="nav__link">Logout</p>
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
