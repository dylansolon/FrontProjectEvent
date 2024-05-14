import Logo from '../assets/img/logo.png';

function Header() {
  return `
    <header>
      <nav>
        <img src="${Logo}" alt="Logo" />
      </nav>
    </header>
  `;
}

export default Header;
