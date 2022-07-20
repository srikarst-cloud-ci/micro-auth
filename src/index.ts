import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://srikarst:srikar10@cluster0.gopsx.mongodb.net/micro-authdb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
