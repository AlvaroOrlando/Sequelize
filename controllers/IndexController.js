const Filme = require('../models/Filmes')

module.exports = {
   
    view: (req,res)=>{
        res.render('index')
    },
    async list(req,res) {
        const { genero } = req.body;
            let filmes = await Filme.findAll({
                where:{
                    genero: genero
                }
            })
              res.render('filmes',{filmes});
         }
    }

