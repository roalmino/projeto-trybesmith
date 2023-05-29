import express from 'express';
import productsController from './controller/productsController';
import orderController from './controller/orderController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);

app.get('/products', productsController.getAll);

app.get('/orders', orderController.getAll);

export default app;
