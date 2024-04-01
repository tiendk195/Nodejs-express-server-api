import mongoose from "mongoose";
const Schema = mongoose.Schema;

//username,email:unique,password,role,avatar
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requred: true,
      unique: true,
    },
    password: {
      type: String,
      requred: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      // enum: ["admin", "user"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User = mongoose.model("User", UserSchema);
export default User;
