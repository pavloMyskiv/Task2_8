/** @format */

import { shopingCartQuantity } from './cart.js';

const totalChange = (productData, cart) => {
  const totalValue = document.querySelector('.total');
  let total = cart.reduce((total, cartItem,) => {
    const product = productData.find((product) => cartItem.id === product.id);
    return total + product.price * cartItem.quantity;
  },0);
  totalValue.textContent = `Total: $${total}`;
};

export const quantityChange = (productData, cart) => {
  const quantityButtons = document.querySelectorAll('.quantity_button');

  for (let button of quantityButtons) {
    button.addEventListener('click', () => {
      const itemCardElement = document.getElementById(
        `cartId-${button.dataset.itemId}`
      );
      const counter = itemCardElement.querySelector('.counter');

      let cartItem = cart.find((item) => item.id == button.dataset.itemId);

      if (button.classList.contains('arrow_up')) {
        cartItem.quantity++;
      } else if (button.classList.contains('arrow_down')) {
        cartItem.quantity--;
      }

      if (cartItem.quantity == 0) {
        const indexCartItem = cart.indexOf(cartItem);

        if (indexCartItem !== -1) {
          cart.splice(indexCartItem, 1);
          itemCardElement.remove();
        }
      } else {
        counter.innerText = cartItem.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      totalChange(productData, cart);
    });
  }
};

export const removeCartItem = (productData, cart) => {
  const removeButton = document.querySelectorAll('.remove_button');

  for (let button of removeButton) {
    button.addEventListener('click', () => {
      const itemCardElement = document.getElementById(
        `cartId-${button.dataset.itemId}`
      );
      const cartItem = cart.find((item) => item.id == button.dataset.itemId);
      const indexCartItem = cart.indexOf(cartItem);

      if (indexCartItem !== -1) {
        cart.splice(indexCartItem, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        itemCardElement.remove();
        totalChange(productData, cart);
      }
    });
  }
};

export const closeCart = (wrapper) => {
  wrapper.classList.add('block');
  const close = document.querySelector('.close');
  const activeCart = document.querySelector('.active_shoping_cart');
  close.addEventListener('click', () => {
    activeCart.remove();
    wrapper.classList.remove('block');
    shopingCartQuantity();
  });
};
export const checkOut = (productData, cart) => {
  const checkOutButton = document.querySelector('.checkout');
  checkOutButton.addEventListener('click', () => {
    const cartItems = document.querySelector('.cart_items');

    cartItems.innerHTML = '';
    cart.splice(0, cart.length);
    localStorage.setItem('cart', JSON.stringify(cart));
    totalChange(productData, cart);
    alert('Your order was sent');
  });
};
