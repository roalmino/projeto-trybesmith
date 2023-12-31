import express from 'express';
import productsController from './controller/productsController';
import orderController from './controller/orderController';
import userController from './controller/userController';
import validLogin from './middlewares/validLogin';
import validProduct from './middlewares/validProduct';

const app = express();

app.use(express.json());

app.post('/products', validProduct, productsController.create);

app.get('/products', productsController.getAll);

app.get('/orders', orderController.getAll);

app.post('/login', validLogin, userController.login);

export default app;
