const express = require("express")
const mongoose = require("mongoose")
const path = require("path");
const blogRouter = require("./routers/blogRouter.js");
const userRouter = require("./routers/userRouter.js");
const jobRouter = require("./routers/jobRouter.js");
const bookRouter = require("./routers/bookRouter.js");
const explanationRouter = require("./routers/explanationRouter.js");
const uploadRouter = require("./routers/uploadRouter.js");
const User = require("./models/userModel.js");
const Book = require("./models/bookModel.js");
const Job = require("./models/jobModel.js");
const Explanation = require("./models/explanationModel.js");
const Blog = require("./models/blogModel.js");
const AdminBro = require("admin-bro");
const mongooseAdminBro = require("@admin-bro/mongoose");
const AdminBroExpress = require("admin-bro-expressjs");
const cors = require("cors");
const pkg = require("bcryptjs");
const { compareSync } = pkg;


const {
  after: uploadAfterHook,
  before: uploadBeforeHook
} = require('./actions/upload-image.js')


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
  resources: [
    User,
    Book,
    Explanation,
    Job,
    {
      resource: Blog,
      options: {
          properties: {
              image: {
                  components: {
                      edit: AdminBro.bundle('./components/bannerImage.tsx'),
                      show: AdminBro.bundle('./components/bannerImageList.tsx'),
                      list: AdminBro.bundle('./components/bannerImageList.tsx')
                  }
              },
              _id: { isVisible: false },
              created_at: { isVisible: false }
          },
          actions: {
              new:{
                  // handler: (response, request,context) => {
                  //     console.log(request.files.image);
                  // }
                  // after: async (response, request, context) => {
                  //     return uploadAfterHook(response, request, context);
                  // }
                  // ,
                  before: async (request, context) => {
                      return uploadBeforeHook(request, context);
                  }
              },
              edit: {
                  before: async (request, context) => {
                      return uploadBeforeHook(request, context);
                  }
              },
              bulkDelete: { isVisible: false },
              delete: { isVisible: false }
          }
      }
  },
  ],
  //  export React component
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
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/jobs", jobRouter);
app.use("/api/books", bookRouter);
app.use("/api/explanations", explanationRouter);





app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

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
