const router = require('express').Router();
const Film = require('../models/FilmModel');


let films = []
router.get('/', (req, res, next) => {
    Film.find()
    .then(films => {
        res.status(200).send(films);
    })
    .catch(error => next(error))
})
router.delete('/:filmId', function (req, res, next) {
    const filmId = req.params.filmId
    
    Film.findOneAndDelete({
        _id: filmId
    }).then(films => {
        res.status(200).send('film well deleted !')
    })
    .catch(error => next(error))

  
})

router.post('/add', async (req, res)=>{
  
    const film = new Film({
        name: req.body.name,
        link: req.body.link

    });
    try{
        const savedFilm= await film.save(); 
        res.send(savedFilm);

    }
    catch(err)
    {
        res.status(400).send(err);

    }

    
})
router.put('/:filmId', function (req, res, next) {
    const filmId = req.params.filmId
    
    Film.findOneAndUpdate({
        _id: filmId
    }, {
    
    name: req.body.name,
	link: req.body.link
	
	
    })
    .then(films => res.status(200).send(films))
    .catch(error => next(error))
    
   
})
module.exports= router;