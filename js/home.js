import { getData } from './modules/getData.js';
import { renderProductCards } from './modules/renderProductCards.js';
import { addProductToCart } from './modules/addProductToCart.js';
import { shopingCartQuantity, showCart } from './modules/cart.js';

const cartIcon = document.querySelector('.shoping_cart');

let productData = [];

const getRandomProduct = (productData) => {
  const randomItems = [];
  while (randomItems.length < 3) {
    const randomIndex = Math.floor(Math.random() * productData.length);
    const randomItem = productData[randomIndex];
    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }
  return randomItems;
};

async function renderRandomProducts() {
  productData = await getData();

  renderProductCards(getRandomProduct(productData));
}


cartIcon.addEventListener('click', () => {
  showCart(productData);
});

renderRandomProducts();
addProductToCart();
shopingCartQuantity();
