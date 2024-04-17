import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// const app = express();

dotenv.config({
  path: "./evn",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO DB connection failed !!! ${err}`);
  });
