export async function getData() {
  try {
    const response = await fetch(`../../data/product.json`);
    const data = await response.json();
    localStorage.setItem('products', JSON.stringify(data))
    return data;
  } catch (error) {
    console.error(error);
  }
}