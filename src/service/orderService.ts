import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function getAll(): Promise<Order[]> {
  const orders = await OrderModel.findAll({
    include: [
      {
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  const ordersWithIds = orders.map((order) => {
    const orderWithIds = order.dataValues;
    orderWithIds.productIds = orderWithIds.productIds?.map(
      ({ id }: any) => id,
    );
    return orderWithIds;
  });
  return ordersWithIds;
}

export default {
  getAll,
};
