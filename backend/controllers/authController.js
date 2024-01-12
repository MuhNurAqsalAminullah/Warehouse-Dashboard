const { User, Role } = require('../models')
const jwt = require('jsonwebtoken')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.registerUser = async (req, res) => {
    try {
        if (req.body.password != req.body.passwordConfirm) {
            return res.status(400).json({
                message: "Validasi error",
                error: ["Password dan PasswordConfirm tidak sama"]
            })
        }

        const newUser = await User.create({
            name: req.body.name,
            jabatan: req.body.jabatan,
            jenis_kelamin: req.body.jenis_kelamin,
            email: req.body.email,
            password: req.body.password
        })

        const token = signToken(newUser.id)

        return res.status(201).json({
            message: "Berhasil Register",
            data: newUser,
            token,
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Validasi Error",
            error: error.errors.map(err => err.message)
            // error
        })
    }
}

exports.loginUser = async (req, res) => {
    // 1.) fungsi validasi
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            status: "Failed",
            message: "Error Validasi",
            error: "Tolong input email atau password anda"
        })
    }

    // 2.) melakukan pengecekan apakah email yang di input sudah ada di database
    // dan password yang diinput sudah benar
    const userData = await User.findOne({ where: { email: req.body.email }, include: Role })
    // const rolesData = await Role.findByPk(req.user.role_id)

    if (!userData || !(await userData.CorrectPassword(req.body.password, userData.password))) {
        return res.status(400).json({
            status: "Failed",
            message: "Login Error",
            error: "Invalid Email or Password"
        })
    }

    // 3.) Mendapatkan Token pada login berhasil
    const token = signToken(userData.id)
    const roleName = userData.Role.get()

    // console.log("informasi User : ", userData.get());
    // console.log("role : ", roleName.name);
    // console.log("informasi Role : ", userData.Role.get());
    // const roleName = rolesData.name

    return res.status(201).json({
        status: "Success",
        message: "Login Berhasil",
        role: roleName.name,
        token,
    })
}

exports.getMyUser = async (req, res) => {
    const currentUser = await User.findByPk(req.user.id, { include: Role })
    const currentRole = currentUser.Role.get();
    // console.log(currentUser);
    // console.log("coba : ", currentUser.Role.get());

    if (currentUser) {
        return res.status(200).json({
            id: currentUser.id,
            neme: currentUser.name,
            jabatan: currentUser.jabatan,
            jenis_kelamin: currentUser.jenis_kelamin,
            email: currentUser.email,
            role: currentRole.name
        })
    }

    return res.status(404).json({
        message: "User tidak ditemukan"
    })
}