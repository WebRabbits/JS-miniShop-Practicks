'use script';

// TODO: Реализация активации таба при переключении. Добавление класса .active к активному выбранному табу.

let activeTabId = 'goods';
const initialTab = getActiveTab();
initialTab.classList.add('active');

// Первоначальная отрисовка страницы с активной табой "Товары"
renderTabContentById(activeTabId);

const tabs = document.querySelectorAll('button.tab');

// Функция инициализации слушателей событий нажатий на кнопки. Принимает перебираемый элемент через цикл и вызывает callback-функцию которая запускает сам слушатель
function addClickListener(elements, callback) {
  for (const thisElement of elements) {
    thisElement.addEventListener('click', callback);
  }
}

// Вызывает слушатель события при нажатии на выбранную табу
addClickListener(tabs, clickHandler);

// Функция слушателя клика и активации выбранного таба
function clickHandler(event) {
  const activeTab = getActiveTab();

  activeTab.classList.remove('active');
  event.target.classList.add('active');

  activeTabId = event.target.dataset.tabId;

  removeActiveTabContent();

  renderTabContentById(activeTabId);
}

// Функция, которая скрывает/удаляет контент полученный при выборе предыдущей табы
function removeActiveTabContent() {
  const activeContent = document.querySelector(
    `[data-active-tab-content="true"]`
  );

  activeContent.remove();
}

// Функция, которая получает активную табу и возвращает значение целого элемента с данной активной табой
function getActiveTab() {
  return document.querySelector(`button[data-tab-id="${activeTabId}"]`);
}

// TODO: Реализация отрисовки контента при активации соответствующего таба
// Функция, которая позволяет отрисовать контент на странице при выборе активной табы
function renderTabContentById(tabId) {
  const tabsContainer = document.querySelector('.tabs');

  let html = '';

  tabId == 'goods' ? (html = renderGoods()) : (html = renderCart());

  tabsContainer.insertAdjacentHTML('afterend', html);
}

// Массив для пополнения при добавлении нового товара в корзину
const goodsInCart = new Array();

const tabWithCounter = document.querySelector('button[data-goods-count]');

const addInCartButtons = document.querySelectorAll(
  'button[data-add-in-cart="true"]'
);

// Вызываем слушатель события нажатия на кнопку "В КОРЗИНУ" у соответствующего товара
addClickListener(addInCartButtons, addInCartHandler);

// Функция добавления товара в корзину
function addInCartHandler(event) {
  const product = createProduct();
  goodsInCart.push(product);

  tabWithCounter.dataset.goodsCount = goodsInCart.length;
}

// Функция, которая создаёт объект товара по его названию/цене для добавления в массив goodsInCart - то есть в корзину
function createProduct() {
  return {
    name: 'Уроки по HTML',
    price: 500,
  };
}

// Функция, которая возвращает контент на странице "Товары"
function renderGoods() {
  return `
    <div data-active-tab-content="true" class="product-items">
      <div class="product-item">
          <img src="goods/html.png">
        <div class="product-list">
            <h3>Уроки по HTML</h3>
              <p class="price">₽ 300</p>
              <button data-add-in-cart="true" class="button">В корзину</button>
        </div>
      </div>

      <div class="product-item">
          <img src="goods/css.png">
        <div class="product-list">
            <h3>Уроки по CSS</h3>
              <p class="price">₽ 150</p>
              <button data-add-in-cart="true" class="button">В корзину</button>
        </div>
      </div>

      <div class="product-item">
          <img src="goods/js.png">
        <div class="product-list">
            <h3>Уроки по JS</h3>
              <p class="price">₽ 260</p>
              <button data-add-in-cart="true" class="button">В корзину</button>
        </div>
      </div>
    </div>
  `;
}

// Функция, которая возвращает контент на странице "Корзина"
function renderCart() {
  return `
    <div data-active-tab-content="true" class="cart-items">
      <div class="cart-item">
          <div class="cart-item-title">Уроки по HTML</div>
          <div class="cart-item-count">3шт.</div>
          <div class="cart-item-price">₽ 150</div>
      </div>

      <div class="cart-item">
          <div class="cart-item-title">Уроки по CSS</div>
          <div class="cart-item-count">1шт.</div>
          <div class="cart-item-price">₽ 450</div>
      </div>

      <div class="cart-item">
          <div class="cart-item-title">Уроки по JS</div>
          <div class="cart-item-count">6шт.</div>
          <div class="cart-item-price">₽ 550</div>
      </div>
    </div>
  `;
}
