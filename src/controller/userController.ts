import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userService from '../service/userService';

const secret = process.env.JWT_SECRET || 'secret';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const user = await userService.findUser(username, password);

  if (!user) return res.status(401).json({ message: 'Username or password invalid' });

  let token;
  if (typeof user === 'object') {
    token = jwt.sign({ data: { userId: user.id, userName: user.username } }, secret);
  }
  
  return res.status(200).json({ token });
}

export default {
  login,
};
