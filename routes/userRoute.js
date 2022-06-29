const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

router.use(authController.protect);

router.patch(
  "/:id",
  authController.roles(["admin", "user"]),
  userController.updateUser
);

router.delete(
  "/:id",
  authController.roles(["admin"]),
  userController.deleteUser
);

module.exports = router;
