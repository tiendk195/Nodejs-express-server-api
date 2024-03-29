import mongoose from "mongoose";

export default async function connectMogooDB(dbUrl) {
  try {
    await mongoose.connect(dbUrl);
    console.log("DB Connected successfully");
  } catch (error) {
    console.log("DB Connection failed" + error);
  }
}
