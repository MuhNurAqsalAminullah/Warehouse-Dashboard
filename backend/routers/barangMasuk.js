const express = require('express');
const router = express.Router()

const { createBarangMasuk, getAllBarangMasuk } = require("../controllers/barangMasuk")
const { authMiddleware, permissionUser } = require("../middleware/userMiddleware")

// get all stok barang masuk
router.get("/", authMiddleware, permissionUser("user", "admin"), getAllBarangMasuk)

// Create plus stok barang masuk
router.post("/", authMiddleware, permissionUser("user", "admin"), createBarangMasuk)

module.exports = router