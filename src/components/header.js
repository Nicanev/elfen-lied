import {
  cartIcon,
  catalogIcon,
  closeIcon,
  heartIcon,
  logoSvg,
  searchIcon,
  userIcon,
} from "./icons.js"

export function createHeader() {
  const header = document.createElement("header")

  // Вставляем HTML-код для шапки
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
          ${catalogIcon} Каталог
        </button>
        <nav class="header__nav">
          <a href="#" class="header__nav-item">Блог</a>
          <a href="#" class="header__nav-item">Контакты</a>
        </nav>
        <button class="header__search-btn">
          ${searchIcon} Поиск
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
  `

  // Создание модальных окон
  const loginModal = document.createElement("div")
  loginModal.id = "loginModal"
  loginModal.className = "modal"
  loginModal.innerHTML = `
    <div class="modal-content">
      <span class="close">${closeIcon}
</span>
      <h2>Регистрация</h2>
      <form action="" class="modal-form">
        <input type="email" placeholder="E-MAIL" /><input type="password" placeholder="Пароль" /><input type="password" placeholder="Повторите пароль" />
        <button><span>Регистрация</span></button>
      </form>
    </div>
  `

  const cartModal = document.createElement("div")
  cartModal.id = "cartModal"
  cartModal.className = "modal"
  cartModal.innerHTML = `
    <div class="modal-content">
     <span class="close">${closeIcon}
</span>
      <h2>Корзина</h2>
      <!-- Содержимое корзины -->
    </div>
  `

  const favoritesModal = document.createElement("div")
  favoritesModal.id = "favoritesModal"
  favoritesModal.className = "modal"
  favoritesModal.innerHTML = `
    <div class="modal-content">
      <span class="close">${closeIcon}
</span>
      <h2>Избранное</h2>
      <!-- Список избранного -->
    </div>
  `

  // Добавляем модальные окна в DOM
  document.body.appendChild(loginModal)
  document.body.appendChild(cartModal)
  document.body.appendChild(favoritesModal)

  // Обработчики событий для открытия модальных окон
  const loginBtn = header.querySelector(".header__icon--user")
  const cartBtn = header.querySelector(".header__icon--cart")
  const favoritesBtn = header.querySelector(".header__icon--heart")

  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block"
  })

  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "block"
  })

  favoritesBtn.addEventListener("click", () => {
    favoritesModal.style.display = "block"
  })

  // Обработчики для закрытия модальных окон
  const closeButtons = document.querySelectorAll(".modal .close")

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none"
    })
  })

  // Закрытие модального окна при клике вне содержимого
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none"
    }
  })

  return header
}
