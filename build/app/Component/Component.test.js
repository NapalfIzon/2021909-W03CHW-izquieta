import Component from "./Component.js";

describe("Given a Component class", () => {
  describe("When it receives a div container, a 'invented' class and a 'p' tag", () => {
    test("Then it should render a p element with a 'invented' class inside the div container", () => {
      const container = document.createElement("div");
      const className = "test";
      const htmlTag = "p";

      const testElelement = new Component(container, className, htmlTag);
      const pCreated = container.querySelector("p.test");

      expect(pCreated).not.toBeNull();
    });
  });
});
