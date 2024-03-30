import User from "../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerValidator, loginValidator } from "../validations/auth";
class AuthController {
  //POST Method :auth/login
  login(req, res) {}
  //POST Method :auth/register
  async register(req, res) {
    try {
      // user_id
      //B1: validate: email, password, username
      const { email, username, avatar, password } = req.body;
      const { error } = registerValidator.validate(req.body);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      // b2: validate email exitsing
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email already exists" });
      }
      // b3 ma hoa password
      const hashPassword = await bcryptjs.hash(password, 10);
      // update db
      const user = await User.create({
        email,
        username,
        avatar,
        password: hashPassword,
      });
      // b4 remove password in res
      res.status(200).json({
        message: "Register successfully",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default AuthController;
