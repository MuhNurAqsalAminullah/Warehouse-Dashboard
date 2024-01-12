const jwt = require('jsonwebtoken')
const { User, Role } = require('../models');

exports.authMiddleware = async (req, res, next) => {
    // 1.) fungsi jika kita memasukkan token atau tidak pada header
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return next(res.status(401).json({
            status: 401,
            message: "Anda belum melakukan Login atau Register, token tidak ditemukan"
        }))
    }

    // console.log(token);

    // 2.) fungsi decode verifikasi token
    let decoded;
    try {
        decoded = await jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return next(res.status(401).json({
            error: err,
            message: "Token yang dimasukkan tidak ditemukan / tidak ada"
        }))
    }

    // 3.) Mengambil data user berdasarkan kondisi decode
    const currentUser = await User.findByPk(decoded.id)
    if (!currentUser) {
        return next(res.status(401).json({
            status: 401,
            message: "User telah terhapus dan token sudah tidak bisa digunakan"
        }))
    }
    // console.log(currentUser);

    req.user = currentUser;

    next()
}

exports.permissionUser = (...roles) => {
    return async (req, res, next) => {
        const rolesData = await Role.findByPk(req.user.role_id)

        const roleName = rolesData.name

        if (!roles.includes(roleName)) {
            return next(res.status(403).json({
                status: 403,
                error: "anda tidak dapat mengakses halaman ini!!"
            }))
        }

        next()
    }
}