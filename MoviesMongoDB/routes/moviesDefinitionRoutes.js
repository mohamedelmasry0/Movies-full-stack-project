const router = require('express').Router();
const MoviesDefinition = require('../models/MoviesDefinitionModel');


let moviesDefinitions = []
router.get('/', (req, res, next) => {
    MoviesDefinition.find()
    .then(moviesDefinitions => {
        res.status(200).send(moviesDefinitions);
    })
    .catch(error => next(error))
})


router.post('/add', async (req, res)=>{

    const moviesDefinition = new MoviesDefinition({
        title: req.body.title,
        releaseDate: req.body.releaseDate,
        category: req.body.category,
        movieDirector: req.body.movieDirector

    });
    try{
        const savedMoviesDefinition= await moviesDefinition.save(); 
        res.send(savedMoviesDefinition);

    }
    catch(err)
    {
        res.status(400).send(err);

    }
})
router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    
    MoviesDefinition.findOneAndDelete({
        _id: id
    }).then(moviesDefinitions => {
        res.status(200).send('def well deleted !')
    })
    .catch(error => next(error))

  
})
router.put('/:defId', function (req, res, next) {
    const defId = req.params.defId
    
    MoviesDefinition.findOneAndUpdate({
        _id: defId
    }, {
    
  
    title: req.body.title,
    releaseDate: req.body.releaseDate,
    category: req.body.category,
    movieDirector: req.body.movieDirector
	
	
    })
    .then(moviesDefinitions => res.status(200).send(moviesDefinitions))
    .catch(error => next(error))
    
   
})
module.exports= router;