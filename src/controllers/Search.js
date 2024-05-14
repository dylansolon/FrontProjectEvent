const Search = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  render() {
    return `
      <h1>test</h1>
    `;
  }

  run() {
        this.el.innerHTML = this.render();
};

};

export default Search;
