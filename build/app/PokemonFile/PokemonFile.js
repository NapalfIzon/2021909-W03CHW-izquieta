import Component from "../Component/Component.js";
import DataService from "../DataService/DataService.js";

class PokemonFile extends Component {
  image;
  name;
  type0;
  type1 = null;
  id;
  weight;
  height;
  url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(parentElement, idPokemon) {
    super(parentElement, "main__cards__card", "li");
    this.url += idPokemon;
    (async () => {
      const response = new DataService(this.url);
      this.pokemonData = await response.getData();
      this.image =
        this.pokemonData.sprites.other["official-artwork"].front_default;
      this.name = this.pokemonData.name;
      this.types = {};

      for (let i = 0; i < this.pokemonData.types.length; i++) {
        const type = `type${i}`;
        Object.defineProperty(this.types, type, {
          value: `${this.pokemonData.types[i].type.name}`,
        });
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
                <i class="main__cards__card__block-A__buttons-dismiss far fa-times-circle"></i>
                <i class="main__cards__card__block-A__buttons-info fas fa-info-circle"></i>
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
                <div class="main__cards__card__block-C__type-01">${this.types.type0}</div>
                <!-- mirar para tipos múltiples-->
              </div>
              <div class="main__cards__card__block-C__catch">
                <div class="main__cards__card__block-C__catch--logo off"></div>
                <!-- ha de ser on / off / catched-->
              </div>
            </div>
    `;
    this.element.innerHTML = card;
  }
}

export default PokemonFile;
