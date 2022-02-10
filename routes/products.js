const express = require('express');
const { Router } = express;

const router = Router();



// Products
const products = [
    {name: "Producto 1", price: 100, id: 1},
    {name: "Producto 2", price: 200, id: 2},
    {name: "Producto 3", price: 300, id: 3},
    {name: "Producto 4", price: 400, id: 4},
    {name: "Producto 5", price: 500, id: 5}
];


// CRUD OPERATIONS
router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const index = products.findIndex( elem => elem.id == id);

    if(index != -1){
        res.send(products[index]);
    }
    else res.status(404).send("No existe un producto con ese ID");
})

// router.post()

// router.put()

// router.delete()





module.exports = router;