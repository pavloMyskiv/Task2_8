export async function getData() {
    try {
      const response = await fetch(`../../data/product.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }