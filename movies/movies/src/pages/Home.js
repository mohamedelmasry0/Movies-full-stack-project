import React from 'react';
//import ListMoviesDefinitions from '../components/ListMoviesDefinitions';
import Navigation from '../components/Navigation';
import './Home.css'


// import  Users  from '../components/tables/SeenMovie';
//  import  Address  from '../components/tables/SeenMovie';

const Home = () => {
    return (
        // <div>
        //    Bienvenue dans Home page 
        // </div>
        <div>
            <Navigation />
            {/* <div className= "mainImg">
                <img src="./media/hoonigan-deathproof-nova.jpg" alt="Death Proof Intro"></img>
            </div> */}
            {/* <div className="home">*/}
            
            
            <div className= "topMovies">
                <h1>Top movies ever</h1>
               
            </div> 
            
            {/* <ListMoviesDefinitions/>  */}
           
           {/* </div> */}
           {/* <Users /> */}
           <div className= "row1">
           <div className = "film1">
             <img src= "./media/hoonigan-deathproof-nova.jpg" alt ="" className="DeathProofImg"/>
             </div>

             <div className = "film2">
             <img src= "./media/18465555.jpg" alt ="" className="OrangeClockWorkImg"/>
             </div>

             <div className = "film3">
             </div>
             <img src= "./media/18945570.jpg" alt ="" className="MartyrsImg"/>
             
             </div>

        </div>
    );
};

export default Home;