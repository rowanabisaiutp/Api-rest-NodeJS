const express = require("express")
const cors = require('cors')
const router = express.Router()

//Se definen las rutas de navegación

const postsController = require("../controller/posts.controller")


//GET (Consumir APi)
// http://localhost:3000/api/v1/posts
// GET (Busqueda por id)
//http://localhost:3000/api/v1/posts/:id
//POST (Agregar nuevo)
//http://localhost:3000/api/v1/posts

/*

{
"id": 2,
"Nombre": "Ejemplo2",
"Apellido": "Ejemplo2"
}

*/

//PUT (Actualizar usuario)

/*

{
"id": 2,
"Nombre": "Ejemplo2",
"Apellido": "Ejemplo2"
}

*/

//DELETE (Eliminar producto)
//http://localhost:3000/api/v1/posts/:id


router.get("/", postsController.getAll)
router.get('/:id', postsController.getById)
router.post('/', postsController.create)
router.put("/:id", postsController.update)
router.delete("/:id", postsController.delete)
//impoertar modulo

module.exports = router
