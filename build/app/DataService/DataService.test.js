import DataService from "./DataService";

describe("Given a DataService class", () => {
  describe("When we call an API to obtain the response", () => {
    test("Then we should receive a response with data inside", () => {
      const expected = [];

      const response = new DataService(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
      );
      const result = response.getData();

      return expect(typeof result).toEqual(typeof expected);
    });
  });
});
