import Component from "../Component/Component.js";
import PokemonFile from "../PokemonFile/PokemonFile.js";

class MainPage extends Component {
  pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/";
  constructor(parentElement) {
    super(parentElement, "main__container", "div");
    this.createMainIndexHTML();
    this.generatePokemonList();
  }

  createMainIndexHTML() {
    const main = `
      <div class="main__title">
        <img class="main__title__logo" src="./images/pokemon_list.png" alt="Pokemon list">
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

  generatePokemonList() {
    const pokemonCardParentElement = this.element.querySelector(
      ".main__cards__container"
    );

    for (let id = 1; id < 11; id++) {
      const pokemonUrl = this.pokemonApiUrl + id;
      // eslint-disable-next-line no-new
      new PokemonFile(pokemonCardParentElement, pokemonUrl);
    }

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const dismissButton = document.querySelector(
          ".main__cards__card__block-A__buttons-dismiss"
        );
        dismissButton.remove();
      }
    }, 600);
  }
}

export default MainPage;
