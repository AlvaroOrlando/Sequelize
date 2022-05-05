const Filme = require('../models/Filmes')

module.exports = {
    async store(req, res) {
        const { name, genero } = req.body;
        const filme = await Filme.create({name, genero})
        return res.json(filme)
    },
    async index(req,res) {
        const filmes = await Filme.findAll();
        
        return res.json(filmes);
    }
}

