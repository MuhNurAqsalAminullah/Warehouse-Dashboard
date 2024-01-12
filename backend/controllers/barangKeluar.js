const { Barang_keluar } = require("../models")

exports.getAllBarangKeluar = async (req, res) => {
    try {
        const barangKeluar = await Barang_keluar.findAll();

        res.status(200).json({
            status: "success",
            data: barangKeluar
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            data: "Server Down"
        });
    }
}

exports.createBarangKeluar = async (req, res) => {
    try {
        let { name, jumlah_stok_keluar } = req.body;

        const outStok = await Barang_keluar.create(
            {
                name,
                jumlah_stok_keluar
            }
        );

        res.status(201).json({
            status: "success",
            data: outStok
        })
    } catch (error) {
        return res.status(400).json({
            status: "Failed",
            error: error
        })
    }
}