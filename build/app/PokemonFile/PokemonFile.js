import Component from "../Component/Component.js";
import DataService from "../DataService/DataService.js";

class PokemonFile extends Component {
  pokemonData;

  constructor(parentElement, url) {
    super(parentElement, "main__cards__card", "li");

    (async () => {
      this.url = url;
      const response = new DataService(url);
      this.pokemonData = await response.getData();
      this.image = this.pokemonData.sprites.other.dream_world.front_default;
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
            <div class="main__cards__block-A">
              <div class="main__cards__block-A__card__image">
                <img
                  src="${this.image}"
                  alt="Bulbasaur"
                />
              </div>
              <div class="main__cards__block-A__buttons">
                <div class="main__cards__block-A__buttons-dismiss"></div>
                <div class="main__cards__block-A__buttons-info"></div>
              </div>
            </div>
            <div class="main__cards__block-B">
              <div class="main__cards__card__block-B__number">
                <p class="main__cards__card__block-B__number-text">${this.id}</p>
              </div>
              <div class="main__cards__card__block-B__name">
                <p class="main__cards__card__block-B__name-text">${this.name}</p>
              </div>
            </div>
            <div class="main__cards__block-C">
              <div class="main__cards__card__block-C__type">
                <div class="main__cards__card__block-C__type-01">${this.types.type0}</div>
                <!-- mirar para tipos múltiples-->
              </div>
              <div class="main__cards__card__block-C__catch">
                <div class="main__cards__card__block-C__catch off"></div>
                <!-- ha de ser on / off / catched-->
              </div>
            </div>
    `;
    this.element.innerHTML = card;
  }
}

export default PokemonFile;
