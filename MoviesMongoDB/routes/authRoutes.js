const router = require('express').Router();
const User = require('../models/UserModel');

//Validation
// const joi = require ('@hapi/joi')
// const scchema={
//     email: joi.required().email,
//     password: joi.string().required()
// }
let users = []
router.get('/', (req, res, next) => {
    User.find()
    .then(users => {
        res.status(200).send(users);
    })
    .catch(error => next(error))
})
router.delete('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
    User.findOneAndDelete({
        _id: userId
    }).then(users => {
        res.status(200).send('user well deleted !')
    })
    .catch(error => next(error))

  
})

router.post('/register', async (req, res)=>{
    //res.send('register');
//    const validation = joi.validate(req.body,schema);
    const user = new User({
        email: req.body.email,
        password: req.body.password

    });
    try{
        const savedUser= await user.save(); 
        res.send(savedUser);

    }
    catch(err)
    {
        res.status(400).send(err);

    }

    
})
router.put('/:userId', function (req, res, next) {
    const userId = req.params.userId
    
   User.findOneAndUpdate({
        _id: userId
    }, {
    
    email: req.body.email,
	password: req.body.password
	
	
    })
    .then(users => res.status(200).send(users))
    .catch(error => next(error))
    
   
})
module.exports= router;