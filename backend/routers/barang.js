const express = require('express');
const router = express.Router()

const { getAllBarang, createBarang, getOneBarang, updateBarang, deleteBarang } = require('../controllers/barang')
const { authMiddleware, permissionUser } = require('../middleware/userMiddleware')

// Get All Data Barang
router.get("/", authMiddleware, permissionUser("user", "admin"), getAllBarang)

// Get one Data Barang
router.get("/:id", authMiddleware, permissionUser("user"), getOneBarang)

// Create Data Barang
router.post("/", authMiddleware, permissionUser("user", "admin"), createBarang)

// Update Data Barang
router.put("/:id", authMiddleware, permissionUser("user", "admin"), updateBarang)

// Update Data Barang
router.delete("/:id", authMiddleware, permissionUser("user", "admin"), deleteBarang)

module.exports = router;