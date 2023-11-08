import express, { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Customers } from '../models/customers';
import {
  fetchAlldata,
  insertAccount,
  updateAccount,
  findAccountById,
  deleteAccountById
} from '../controller/controller';
const routers: Router = express.Router();
const dbURL: string = 'mongodb://localhost:27017/sample_analytics';

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURL);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

routers.post(
  '/insert-accounts',
  async (req: Request, res: Response) => await insertAccount(req, res)
);

routers.get(
  '/all-data-accounts',
  async (req: Request, res: Response) => await fetchAlldata(req, res)
);

routers.get('/all-data-customers', async (req: Request, res: Response) => {
  const users = await Customers.find().lean();
  return res.send(users);
});

routers.put('/:account_id', async (req: Request, res: Response) => {
  await updateAccount(req, res);
});
routers.get(
  '/account-by-id',
  async (req: Request, res: Response) => await findAccountById(req, res)
);

routers.delete(
  '/delete-by-id',
  async (req: Request, res: Response) => await deleteAccountById(req, res)
);

export default routers;
