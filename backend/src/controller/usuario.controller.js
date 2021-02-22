const { update } = require("../model/usuario.model");
const Usuario = require("../model/usuario.model")

module.exports = {
    async index(req, res) {
        const user = await Usuario.find();

        res.json(user)
    },

    async detail(req, res) {
        const {_id} = req.params
        const user = await Usuario.findOne({_id});

        res.json(user)
    },

    async delete(req, res) {
        const {_id} = req.params
        const user = await Usuario.findByIdAndDelete({_id});

        res.json({Message: "Excluido com Sucesso"})
    },

    async create(req, res) {
        const { nome, email, tipo, senha } = req.body;

        let data = {};

        let user = await Usuario.findOne({ email }) //buscando um usuaario com o email que ele esta tentando cadastrar
        if (!user) { // se nao existir o user atraves do email ele vai cadastrar executando isso
            data = { nome, email, tipo, senha } // vars vindo co corpo
            user = await Usuario.create(data) // criando o user atraves das var que vem do corpo
            return res.status(200).json(user)
        }else{
            return res.status(500).json(user)
        }
    },

    async update(req, res) {
        const { _id, nome, email, tipo, senha } = req.body;

        let data = {};

        data = { _id, nome, email, tipo, senha } // vars vindo co corpo
        user = await Usuario.findByIdAndUpdate({_id}, data, {new: true}) // criando o user atraves das var que vem do corpo
        return res.status(200).json(user)
      
    }
}