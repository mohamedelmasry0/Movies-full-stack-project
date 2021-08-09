import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiFilm } from 'react-icons/bi';
import './Navigation.css';
const Navigation = () => {
    return (
        <div className= "sideBar">
            
            <div>
                <NavLink exact to= "/" activeClassName="navActive1">
                   
                    <BiFilm/>
                    <span>Acueil</span>
                    <br/>
                    <br/>     
                </NavLink> 

                <NavLink exact to= "/lastseen" activeClassName="navActive2">
                  
                    <BiFilm/>
                    <span>last seen movies</span>    
                    <br/> 
                    <br/> 
                </NavLink> 

                <NavLink exact to= "/new" activeClassName="navActive3">
                    {/* <i className= "BiFilm"></i> */}
                    <BiFilm/>
                    <span>new movies</span>   
                    <br/> 
                    <br/> 
                               
                </NavLink> 
                
            </div>
        </div>
    );
};

export default Navigation;