const express = require('express');
const { register, login } = require('../controllers/authController');
const checkRole = require('../middleware/checkRoleMiddleware'); // Import middleware
const { User } = require('../models');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Rute untuk registrasi
router.post('/register', register);

// Rute untuk login
router.post('/login', login);

// Rute yang hanya dapat diakses oleh pengguna dengan peran "company"
router.get('/company-dashboard', checkRole(['company']), (req, res) => {
  res.status(200).json({ message: 'Selamat datang di dashboard perusahaan' });
});

// Rute yang hanya dapat diakses oleh pengguna dengan peran "user"
router.get('/user-dashboard', checkRole(['user']), (req, res) => {
  res.status(200).json({ message: 'Selamat datang di dashboard pengguna' });
});

// Rute untuk mendapatkan informasi profil pengguna yang telah login
router.get('/profile', checkAuth, (req, res) => {
  const userId = req.user.userId; 
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'Profil pengguna tidak ditemukan' });
      }
      // informasi  kepada pengguna
      const userProfile = {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        role: user.role,
        about: user.about,
        skill: user.skill,
      };
      res.status(200).json({ message: 'Informasi profil pengguna', user: userProfile });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    });
});

// Middleware untuk memeriksa otentikasi
function checkAuth(req, res, next) {
  // Get token dari header Authorization
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token JWT tidak ditemukan' });
  }

  // Verifikasi token
  jwt.verify(token.split(' ')[1], 'kunci-rahasia-anda', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token JWT tidak valid' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { router, checkAuth };
