import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username not empty",
    "string.min": "Username must be at least 3 characters",
  }),
  email: Joi.string().email().messages({
    "string.email": "Email must be valid",
  }),
  password: Joi.string(),
  avatar: Joi.string(),
  role: Joi.string(),
}).options({
  abortEarly: false,
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidator, loginValidator };
