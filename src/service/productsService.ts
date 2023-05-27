import { Product } from 'src/types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

export default {
  create,
};
