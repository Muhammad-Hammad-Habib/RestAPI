import mongoose from "mongoose";

const connectDB = async (DBurl) => {
  try {
    const database = {
      dbName: "School_management",
    };
    await mongoose.connect(DBurl,database);
    console.log(`DataBase Connected`);
  } catch (error) {
    console.log(`Error in dataBase connection ${error}`);
  }
};

export default connectDB;