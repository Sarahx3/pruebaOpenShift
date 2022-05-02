
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send({
        message: 'Hola mundito'
    })
    console.log('hola mundito');
})


app.listen(PORT || 3000, () => {
    console.log(`Proyecto Aide escuchando en el puerto ${ PORT }`);
})