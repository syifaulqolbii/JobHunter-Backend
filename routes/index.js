const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes"); // Sesuaikan dengan file rute pengguna yang sesuai

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Connected Successfully to Server",
  });
});

// Rute pengguna diarahkan ke file rute terkait pengguna
router.use("/users", userRoutes); // Semua rute terkait pengguna akan diarahkan ke usersRoutes

module.exports = router;
