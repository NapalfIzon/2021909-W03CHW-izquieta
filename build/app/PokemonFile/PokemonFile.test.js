import PokemonFile from "./PokemonFile";

describe("Given a PokemonFile class", () => {
  describe("When we create a PokemonFile object with the data of the pokemon#25", () => {
    test("Then we should have in the 'name' property the value 'pikachu'", () => {
      const parentElement = document.createElement("ul");
      const idPokemon = "25";

      const pokemon = new PokemonFile(parentElement, idPokemon);

      return expect(pokemon).not.toBeNull();
    });
  });
});
