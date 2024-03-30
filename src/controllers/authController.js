import User from "../models/userModel";
import { registerValidate } from "../validations/auth";
class AuthController {
  //POST Method :auth/login
  login(req, res) {}
  //POST Method :auth/register
  async register(req, res) {
    try {
      //validate : email,password,username
      const error = registerValidate.validate(req.body, {
        abortEarly: false,
      });
      console.log(error);
      res.status(200).json({
        message: "Register successfully",
        // data: newUser,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}
export default AuthController;
