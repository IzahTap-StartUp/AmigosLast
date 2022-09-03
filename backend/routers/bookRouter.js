
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Book from '../models/bookModel.js';
import { isAuth} from "../utils.js";

const bookRouter = express.Router();

bookRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const title = req.query.title || "";
    const category = req.query.category || "";
    const titleFilter = title
      ? { title: { $regex: title, $options: "i" } }
      : {};
    const categoryFilter = category ? { category } : {};
    const count = await Book.count({
      ...titleFilter,
      ...categoryFilter,
    });
    const books = await Book.find({
      ...titleFilter,
      ...categoryFilter,
    });
    res.send({ books });
  })
);

bookRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Book.find().distinct("category");
    res.send(categories);
  })
);

bookRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.send(book);
    } else {
      res.statusCode(404).send({ message: "There is no book like that" });
    }
  })
);

// 


// Get all books of a seller without id
bookRouter.get(
  "/seller/:id",
  expressAsyncHandler(async (req, res) => {
    const books = await Book.find({ seller: req.params.id });
    if (books) {
      res.send(books);
    } else {
      res.statusCode(404).send({ message: "There is no book like that" });
    }
  })
);

bookRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const book = new Book({
      title: "IZAHTAP book" + Date.now(),
      seller: req.user._id,
      category: "MARKETING",
      author: "ADMIN" + Date.now(),
      image: "/images/p1.jpg",
      situation: "AVAILABLE",
      phoneNumber: "0912341234",
      price: "100",
      description:
        "IZAHTAP There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    });
    const createdBook = await book.save();
    ``;
    res.send({ message: "Book Created", book: createdBook });
  })
);

bookRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      book.title = req.body.title;
      book.author = req.body.author;
      book.category = req.body.category;
      book.image = req.body.image;
      book.situation = req.body.situation;
      book.phoneNumber = req.body.phoneNumber;
      book.price = req.body.price;
      book.description = req.body.description;
      const updatedBook = await book.save();
      res.send({ message: "Book Updated", book: updatedBook });
    } else {
      res.status(404).send({ message: "Book Not Found" });
    }
  })
);

bookRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (book) {
      const deleteBook = await book.remove();
      res.send({ message: "Book Deleted", book: deleteBook });
    } else {
      res.status(404).send({ message: "Book Not Found" });
    }
  })
);

export default bookRouter;