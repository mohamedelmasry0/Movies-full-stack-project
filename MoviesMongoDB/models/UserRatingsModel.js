const mongoose = require("mongoose");
const userRatingsModel = new mongoose.Schema({
   
    rating: {
        type: String,
        require: true
    },
    commentTitle: {
        type: String,
        require: true
    },
    commentContent: {
        type: String,
        require: true
    }

    
    

}
 )


module.exports = mongoose.model('userRatings', userRatingsModel)