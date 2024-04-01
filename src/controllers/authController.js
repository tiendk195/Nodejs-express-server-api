import User from "../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerValidator, loginValidator } from "../validations/auth";
class AuthController {
  //POST Method :auth/login
  async login(req, res) {
    const { email, password } = req.body;
    //B1 : validate email, password
    const { error } = loginValidator.validate(req.body);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    //check email exitsing
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        message: "Email does not exist",
      });
    }
    //check password
    const validPassword = await bcryptjs.compare(password, userExist.password);
    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    //create token
    const token = jwt.sign({ id: userExist._id }, "secret_key", {
      expiresIn: "1d",
    });
    // b4 remove password in res
    res.status(200).json({
      message: "Login successfully",
      data: { ...userExist.toObject(), password: undefined, token },
    });
  }
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
