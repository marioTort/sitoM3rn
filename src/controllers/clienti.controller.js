const Cliente = require('../models/cliente.model');


module.exports = {
    index(req, res) {
        res.json({
            message:'Hello world'
        });
    },
    async create(req, res) {
        const { nomeCliente, cognomeCliente, dataNascita, nTelefono, codiceFiscale, nPatente, tipoPatente, email, password } = req.body;
        let data = {};
        let user = Cliente.findOne({email});
        if(!user){
            data = {nomeCliente, cognomeCliente, dataNascita, nTelefono, codiceFiscale, nPatente, tipoPatente, email, password};
            user = await Cliente.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    }
}