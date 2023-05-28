import { Request, Response } from 'express';
import productsService from '../service/productsService';

async function create(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const newProduct = await productsService.create(body);
  return res.status(201).json(newProduct);
}

async function getAll(req: Request, res: Response): Promise<Response> {
  const products = await productsService.getAll();
  return res.status(200).json(products);
}

export default {
  create,
  getAll,
};
