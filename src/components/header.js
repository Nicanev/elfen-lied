import {
  logoSvg,
  catalogIcon,
  searchIcon,
  heartIcon,
  userIcon,
  cartIcon,
} from "./icons.js";

export function createHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
  <header class="mobileHeader">
    <a href="/" class="header__logo">
          ${logoSvg}
        </a>
        <div class="mobileHeader__icons">
        <a href="#">
        ${searchIcon}
        </a>
        <a href="#">
        ${heartIcon}
        </a>
         <a href="#">
        ${userIcon}
        </a>
        <a href="#">
        ${cartIcon}
        </a>
        </div>
        
  </header>
    <header class="header">
      <header class="header__container">
        <a href="/" class="header__logo">
          ${logoSvg}
        </a>
        <button class="header__catalog-btn">
          ${catalogIcon}
          Каталог
        </button>
        <nav class="header__nav">
          <a href="#" class="header__nav-item">Блог</a>
          <a href="#" class="header__nav-item">Контакты</a>
        </nav>
        <button class="header__search-btn">
          ${searchIcon}
          Поиск
        </button>
        <div class="header__icons">
          <a href="#" class="header__icon header__icon--heart">
            ${heartIcon}
          </a>
          <a href="#" class="header__icon header__icon--user">
            ${userIcon}
          </a>
          <a href="#" class="header__icon header__icon--cart">
            ${cartIcon}
          </a>
        </div>
      </header>
    </header>
  `;
  return header;
}
