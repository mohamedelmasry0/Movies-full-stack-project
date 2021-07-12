const UserRatings = require('../data-base/MoviesAndRatings');
module.exports.signUp= async (req, res)=>{
    const {userName, email, password}= req.body
    try{
        const user = await UserRatings.create({userName,email,password})
        res.status(201).json({user: user._id})
    }
    catch(err){
        res.status(200).send({err})
    }

}