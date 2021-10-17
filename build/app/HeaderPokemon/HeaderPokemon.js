import Component from "../Component/Component.js";

class HeaderPokemon extends Component {
  constructor(parentElement, url) {
    super(parentElement, "header__container", "div");
    this.url = url;
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
              <li>Link link 1</li>
              <li>Link link 2</li>
              <li>Link link 3</li>
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
  }
}

export default HeaderPokemon;
