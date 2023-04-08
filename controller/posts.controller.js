const pool= require("../database/index")

const postsController = {

    getAll: async (req, res) => {
        try{
            const [rows, fields] = await pool.query("SELECT * FROM Usuarios")
            res.json({
                data: rows
            })
        } catch(error){
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },
    getById: async (req, res) =>{
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("SELECT * FROM Usuarios where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    create: async (req, res) =>{
        try {
            const { id, nombre, apellido } = req.body
            const sql = "INSERT INTO Usuarios (id, nombre, apellido) VALUES (?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [id, nombre, apellido])
            res.json({
                data:rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    update: async (req, res) => {
        try {
            const { nombre, apellido } = req.body
            const { id } = req.params
            const sql = "update Usuarios set nombre = ?, apellido = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [nombre, apellido, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },
    
    delete: async (req, res) =>{
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("DELETE FROM Usuarios WHERE id = ?",[id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = postsController
