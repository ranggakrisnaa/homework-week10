const express = require("express");
const router = express.Router();
const userController = require("../controllers/api/userController");
const {
  userValidate,
  handleValidationErrors,
} = require("../middlewares/validator");

router.post(
  "/users",
  userValidate,
  handleValidationErrors,
  userController.createUser
);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserId);
router.put(
  "/users/:id",
  userValidate,
  handleValidationErrors,
  userController.updateUser
);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
