const express = require('express');
const { Router } = express;
const productsRouter = require('./routes/products');

const PORT = process.env.PORT || 8080;

const app = express();

// JSON 
app.use(express.json());


app.use('/api/products', productsRouter);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});
