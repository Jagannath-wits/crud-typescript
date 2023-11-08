"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importStar(require("mongoose"));
// Define the connection URL
const dbURL = "mongodb://localhost:27017/sample_analytics";
// Create a function to connect to the database
async function connectToDatabase() {
    try {
        await mongoose_1.default.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
// Call the function to connect to the database
connectToDatabase();
console.log(mongoose_1.connection);
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
app.use("/", routes_1.default);
app.use("/", routes_1.default);
app.use("/", routes_1.default);
app.use("/", routes_1.default);
app.use("/", routes_1.default);
app.use("/", routes_1.default);
app.use((req, res) => {
    return res.send("Not Found");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
