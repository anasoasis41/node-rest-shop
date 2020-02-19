const express = require("express");
const router = express.Router();

const UserController = require('../controllers/userController');
const checkAuth = require('../middleware/check-auth');

// Create User
router.post("/signup", UserController.user_signup);

// Login user
router.post("/login", UserController.user_login);

// Delete User
router.delete("/:userId", UserController.user_delete);

module.exports = router;