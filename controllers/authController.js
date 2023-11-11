// authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  try {
    const { name, email, address, password, phone, role, about, skill } =
      req.body;

    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User dengan email ini sudah terdaftar" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      address,
      password: hashedPassword,
      phone,
      role, // Include user role in the registration process
      about,
      skill,
    });

    // Generate token JWT with user ID and role
    const token = jwt.sign(
      { userId: newUser.id, role: newUser.role },
      "kunci-rahasia-anda",
      { expiresIn: "1h" }
    );

    res
      .status(201)
      .json({ message: "Registrasi berhasil", user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Temukan user dengan email yang diberikan
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email atau password tidak valid" });
    }

    // Validasi paswword yang ada di database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Email atau password tidak valid" });
    }

    // Generate token JWT with user ID and role
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      "kunci-rahasia-anda",
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login berhasil", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

module.exports = { register, login };
