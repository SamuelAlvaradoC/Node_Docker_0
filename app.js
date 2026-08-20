const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
 res.json({ mensaje: '¡Hola desde Docker!' });
});

app.listen(PORT, '0.0.0.0',  () => {
 console.log(`Servidor corriendo en el puerto ${PORT}`);
});