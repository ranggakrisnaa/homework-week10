const express = require("express");
const router = express.Router();
const userController = require("../controllers/api/userController");

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUserId);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
