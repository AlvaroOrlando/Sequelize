const Filme = require('../models/Filmes')

module.exports = {
    async store(req, res) {
        const { name, genero } = req.body;
        const filme = await Filme.create({name, genero})
        return res.json(filme)
    },
    view:(req,res)=>{
        res.render('filmes',{filmes})
    }
}

 


