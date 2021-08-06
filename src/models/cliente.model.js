const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({ 
    nomeCliente: String,
    cognomeCliente: String, 
    dataNascita: Date,
    nTelefono: Number,
    codiceFiscale: String, 
    nPatente: String,
    tipoPatente: {type: Number, default: 0},     // 0=no patente, 1 = AM, 2 = A1, 3 = B
    email: String,
    password: String
}, {
    timestamps: true
});

DataSchema.pre('save', function(next){
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 8);
    next();
});

const clienti = mongoose.model('Clienti', DataSchema);
module.exports = clienti;
