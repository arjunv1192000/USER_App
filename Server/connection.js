import mongoose from "mongoose";
import config from "./config.js";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://arjunvmaniyara:J49GbHFBFQY899GI@cluster0.pa5obeh.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
