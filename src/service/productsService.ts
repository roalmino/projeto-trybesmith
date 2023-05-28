import { Product } from 'src/types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

async function getAll(): Promise<Product[]> {
  const products = await ProductModel.findAll();
  const productsList = products.map((product) => product.dataValues);
  return productsList;
}

export default {
  create,
  getAll,
};
