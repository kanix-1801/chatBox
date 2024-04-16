import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
const app = express();
// import "dotenv";
// require("dotenv").config({
//   path: "./evn",
// });
// // import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./evn",
});

connectDB();
