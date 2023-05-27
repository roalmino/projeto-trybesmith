import express from 'express';
import productsController from './controller/productsController';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);

export default app;
