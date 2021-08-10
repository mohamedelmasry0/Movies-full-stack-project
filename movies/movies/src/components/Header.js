import React from 'react';
import'./Header.css'
import SearchIcon from '@material-ui/icons/Search';

import SettingsIcon from '@material-ui/icons/Settings';
const Header = () => {
    
    return (
        <div className = "header" >
            
            <img src = "./media/images.jpg" alt=""  className= "header_logo"/>
            <div className= "searchBar">
                <input className ="enterSearch" type = {Text}/>
                <SearchIcon className = "searchYes"  />
            </div>
            <div className="header_nav">
                <div className= "sign">
                    <span>
                        Hello guest<br></br>
                        sign in
                    </span>

                </div>
                 <div className= "category">
                     <span>
                         Category
                     </span>
                    
                </div>
                <div className= "country">
                    <span>Country</span>

                    </div>
                    <div className= "bin">
                    
                    </div>    
            </div>
            <div className= "cart">
                
            <SettingsIcon className = "cartIcon"/>
            
            </div>
        </div>
    );
};

export default Header;