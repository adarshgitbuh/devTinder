const mongoose = require("mongoose"); //This is the user schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },

  lastNmae: {
    type: String,
  },

  emailId: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    min: 18,
  },

  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender not found");
      }
    },
  },

  photoUrl: {
    type: String,
    default: "https://www.flaticon.com/free-icon/user_149071",
  },

  about: {
    type: String,
    default: "This is the deacfault users!..",
  },
  
  skills: {
    type: [String],
  },
},{timestamps: true});

module.exports = mongoose.model("User", userSchema);
