import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import postRoute from "./Routes/postRoute.js";
import dalleRoute from "./Routes/dalleRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/posts", postRoute);
app.use("/api/dalle", dalleRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

try {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .catch((err) => {
      console.log(err);
    });

  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}
