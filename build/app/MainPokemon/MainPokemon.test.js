import MainPokemon from "./MainPokemon";

describe("Given a MainPokemon class", () => {
  describe("When it receives a div container, and a randeom url", () => {
    test("Then it should render a div element with a 'main__container' class inside the div container", () => {
      const container = document.createElement("div");
      const url = "whatever";

      const testElelement = new MainPokemon(container, url);
      const result = container.querySelector(".main__container");

      expect(result).not.toBeNull();
    });
  });
});
