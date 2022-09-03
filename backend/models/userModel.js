import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    image: { type: String, required: false },
    bio: { type: String, default: "I am a student" },
    phoneNumber: { type: String, default: "123456789" },
    gender: { type: String, default: "Male" },
    country: { type: String, default: "Azerbaijan" },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'restricted'], required: false, default: "restricted"},
    isAdmin: {type: Boolean, default: false, required: true},
    isSeller: { type: Boolean, default: true, required: true },
    seller: {
      name: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;