import { Request, Response } from 'express';
import orderService from '../service/orderService';

async function getAll(req: Request, res: Response): Promise<Response> {
  const orders = await orderService.getAll();
  return res.status(200).json(orders);
}

export default {
  getAll,
};