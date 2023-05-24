import { shopingCartQuantity, showCart } from './modules/cart.js';

const cartIcon = document.querySelector('.shoping_cart');
const productData = JSON.parse(localStorage.getItem('products'));

cartIcon.addEventListener('click', () => {
  showCart(productData);
});
shopingCartQuantity();