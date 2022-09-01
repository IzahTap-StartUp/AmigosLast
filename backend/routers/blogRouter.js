const express  = require("express");
const expressAsyncHandler = require("express-async-handler");
const Blog  = require("../models/blogModel.js");
const { isAdmin, isAuth }  = require("../utils.js");

const blogRouter = express.Router();

blogRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const blogs = await Blog.find();
    res.send({ blogs });
  })
);

blogRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.send(blog);
    } else {
      res.status(404).send({ message: "Blog Not Found" });
    }
  })
);

blogRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const blog = new Blog({
      title: "IZAHTAP blog" + Date.now(),
      author: "ADMIN" + Date.now(),
      category: "Study",
      image: "/images/p1.jpg",
      description: "IZAHTAP There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    });
    const createdBlog = await blog.save();
    ``;
    res.send({ message: "Blog Created", blog: createdBlog });
  })
);

blogRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (blog) {
      blog.title = req.body.title;
      blog.author = req.body.author;
      blog.category = req.body.category;
      blog.image = req.body.image;
      blog.description = req.body.description;
      const updatedBlog = await blog.save();
      res.send({ message: "Blog Updated", blog: updatedBlog });
    } else {
      res.status(404).send({ message: "Blog Not Found" });
    }
  })
);

blogRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      const deleteBlog = await blog.remove();
      res.send({ message: "Blog Deleted", blog: deleteBlog });
    } else {
      res.status(404).send({ message: "Blog Not Found" });
    }
  })
);


module.exports = blogRouter