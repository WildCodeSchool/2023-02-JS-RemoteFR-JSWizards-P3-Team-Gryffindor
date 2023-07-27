const express = require("express");

const router = express.Router();

const usersControllers = require("./controllers/usersControllers");
const oeuvresControllers = require("./controllers/oeuvresControllers");
const { validateUser } = require("./middleware/validator");
const {
  hashPassword,
  verifyPassword,
  // verifyToken,
} = require("./middleware/password");

router.post("/register", validateUser, hashPassword, usersControllers.add);
router.post("/login", usersControllers.login, verifyPassword);
router.get("/oeuvres", oeuvresControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

// router.use(verifyToken);

router.post("/oeuvres", oeuvresControllers.add);
router.delete("/oeuvres/:id", oeuvresControllers.destroy);
router.put("/oeuvres/:id", oeuvresControllers.edit);

module.exports = router;
