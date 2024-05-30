import error404 from "../views/error404/error404";

const Quatre04 = class {
  constructor() {
    this.el = document.querySelector("#root");

    this.run();
  }

  render() {
    return `
    ${error404()};
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Quatre04;
