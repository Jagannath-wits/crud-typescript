import { Schema, model, Document } from 'mongoose';

interface TierAndDetails {
  tier: string;
  id: string;
  active: boolean;
  benefits: string[];
}

interface ICustomers extends Document {
  username: string;
  name: string;
  address: string;
  birthdate: Date;
  email: string;
  active: boolean;
  accounts: number[];
  tier_and_details: Record<string, TierAndDetails>;
}

const customerSchema = new Schema<ICustomers>({
  username: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  birthdate: { type: Date, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, required: true },
  accounts: [{ type: Number, required: true }],
  tier_and_details: {
    type: Map,
    of: {
      tier: { type: String, required: true },
      id: { type: String, required: true },
      active: { type: Boolean, required: true },
      benefits: [{ type: String, required: true }],
    },
  },
});

const Customers = model<ICustomers>('Customers', customerSchema);

export { Customers, ICustomers };
