import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/tasks.js";

const app = express();

app.use(cors());

app.use();

mongoose.connect("mongodb://127.0.0.1:27017/notes");

app.listen(5000, () => {
    console.log("Server running on port 5000");
});