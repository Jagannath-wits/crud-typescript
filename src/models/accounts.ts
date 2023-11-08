import { Schema, model, Document } from 'mongoose';

interface IAccount extends Document {
  account_id: number;
  limit: number;
  products: string[];
}

const accountSchema: Schema<IAccount> = new Schema({
  account_id: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true, 
  },
  products: {
    type: [String],
    required: true,
  },
});
const Account = model<IAccount>('Account', accountSchema);

export { Account, IAccount };
