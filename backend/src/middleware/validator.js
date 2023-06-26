const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().max(45).required(),
  email: Joi.string().email().max(254).required(),
  password: Joi.string().max(254).required(),
});

const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const { error } = userSchema.validate(
    { username, email, password },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
