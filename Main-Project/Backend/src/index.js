import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("ERROR : ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is lintening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// };
