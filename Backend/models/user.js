const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    phoneNumber: {type: Number,required:true},
    isActive: { type: Boolean, default: true },

    time: { type: Date, default: Date.now },
    role: { type: String, enum: ["student", "recruiter","Admin"], default: "student" },
    profile: {
      bio: { type: String },
      //skills: [{type: String}],
      pfp: { type: String, default: "default.png" },
      company: { type: mongoose.Schema.ObjectId, ref: "Company" },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
