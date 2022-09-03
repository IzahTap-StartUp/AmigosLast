import express from "express";
import mongoose from "mongoose";
import path from "path";
import blogRouter from "./routers/blogRouter.js";
import userRouter from "./routers/userRouter.js";
import jobRouter from "./routers/jobRouter.js";
import bookRouter from "./routers/bookRouter.js";
import explanationRouter from "./routers/explanationRouter.js";
import User from "./models/userModel.js";
import Book from "./models/bookModel.js";
import Job from "./models/jobModel.js";
import Explanation from "./models/explanationModel.js";
import Blog from "./models/blogModel.js";
import AdminBro from "admin-bro";
import mongooseAdminBro from "@admin-bro/mongoose";
import AdminBroExpress from "admin-bro-expressjs";
import cors from "cors";
import pkg from "bcryptjs";
const { compareSync } = pkg;

const app = express();

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://wearespe2020:wearespe2020@cluster0.m11b8.mongodb.net/spekhazar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
// Database Adapter
AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = {
  resources: [User, Explanation, Job, Blog, Book],
  branding: {
    companyName: "IzahTap",
    softwareBrothers: false,
  },
};

const adminBro = new AdminBro(AdminBroOptions);

const adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email, role: "admin" });
    if (user) {
      if (compareSync(password, user.password.toString())) return user;
    }
    return false;
  },
  cookiePassword: "izahtap",
});

app.use(adminBro.options.rootPath, adminRouter);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routers
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/books", bookRouter);
app.use("/api/explanations", explanationRouter);

// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/frontend/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
// );

app.get("/", (req, res) => {
  res.send("WE ARE IZAHTAP ");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve bizimkidi  at http://localhost:${port}`);
});
