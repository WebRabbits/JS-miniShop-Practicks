'use script';

console.log(GOODS);

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

  let html = null;
  if (tabId === 'goods') {
    html = renderGoods();
  } else {
    html = renderCart();
  }

  html !== null
    ? tabsContainer.after(html)
    : 'Что-то пошло не так: 404 Page Not Found';
}

// Массив для пополнения при добавлении нового товара в корзину
let goodsInCart = new Array();

const tabWithCounter = document.querySelector('button[data-goods-count]');

// const addInCartButtons = document.querySelectorAll(
//   'button[data-add-in-cart="true"]'
// );

// // Вызываем слушатель события нажатия на кнопку "В КОРЗИНУ" у соответствующего товара
// addClickListener(addInCartButtons, addInCartHandler);

function counterUpdater() {
  let fullSize = 0;

  for (let i = 0; i < goodsInCart.length; i++) {
    const productInCart = goodsInCart[i];
    fullSize += productInCart.count;
  }

  tabWithCounter.dataset.goodsCount = fullSize;
  return tabWithCounter;
}

// Функция добавления товара в корзину по нажатию на кнопку "В КОРЗИНУ"
function addInCartHandler(product) {
  console.log(product);
  let hasProduct = false;
  let index = null;
  let count = 1;
  let price = product.price;

  for (let i = 0; i < goodsInCart.length; i++) {
    const productInCart = goodsInCart[i];
    if (product.id == productInCart.id) {
      hasProduct = true;
      index = i;
      count = productInCart.count;
    }
  }

  if (hasProduct) {
    goodsInCart[index].count = ++count;
    goodsInCart[index].price += price;
  } else {
    const productWithCount = product;
    productWithCount.count = count;
    goodsInCart.push(productWithCount);
  }

  counterUpdater();
}

function removeInCartHandler(productId) {
  console.log(productId);

  const newGoodsInCart = new Array();

  for (let i = 0; i < goodsInCart.length; i++) {
    const product = goodsInCart[i];

    if (productId == product.id) {
      if (product.count > 1) {
        newGoodsInCart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          imgSrc: product.imgSrc,
          count: product.count - 1,
        });
      }
      updateCartItem(product.id, product.count, product.price);
    } else {
      newGoodsInCart.push(product);
    }
  }

  goodsInCart = newGoodsInCart;
  console.log(goodsInCart);
  counterUpdater();
}

function updateCartItem(id, count, price) {
  const cartItem = document.querySelector(`[data-element-id="${id}"]`);
  const cartItemCount = document.querySelector('.cart-item-count');
  const cartItemPrice = document.querySelector('.cart-item-price');
  console.dir(cartItemCount);

  console.log(count);
  if (count > 1) {
    console.log(price);
    cartItemCount.textContent = `${count - 1}шт.`;
    cartItemPrice.textContent = `₽ ${price - price}`;
  } else {
    cartItem.remove();
  }
  console.log(cartItem);
}

// Функция, которая создаёт объект товара по его названию/цене для добавления в массив goodsInCart - то есть в корзину
function createProduct(product) {
  return {
    id: product.id,
    name: product.name ? product.name : 'Имя неизвестно',
    price: product.price ? product.price : null,
    imgSrc: product.imgSrc ? product.imgSrc : 'goods/default.jpg',
  };
}

// Функция, которая возвращает контент на странице "Товары"
function renderGoods() {
  const div = document.createElement('div');
  div.dataset.activeTabContent = 'true';
  div.className = 'product-items';

  GOODS.forEach((product) => {
    product = createProduct(product);
    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = 'В корзину';
    button.addEventListener('click', () => {
      addInCartHandler(product);
    });

    const productBlock = document.createElement('div');
    productBlock.className = 'product-item';
    productBlock.innerHTML = `
      <img src="${product.imgSrc}">
      <div class="product-list">
        <h3>${product.name}</h3>
        <p class="price">₽ ${product.price}</p>
      </div>
    `;

    productBlock.querySelector('.product-list').append(button);
    console.log(productBlock);

    if (product.price !== null) return div.append(productBlock);
  });

  return div;
}

// Функция, которая возвращает контент на странице "Корзина"1
function renderCart() {
  const divCartItems = document.createElement('div');
  divCartItems.className = 'cart-items';
  divCartItems.dataset.activeTabContent = 'true';

  goodsInCart.forEach((good) => {
    console.log(good);
    const divCartItem = document.createElement('div');
    divCartItem.dataset.elementId = good.id;
    divCartItem.className = 'cart-item';
    divCartItem.innerHTML = `
      <div class="cart-item-title">${good.name}</div>
      <div class="cart-item-count">${good.count}шт.</div>
      <div class="cart-item-price">₽ ${good.price}</div>
    `;

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'cart-item-delete';
    buttonDelete.textContent = 'x';
    buttonDelete.addEventListener('click', () => {
      removeInCartHandler(good.id);
    });

    divCartItem.append(buttonDelete);

    divCartItems.append(divCartItem);
  });

  // console.log(divCartItems);
  return divCartItems;
}
