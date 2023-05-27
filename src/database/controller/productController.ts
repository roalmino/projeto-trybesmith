import { Request, Response } from "express";
import productService from "../service/productService";

async function create(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const newProduct = await productService.create(body);
  return res.status(201).json(newProduct);
}

export default {
  create,
};
