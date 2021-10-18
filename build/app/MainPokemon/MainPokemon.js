import Component from "../Component/Component.js";
import DataService from "../DataService/DataService.js";
import Pokedex from "../Pokedex/Pokedex.js";
import PokemonFile from "../PokemonFile/PokemonFile.js";

class MainPokemon extends Component {
  personalApiUrl = "https://w03chw-pokemon-api.herokuapp.com/pokemon";
  pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/";
  constructor(parentElement) {
    super(parentElement, "main__container", "div");
    this.createMainPokemonHTML();
    this.generatePokemonList();
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
    // this.generatePokemonList();
  }

  generatePokemonList() {
    const pokemonCardParentElement = this.element.querySelector(
      ".main__cards__container"
    );
    const pokedexContainer = document.querySelector(".pokedexContainer");

    (async () => {
      const response = new DataService(this.personalApiUrl);
      const pokemonData = await response.getData();

      for (let i = 0; i < pokemonData.length; i++) {
        const pokemonId = pokemonData[i].idPokemon;
        const pokemonUrl = this.pokemonApiUrl + pokemonId;

        // eslint-disable-next-line no-new
        new PokemonFile(pokemonCardParentElement, pokemonUrl);
      }
      setTimeout(() => {
        for (let j = 0; j < pokemonData.length; j++) {
          const catchButton = document.querySelector(
            ".main__cards__card__block-A__catch--logo"
          );
          catchButton.remove();
        }

        // eslint-disable-next-line no-new
        new Pokedex(pokedexContainer);
      }, 500);
    })();
  }
}

export default MainPokemon;
