const express = require('express');

const barangKeluarControllers = require('./routers/barangKeluar')
const barangMasukControllers = require('./routers/barangMasuk')
const barangControllers = require('./routers/barang')
const authRouters = require('./routers/authRouter')

const morgan = require('morgan');
const cors = require('cors')

const dotenv = require('dotenv')
const app = express()

dotenv.config()

// middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routers
app.use("/api/auth", authRouters)
app.use("/api/barang", barangControllers)
app.use("/api/barang-masuk", barangMasukControllers)
app.use("/api/barang-keluar", barangKeluarControllers)

// app.get("/api/barang", (req, res) => {
//     res.send("Hello World")
// })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server Running in port ${PORT}`);
})