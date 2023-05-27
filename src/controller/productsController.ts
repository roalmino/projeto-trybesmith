import { Request, Response } from 'express';
import productsService from '../service/productsService';

async function create(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const newProduct = await productsService.create(body);
  return res.status(201).json(newProduct);
}

export default {
  create,
};
