import jwt from "jsonwebtoken";
import User from "../models/userModel";
const checkPermision = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    //decode token
    const data = jwt.verify(token, "secret_key");
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(401).json({
        message: "Not found user",
      });
    }
    //check permision||role
    if (user.role !== "admin") {
      return res.status(401).json({
        message: "Not permision",
      });
    }
    //user permision
    res.local.id = user._id;
    next();
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};
export { checkPermision };
