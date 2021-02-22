const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    titulo: String,
    imagem: String,
    usuario: String,
    descricaoUsuario: String

})

const video = mongoose.model('Publicacao', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = video; 