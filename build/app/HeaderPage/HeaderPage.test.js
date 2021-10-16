import HeaderPage from "./HeaderPage";

describe("Given a HeaderPage class", () => {
  describe("When it receives a div container, and a randeom url", () => {
    test("Then it should render a div element with a 'header__container' class inside the div container", () => {
      const container = document.createElement("div");
      const url = "whatever";

      const testElelement = new HeaderPage(container, url);
      const result = container.querySelector(".header__container");

      expect(result).not.toBeNull();
    });
  });
});
