const router = require('express').Router();
const UserRatings = require('../models/UserRatingsModel');


let userRatings = []
router.get('/', (req, res, next) => {
    UserRatings.find()
    .then(userRatings => {
        res.status(200).send(userRatings);
    })
    .catch(error => next(error))
})
router.post('/add', async (req, res)=>{

    const userRatings = new UserRatings({
        rating: req.body.rating,
        commentTitle: req.body.commentTitle,
        commentContent: req.body.commentContent

    });
    try{
        const savedUserRatings= await userRatings.save(); 
        res.send(savedUserRatings);

    }
    catch(err)
    {
        res.status(400).send(err);

    }

    router.delete('/:userRatingsId', function (req, res, next) {
        const userRatingsId = req.params.userRatingsId
        
        userRatingsModel.findOneAndDelete({
            _id: userRatingsId
        }).then(userRatings => {
            res.status(200).send('user well deleted !')
        })
        .catch(error => next(error))
    
      
    })
})
module.exports= router;