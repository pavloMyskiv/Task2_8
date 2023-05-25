import {
  closeCart,
  quantityChange,
  removeCartItem,
  checkOut,
} from './cartFunctions.js';

const cartIcon = document.querySelector('.shoping_cart');
const wrapper = document.querySelector('.wrapper');

let cart = [];
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

export const shopingCartQuantity = () => {
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    cartIcon.innerHTML = `<p>${cart.length}</p>`;
  }
};
const createItemHTML = (cartItem, item) => {
  return `
  <div id="cartId-${cartItem.id}" class="cart_item">
      <img src="${cartItem.image}" alt="${cartItem.name}" />
      <div class="item_text">
       <h4>${cartItem.name}</h4>
       <p>$${cartItem.price}</p>
       <button data-item-id="${cartItem.id}"  class="remove_button">remove</button>
      </div>
      <div class="item_count">
        <div data-item-id="${cartItem.id}" data-button-action="plus" class="arrow_up quantity_button"></div>
        <p class="counter">${item.quantity}</p>
        <div data-item-id="${cartItem.id}" data-button-action="minus" class="arrow_down quantity_button"></div>
      </div>
  </div>`;
};

const createCartHTML = (productData) => {
  let itemsHTML = ``;
  let total = 0;
  cart.forEach((item) => {
    const cartItem = productData.find((product) => item.id === product.id);
    itemsHTML = itemsHTML + createItemHTML(cartItem, item);
    total = total + cartItem.price * item.quantity;
  });

  return `<aside class="active_shoping_cart">
      <div class="close"></div>
      <h2>Your Bag</h2>
      <div class="cart_items">
        ${itemsHTML}
      </div>
      <p class="total">Total: $<span>${total}</span></p>
      <button class="checkout">Checkout</button>
    </aside> `;
};

export const showCart = (productData) => {
  wrapper.insertAdjacentHTML('afterend', createCartHTML(productData));
  closeCart(wrapper);
  quantityChange(productData, cart);
  removeCartItem(productData, cart);
  checkOut(productData, cart);
};
