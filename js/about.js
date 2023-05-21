import { getData } from './modules/getData.js';
import { shopingCartQuantity, showCart } from './modules/cart.js';

const cartIcon = document.querySelector('.shoping_cart');
let productData = [];

async function getProductData() {
  productData = await getData();
}

cartIcon.addEventListener('click', () => {
  showCart(productData);
});
getProductData();
shopingCartQuantity();
