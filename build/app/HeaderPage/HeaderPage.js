import Component from "../Component/Component.js";

class HeaderPage extends Component {
  constructor(parentElement, url) {
    super(parentElement, "header__container off", "div");
    this.url = url;
    this.createHeaderIndexHTML();
  }

  createHeaderIndexHTML() {
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
              <li>My Pokemon</li>
            </ul>
          </nav>
        </div>
         <div class="header__logo">
           <img src="./images/bulbasaur.png" alt="Bulbasaur, I choose you!" />
         </div>
         <div class="header__title">
           <h1 class="header__title___text">Pokemon - Gotta Catch 'Em All!</h1>
           <img
             src="./images/pokemon_logo_header.png"
             alt="Pokemon - Gotta Catch 'Em All!"
           />
         </div>
         <div class="header__logo">
           <img src="./images/professor_oak.png" alt="Professor Oak" />
         </div>
    `;
    this.element.innerHTML = header;

    const hambugerMenu = this.element.querySelector(".header__nav__burger");
    const headerContainer = document.querySelector(".header__container");

    hambugerMenu.addEventListener("click", () => {
      if (headerContainer.className === "header__container off") {
        headerContainer.className = "header__container on";
      } else if (headerContainer.className === "header__container on") {
        headerContainer.className = "header__container off";
      }
    });
  }
}

export default HeaderPage;
