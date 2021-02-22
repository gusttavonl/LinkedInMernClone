const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const DataSchema = mongoose.Schema({
    nome: String,
    email: String,
    tipo: Number,
    senha: String
}, {
    timestamps: true // data de criação e edição
})

DataSchema.pre('save', function(next){ // antes de salvar algo atraves do model 
    if(this.isModified('senha')){ // se a senha estiver sendo alterada ( put )
        return next()
    } // se nao vai ser a primeira vez dela e entao tera que ser incriptografada
    this.senha = bcrypt.hashSync(this.senha, 10)
})

const usuario = mongoose.model('Usuario', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = usuario; 