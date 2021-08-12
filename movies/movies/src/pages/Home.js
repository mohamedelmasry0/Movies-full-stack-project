import React from 'react';
//import ListMoviesDefinitions from '../components/ListMoviesDefinitions';
import Navigation from '../components/Navigation';
import './Home.css';
import Film from '../components/Film';
import MoviesDefinitions from '../components/ListMoviesDefinitions'


// import  Users  from '../components/tables/SeenMovie';
//  import  Address  from '../components/tables/SeenMovie';

const Home = () => {
    return (
        // <div>
        //    Bienvenue dans Home page 
        // </div>
        <div className="home">
            <Navigation />
            {/* <div className= "mainImg">
                <img src="./media/hoonigan-deathproof-nova.jpg" alt="Death Proof Intro"></img>
            </div> */}
            {/* <div className="home">*/}
            
            
            <div className= "topMovies">
                <h1>Top movies ever</h1>
               
            </div> 
            
          
           <div className= "row1">
<Film imageFilm="./media/hoonigan-deathproof-nova.jpg" 
    title="Death proof" 
    year="2007"></Film>
<Film imageFilm="./media/18465555.jpg"
title="Orange clock work" 
year="1971"></Film>
<Film imageFilm="./media/18945570.jpg"
title="Martyrs" 
year="2008"></Film>

           {/* <div className = "film1">
             <img src= "./media/hoonigan-deathproof-nova.jpg" alt ="" className="DeathProofImg"/>
             </div>

             <div className = "film2">
             <img src= "./media/18465555.jpg" alt ="" className="OrangeClockWorkImg"/>
             </div>

             <div className = "film3">
             
             <img src= "./media/18945570.jpg" alt ="" className="MartyrsImg"/>
             </div> */}
             </div>

        </div>
    );
};

export default Home;