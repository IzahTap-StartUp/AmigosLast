import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken, isAdmin, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          age: user.age,
          month: user.month,
          year: user.year,
          role: user.role,
          bio: user.bio,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
          country: user.country,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
      age: req.body.age,
      month: req.body.month,
      year: req.body.year,
      role: req.body.role,
      bio: req.body.bio,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      country: req.body.country,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      image: createdUser.image,
      email: createdUser.email,
      age: createdUser.age,
      month: createdUser.month,
      year: createdUser.year,
      role: createdUser.role,
      bio: createdUser.bio,
      phoneNumber: createdUser.phoneNumber,
      gender: req.body.gender,
      country: req.body.country,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);
userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.image = req.body.image || user.image;
      user.age = req.body.age || user.age;
      user.month = req.body.month || user.month;
      user.year = req.body.year || user.year;
      user.bio = req.body.bio || user.bio;
      user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
      user.gender = req.body.gender || user.gender;
      user.country = req.body.country || user.country;
      user.role = req.body.role || user.role;
      user.isAdmin = req.body.isAdmin || user.isAdmin;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        image: updatedUser.image,
        email: updatedUser.email,
        age: updatedUser.age,
        month: updatedUser.month,
        year: updatedUser.year,
        bio: updatedUser.bio,
        phoneNumber: updatedUser.phoneNumber,
        gender: updatedUser.gender,
        role: updatedUser.role,
        country: updatedUser.country,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);





export default userRouter