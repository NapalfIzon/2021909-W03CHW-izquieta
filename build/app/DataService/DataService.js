class DataService {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const response = await fetch(this.url);
    const pokemons = await response.json();

    return pokemons;
  }
}

export default DataService;
