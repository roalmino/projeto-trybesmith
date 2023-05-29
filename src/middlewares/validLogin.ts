import { Request, Response, NextFunction } from 'express';

const validLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { username, password } = req.body;
  if (!password || !username) {
    return res
      .status(400)
      .json({ message: '"username" and "password" are required' });
  }

  next();
};

export default validLogin;
