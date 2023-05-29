import { User } from 'src/types/User';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

async function findUser(username: string, password: string): Promise<User | boolean> {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) return false;
  return user.dataValues;
}

export default {
  findUser,
};
