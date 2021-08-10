import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LastSeenFilms from './pages/LastSeenFilms';
import NotFound from './pages/Notfound';
import NewMovies from './pages/NewMovies';
import { IconContext } from 'react-icons/lib';
import Header from './components/Header';






const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <IconContext.Provider value={{style: {verticalAlign:'middle'}}}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/lastseen" component={LastSeenFilms}/>
        <Route path= "/new" component={NewMovies}/>
        {/* <Route path= "/def" component={MoviesDefinitions}/> */}
        

        <Route component= {NotFound}/>
        </Switch>
        </IconContext.Provider>
      </BrowserRouter>
    
    </>

    
  
    // <div className= "App">
    //    <h1>Bienvenu movies</h1><h2> by ELMASRY</h2>
    //    <h3> regarde des films gratuit</h3>
    // </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className= "App">
//       <h1>Bienvenu movies by ELMASRY</h1>
//       <h2> regarde des films gratuit</h2>
//     </div>
//   );
// }

// export default App;
