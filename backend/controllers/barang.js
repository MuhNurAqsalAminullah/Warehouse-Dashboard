const { Barang } = require("../models");

exports.getAllBarang = async (req, res) => {
    try {
        const barang = await Barang.findAll();

        res.status(200).json({
            status: "success",
            data: barang
        })

    } catch (error) {
        res.status(500).json({
            status: "Failed",
            data: "Server Down"
        });
    }
}

exports.getOneBarang = async (req, res) => {
    try {
        const id = req.params.id
        const barang = await Barang.findByPk(id);

        if (!barang) {
            res.status(404).json({
                status: "Failed",
                data: "Data id tidak ditemukan"
            });
        }

        res.status(200).json({
            status: "success",
            data: barang
        });

    } catch (error) {
        res.status(500).json({
            status: "Failed",
            data: "Server Down"
        });
    }
}

exports.createBarang = async (req, res) => {
    try {
        let { name, kuantitas } = req.body;

        const newBarang = await Barang.create(
            {
                name,
                kuantitas
            }
        );

        res.status(201).json({
            status: "Success",
            data: newBarang
        })

    } catch (error) {
        return res.status(400).json({
            status: "Failed",
            error: error.errors
        })
    }
}

exports.updateBarang = async (req, res) => {
    try {
        const id = req.params.id

        await Barang.update(req.body, {
            where: {
                id: id
            }
        });

        const updateBarangs = await Barang.findByPk(id)

        if (!updateBarangs) {
            return res.status(400).json({
                status: "Failed",
                error: "id tidak ditemukan"
            })
        }

        res.status(201).json({
            status: "Success",
            data: updateBarangs
        })
    } catch (error) {
        return res.status(500).json({
            status: "Failed",
            error: "Server Down"
        })
    }
}

exports.deleteBarang = async (req, res) => {
    const id = req.params.id

    const idBarang = await Barang.findByPk(id)

    if (!idBarang) {
        return res.status(404).json({
            status: "Failed",
            error: "id tidak ditemukan"
        })
    }

    await Barang.destroy({
        where: {
            id
        }
    });

    res.status(200).json({
        status: "Success",
        message: `Data dengan id ${id} berhasil dihapus`
    })
}