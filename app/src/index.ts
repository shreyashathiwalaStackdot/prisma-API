import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/api/v1/userRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/v1/users", userRoute);
app.listen(3000, () => console.log(" Server running on port", 3000));