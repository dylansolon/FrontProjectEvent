import Logo from '../assets/img/logo.svg';

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