import { products } from "./constants";

export const getProducts = categoryId => {
  return products.filter(product => product.category.id === categoryId);
};

export const getProductById = id => {
  return products.find(product => product.id === id);
};
