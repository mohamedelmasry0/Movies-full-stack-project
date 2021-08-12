const mongoose = require("mongoose");
const filmModel = new mongoose.Schema({
   
    name: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
    
    
}
)


module.exports = mongoose.model('film', filmModel)