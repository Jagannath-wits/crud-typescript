"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountSchema = new mongoose_1.Schema({
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
// Create the "accounts" model
const Account = (0, mongoose_1.model)("Account", accountSchema);
exports.default = Account;
