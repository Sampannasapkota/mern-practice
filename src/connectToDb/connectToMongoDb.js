import mongoose from "mongoose";
import { dbUrl } from "../constant.js";

const connectToMongoDB = async () => {
  // code that connect our backend application to database
  await mongoose.connect(dbUrl);
  console.log("application is connected to database successfully.");
};

export default connectToMongoDB;
