const { body, validationResult } = require("express-validator");

const userValidate = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("role").isString().isIn(["admin", "guest", "all role"]).optional(),
  body("male").isString().isIn(["male", "female"]).optional(),
];

const movieValidate = [
  body("title").isString(),
  body("genres").isString().optional(),
  body("year").isString().isLength({ min: 4, max: 4 }).optional(),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      status: false,
      message: "Bad Request",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  userValidate,
  movieValidate,
  handleValidationErrors,
};
