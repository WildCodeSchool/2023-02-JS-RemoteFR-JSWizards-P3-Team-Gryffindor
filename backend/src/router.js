const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const { validateUser } = require("./middleware/validator");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middleware/password");

router.post("/register", validateUser, hashPassword, usersControllers.add);
router.post("/login", usersControllers.login, verifyPassword);
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
