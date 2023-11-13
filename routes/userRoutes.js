// Dokumentasi API
// https://documenter.getpostman.com/view/30307534/2s9YXk52Z4

const express = require("express");
const router = express.Router();
const { User } = require("../models"); // Pastikan Anda mengimpor model User dari lokasi yang tepat

// GET: Menampilkan semua data pengguna
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: "Tidak ada pengguna ditemukan" });
    }

    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data pengguna" });
  }
});

// GET: Menampilkan profil pengguna berdasarkan ID
router.get("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data pengguna" });
  }
});

// PUT: Mengedit informasi pengguna berdasarkan ID
router.put("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, address, password, phone, role, about, skill } =
    req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.address = address || user.address;
    user.password = password || user.password;
    user.phone = phone || user.phone;
    user.role = role || user.role;
    user.about = about || user.about;
    user.skill = skill || user.skill;

    await user.save();

    res.json({ message: "Informasi pengguna berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat memperbarui informasi pengguna",
    });
  }
});

// DELETE: Menghapus pengguna berdasarkan ID
router.delete("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    await user.destroy();

    res.json({ message: "Pengguna berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menghapus pengguna" });
  }
});

module.exports = router;
