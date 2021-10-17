import Component from "../Component/Component.js";
// eslint-disable-next-line import/no-cycle
import HeaderPage from "../HeaderPage/HeaderPage.js"; // para consultar en clase
import MainPage from "../MainPage/MainPage.js";

class HeaderPokemon extends Component {
  constructor(parentElement) {
    super(parentElement, "header__container off", "div");
    this.createHeaderPokemonHTML();
  }

  createHeaderPokemonHTML() {
    const header = `
        <div class="header__nav__burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="header__nav__container">
          <nav class="header__nav__menu">
            <ul>
              <li>Pokemon List</li>
            </ul>
          </nav>
        </div>
         <div class="header__logo">
           <img src="./images/charizard.png" alt="Charizard, I choose you!" />
         </div>
         <div class="header__title">
           <h1 class="header__title___text">Pokemon - Gotta Catch 'Em All!</h1>
           <img
             src="./images/pokemon_logo_header.png"
             alt="Pokemon - Gotta Catch 'Em All!"
           />
         </div>
         <div class="header__logo">
           <img src="./images/ash.png" alt="Ash Ketchum" />
         </div>
    `;
    this.element.innerHTML = header;

    const menu = this.element.querySelector(".header__nav__burger");
    const headerContainer = document.querySelector(".header__container");
    const pokemonListLink = this.element.querySelector(".header__nav__menu li");
    const headerParentElement = document.querySelector(".header");
    const mainParentElement = document.querySelector(".main");

    menu.addEventListener("click", () => {
      if (headerContainer.className === "header__container off") {
        headerContainer.className = "header__container on";
      } else if (headerContainer.className === "header__container on") {
        headerContainer.className = "header__container off";
      }
    });

    pokemonListLink.addEventListener("click", () => {
      const mainContainer = document.querySelector(".main__container");
      headerContainer.className = "header__container off";
      headerContainer.remove();
      mainContainer.remove();
      // eslint-disable-next-line no-new
      new HeaderPage(headerParentElement);
      // eslint-disable-next-line no-new
      new MainPage(mainParentElement);
    });
  }
}

export default HeaderPokemon;
