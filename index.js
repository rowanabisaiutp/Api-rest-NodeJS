const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const postsRouter = require('./routes/posts.routes')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/posts", cors(), postsRouter)
app.use(cors)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Conexion establecida")
})

