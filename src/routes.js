const express = require('express');
const routes = express.Router();

const Cliente = require("./controllers/clienti.controller");

routes.get('/', function (req, res) {
    res.json({ message: 'Hello world' });
});



routes.post('/api/clienti', Cliente.create);
routes.get('/api/clienti', Cliente.index);
routes.get('/api/clienti.dettagli', Cliente.dettagli);

module.exports = routes;