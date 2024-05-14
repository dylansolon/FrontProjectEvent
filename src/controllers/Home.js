import viewHeader from '../views/header';

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
    `;
  }

  run() {
  this.el.innerHTML = this.render();
  }
};

export default Home;
