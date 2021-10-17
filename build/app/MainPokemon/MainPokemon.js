import Component from "../Component/Component.js";

class MainPokemon extends Component {
  constructor(parentElement, url) {
    super(parentElement, "main__container", "div");
    this.url = url;
    this.createMainPokemonHTML();
  }

  createMainPokemonHTML() {
    const main = `
      <div class="main__title">
        <img class="main__title__logo" src="./images/my_pokemon.png" alt="My Pokemon">
      </div>
      <div class="main__cards">
        <ul class="main__cards__container"></ul>
      </div>
      <div class="main__navigation">
        <table class="main__navigation__table">
          <tbody>
            <tr>
              <td class="main__navigation__table__down"></td>
              <td class="main__navigation__table__up"></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    this.element.innerHTML = main;
  }
}

export default MainPokemon;
