const express = require ('express'); 
const app = express();
const { MongoClient } = require('mongodb');
require ('dotenv').config({path:'./config/.env'})
require('./config/db');
const app =express();

app.use('/api/userRatings', userRoutes);
app.listen(process.env.PORT, ()=>{
    console.log('bing successfully');
})
