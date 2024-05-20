import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userProfile = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userProfile.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userProfile.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userProfile);
export default User;
