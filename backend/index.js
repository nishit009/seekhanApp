import express from "express";
import cors from "cors";
import { prompt } from "./models/prompt.models.js";
import connectDB from "./database.js";
import { User } from "./models/login.models.js";
import { sign } from "./models/signup.models.js";
import fs from "fs";
import multer from "multer";
import os from "os";
import path from "path";

const app = express();
const PORT = 6969;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
const upload = multer({ dest: "temp/" });
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection failed:${error}`);
  });
app.post("/Login", async (req, res) => {
  const { emailId, HashPw } = req.body;
  console.log(req.body);
  const existingUser = await User.findOne({ emailId });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = new User({ email: emailId, password: HashPw });
  await newUser.save();

  res.status(201).json({ message: "User created successfully", user: newUser });
});
app.post("/signup", async (req, res) => {
  const { fname, lname, emailId, pno, gen, HashPw } = req.body;
  console.log(req.body);
  const existingUser = await sign.findOne({ emailId });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }
  const newSignup = new sign({
    firstname: fname,
    lastname: lname,
    email: emailId,
    phoneno: pno,
    gender: gen,
    password: HashPw,
  });
  await newSignup.save();
  res.status(201).json({ message: "signup done", sign: newSignup });
});
app.post("/prompt", async (req, res) => {
  const { userPrompt, answer } = req.body;
  console.log(req.body);
  const newPrompt = new prompt({
    promptInput: userPrompt,
    generatedAnswer: answer,
  });
  await newPrompt.save();
  res.json("data stored in pathavi database");
});
app.post("/trail", (req, res) => {
  console.log(req.body);
  res.json("received motherfucker");
});
app.post("/files", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const dirdownload = path.join(os.homedir(), "Downloads");
    const targetPath = path.join(
      dirdownload,
      `${Date.now()}-${file.originalname}`
    );
    console.log(`File uploaded to: ${targetPath}`);

    fs.renameSync(file.path, targetPath);
    res
      .status(200)
      .json({ message: "File uploaded successfully", path: targetPath });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ error: "Something went wrong" });
  }
});
