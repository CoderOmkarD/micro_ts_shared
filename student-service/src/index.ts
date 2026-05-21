import express from "express";
import dotenv from "dotenv";
import connectDB from './config/db';
import studentRoutes from "./routes/student.routes";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Student Service Running On ${PORT}`);
});