const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'Gabriel' },
        { id: 2, nombre: 'Yahir' },
        { id: 3, nombre: 'Rob' }
    ];
    res.json(clientes);
});

app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Mac' },
        { id: 2, nombre: 'iPhone' },
        { id: 3, nombre: 'iPad' }
    ];
    res.json(productos);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
