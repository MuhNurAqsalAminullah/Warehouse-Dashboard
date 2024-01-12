const express = require('express');
const router = express.Router()

const { createBarangKeluar, getAllBarangKeluar } = require('../controllers/barangKeluar');
const { authMiddleware, permissionUser } = require('../middleware/userMiddleware');

// Get all out stok barang keluar
router.get("/", authMiddleware, permissionUser("user", "admin"), getAllBarangKeluar)
// Create out stok barang keluar
router.post("/", authMiddleware, permissionUser("user", "admin"), createBarangKeluar)

module.exports = router