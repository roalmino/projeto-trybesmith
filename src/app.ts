import express from 'express';
import productController from './database/controller/productController';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

export default app;
