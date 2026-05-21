import mongoose from "mongoose";
import dotenv from "dotenv"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
