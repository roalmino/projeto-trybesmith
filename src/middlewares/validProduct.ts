import { Request, Response, NextFunction } from 'express';

const nameValidation = (name: unknown) => {
  if (!name) {
    return {
      status: 400,
      message: '"name" is required',
    };
  }

  if (typeof name !== 'string') {
    return {
      status: 422,
      message: '"name" must be a string',
    };
  }

  if (name.length < 3) {
    return {
      status: 422,
      message: '"name" length must be at least 3 characters long',
    };
  }
};

const priceValidation = (price: unknown) => {
  if (!price) {
    return {
      status: 400,
      message: '"price" is required',
    };
  }

  if (typeof price !== 'string') {
    return {
      status: 422,
      message: '"price" must be a string',
    };
  }

  if (price.length < 3) {
    return {
      status: 422,
      message: '"price" length must be at least 3 characters long',
    };
  }
};

const validProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { name, price } = req.body;

  const isNameValid = nameValidation(name);
  if (isNameValid) {
    return res
      .status(isNameValid.status)
      .json({ message: isNameValid.message });
  }

  const isPriceValid = priceValidation(price);
  if (isPriceValid) {
    return res
      .status(isPriceValid.status)
      .json({ message: isPriceValid.message });
  }
  
  next();
};

export default validProduct;
