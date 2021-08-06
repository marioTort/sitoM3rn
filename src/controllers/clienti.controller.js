const Cliente = require('../models/cliente.model');


module.exports = {
    index(req, res) {
        res.json({
            message:'Hello world'
        });
    },
    create(req, res) {
        const { nomeCliente, cognomeCliente, dataNascita, nTelefono, codiceFiscale, nPatente, tipoPatente, email, password } = req.body;
        let data = {};
        let user = Cliente.findOne({email});
        if(!user){
            data = {nomeCliente, cognomeCliente, dataNascita, nTelefono, codiceFiscale, nPatente, tipoPatente, email, password};
            user = Cliente.create(data);
        }
    }
}