const mongoose = require("mongoose");
const moviesDefinitionModel = new mongoose.Schema({
   
    title: {
        type: String,
        require: true
    },
    releaseDate: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    movieDirector: {
        type: String,
        require: true
    }
    
    

}
 )


module.exports = mongoose.model('moviesDefinition', moviesDefinitionModel)