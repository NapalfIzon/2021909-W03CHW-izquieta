import Component from "../Component/Component.js";
import DataService from "../DataService/DataService.js";

class PokemonFile extends Component {
  url;
  image;
  name;
  type0;
  type1 = null;
  id;
  weight;
  height;
  response;

  constructor(parentElement, url) {
    super(parentElement, "main__cards__card", "li");
    this.url = url;
    (async () => {
      this.response = new DataService(this.url);
      this.pokemonData = await this.response.getData();
      this.image =
        this.pokemonData.sprites.other["official-artwork"].front_default;
      this.name = this.pokemonData.name;
      this.type0 = this.pokemonData.types[0].type.name;
      if (this.pokemonData.types.length > 1) {
        this.type1 = this.pokemonData.types[1].type.name;
      }
      this.id = this.pokemonData.id;
      this.weight = this.pokemonData.weight;
      this.height = this.pokemonData.height;

      this.createHTML();
    })();
  }

  createHTML() {
    const card = `
            <div class="main__cards__card__block-A">
              <div class="main__cards__card__block-A__image">
                <img
                  src="${this.image}"
                  alt="Bulbasaur"
                />
              </div>
              <div class="main__cards__card__block-A__buttons">
                <i class="main__cards__card__block-A__buttons-info fas fa-info-circle"></i>
                <i class="main__cards__card__block-A__buttons-dismiss far fa-times-circle"></i>
                <div class="main__cards__card__block-C__catch--logo off"></div>
              </div>
            </div>
            <div class="main__cards__card__block-B">
              <div class="main__cards__card__block-B__number">
                <p class="main__cards__card__block-B__number-text">${this.id}</p>
              </div>
              <div class="main__cards__card__block-B__name">
                <p class="main__cards__card__block-B__name-text">${this.name}</p>
              </div>
            </div>
            <div class="main__cards__card__block-C">
              <div class="main__cards__card__block-C__type">
                <div class="main__cards__card__block-C__type-01">${this.type0}</div>
              </div>
            </div>
    `;
    this.element.innerHTML = card;

    const pokeballCatch = this.element.querySelector(
      ".main__cards__card__block-C__catch--logo"
    );

    pokeballCatch.addEventListener("click", () => {
      (async () => {
        const pokemonData = {
          idPokemon: `${this.id}`,
          namePokemon: `${this.name}`,
        };
        await this.response.addData(pokemonData);
      })();
    });
  }
}

export default PokemonFile;
