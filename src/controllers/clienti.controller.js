const Cliente = require('../models/cliente.model');


module.exports = {
    index(req, res) {
        res.json({
            message:'Hello world'
        });  
    },
    create(req, res) {
        const { nomeCliente, cognomeCliente, dataNascita, nTelefono, codiceFiscale, nPatente, tipoPatente, email, password }
    }
}