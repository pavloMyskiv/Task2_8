const productCards = document.querySelector('.product_cards');

const createProductHTML = (product) => {
  const productHTML = `
    <div  class=" product_card">
     <div class="product_image"> <img src="${product.image}" alt="${product.name}" /></div>
      <h3 id="${product.id}" class="product_name">${product.name}</h3>
      <p>$${product.price}</p>
    </div>`;
  return productHTML;
};
export const renderProductCards = (products) => {
  let resultHTML = '';
  products.forEach((product) => {
    resultHTML = resultHTML + createProductHTML(product);
  });
  productCards.innerHTML = resultHTML;
};
