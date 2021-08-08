const express = require ('express'); 
const app = express();
const morgan  = require('morgan')
var cors = require('cors')
const helmet  = require('helmet')
const { MongoClient } = require('mongodb');
require ('dotenv').config({path:'./config/.env'})
require('./config/db');

//Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const moviesDefinitionRoutes = require('./routes/moviesDefinitionRoutes');
const userRatingsRoutes = require('./routes/userRatingsRoutes');

//Middle ware
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

//Routes
app.use('/api/user', authRoutes);
app.use('/api/def', moviesDefinitionRoutes);
app.use('/api/rating', userRatingsRoutes);




app.listen(process.env.PORT, ()=>{
    console.log('bing successfully');
})
