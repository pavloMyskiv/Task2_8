import { getData } from './modules/getData.js';
import { renderProductCards } from './modules/renderProductCards.js';
import { addProductToCart } from './modules/addProductToCart.js';
import { shopingCartQuantity, showCart } from './modules/cart.js';

const cartIcon = document.querySelector('.shoping_cart');

let productData = [];

const manufactures = document.querySelectorAll('.manufacture');
for (let manufacture of manufactures) {
  manufacture.addEventListener('click', () => {
    const filteredProduct = productData.filter(
      (product) => manufacture.textContent == product.manufacturer
    );
    renderProductCards(filteredProduct);
  });
}

const search = document.querySelector('.search');
search.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const filteredProducts = productData.filter(
      (product) => search.value == product.name
    );
    if (filteredProducts.length) {
      renderProductCards(filteredProducts);
    } else {
      renderProductCards(productData);
    }
  }
});

const price = document.querySelector('.inputPrise');
price.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const filteredProducts = productData.filter(
      (product) => price.value == product.price
    );
    if (filteredProducts.length) {
      renderProductCards(filteredProducts);
    } else {
      renderProductCards(productData);
    }
  }
});

async function renderProducts() {
  productData = await getData();
  renderProductCards(productData);
}

cartIcon.addEventListener('click', () => {
  showCart(productData);
});
renderProducts();
shopingCartQuantity();
addProductToCart();
