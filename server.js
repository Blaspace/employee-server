const express = require("express");
const mongoose = require("mongoose");
const cookiesParser = require("cookie-parser");
const cors = require("cors");
const router = require("./router/appRouter");
require("dotenv").config();

const db_url = process.env.DB_URL;
//const db_url = "mongodb://localhost:27017/training_app";

const app = express();
app.use(express.json());
app.use(cookiesParser());

app.use(
  cors({
    credentials: true,
    origin: "https://management-81es.onrender.com",
    //origin: "http://localhost:3000"
  })
);

mongoose.set("strictQuery", false);
mongoose.connect(db_url, () => {
  app.listen("5000", () => {
    console.log("listening on port: 5000");
  });
});
app.use(router);
