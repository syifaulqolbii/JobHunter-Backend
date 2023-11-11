const express = require('express');
const router = express.Router();
const { router: authRouter, checkAuth } = require('./authRoutes'); // Mengimpor router dan checkAuth dari authRoutes

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Terhubung dengan Sukses ke Server'
  });
});

// Menggunakan rute untuk registrasi dan login
router.use('/auth', checkAuth, authRouter);

module.exports = router;
