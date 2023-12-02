// Dokumentasi API
// https://documenter.getpostman.com/view/30307534/2s9YXk52Z4

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {authenticate, authorize} = require('../middleware/authMiddleware');

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id", authenticate, userController.editUserById);
router.delete("/:id", authenticate, userController.deleteUserById);

module.exports = router;
