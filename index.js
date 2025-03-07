import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoute.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(bodyParser.json());
dotenv.config();

// Allow all origins
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/events", eventRoutes); // Prefixing routes with /api/events

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
