class DataService {
  apiPokemon = "https://w03chw-pokemon-api.herokuapp.com/pokemon";
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const pokemons = await response.json();

    return pokemons;
  }

  async addData(idPokemon) {
    await fetch(this.apiPokemon, {
      method: "POST",
      body: JSON.stringify(idPokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default DataService;
