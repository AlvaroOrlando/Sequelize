const Filme = require('../models/Filmes')

module.exports = {
   
    teste: (req,res)=>{
        res.send(req.body)
    },
    view: (req,res)=>{
        res.render('index')
    },
    async list(req,res) {
        const { genero } = req.body;
        if(genero == "Comédia"){
            let filmes = await Filme.findAll({
                where:{
                    genero: 'Comédia'
                }
            })
            res.render('filmes',{filmes});
        }else if(genero == "Ação"){
                filmes = await Filme.findAll({
                    where:{
                        genero: 'Ação'
                    }
                })
                res.render('filmes',{filmes});
        } else{
            res.send('Filme não encontrado!')
        }
    }
}

