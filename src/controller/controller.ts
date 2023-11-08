import { Request, Response } from 'express';
import { IAccount, Account } from '../models/accounts';

const insertAccount = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  const { account_id, limit, products }: IAccount = req.body;

  const data = new Account({
    account_id: account_id,
    limit: limit,
    products: products,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

const fetchAlldata = async (req: Request, res: Response): Promise<void> => {
  const users = await Account.find().lean();

  res.status(200).json(users);
};

const updateAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log(req.params);
    await Account.updateOne(
      { account_id: req.params.account_id },
      { $set: { account_id: req.body.account_id } }
    );

    return res.status(200).json({ message: 'Account updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const findAccountById = async (req: Request, res: Response): Promise<any> => {
  try {
    const accountId: number  = req.body.account_id;
    const account: IAccount | null = await Account.findOne({
      account_id: accountId,
    });

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteAccountById = async (req: Request, res: Response): Promise<any> => {
  const accountId: number = parseInt(req.body.account_id);
  const account = await Account.deleteOne({ accountId: req.body.account_id });
  console.log(account, 'deleted');
  return res.send('Deleted');
};

export {
  insertAccount,
  fetchAlldata,
  updateAccount,
  findAccountById,
  deleteAccountById,
};
