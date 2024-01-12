const { Barang_masuk } = require("../models")

exports.getAllBarangMasuk = async (req, res) => {
    try {
        const barangMasuk = await Barang_masuk.findAll();

        res.status(200).json({
            status: "success",
            data: barangMasuk
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            data: "Server Down"
        });
    }
}

exports.createBarangMasuk = async (req, res) => {
    try {
        let { name, jumlah_stok_masuk } = req.body;

        const newStok = await Barang_masuk.create(
            {
                name,
                jumlah_stok_masuk
            }
        );

        res.status(201).json({
            status: "success",
            data: newStok
        })
    } catch (error) {
        return res.status(400).json({
            status: "Failed",
            error: error
        })
    }
}