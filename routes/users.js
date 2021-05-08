const express = require("express");
const router = express.Router();
//const User = require("../models/User");
const {
  getUsers,
  getOneUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//rutas con controlador:
router.get("/", getUsers);
router.get("/id", getOneUser);
router.post("/", postUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
