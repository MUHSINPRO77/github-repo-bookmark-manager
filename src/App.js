import React, { Fragment } from 'react';
import SearchBar from './component/SearchBar';
import './App.css';
import SearchBar1 from './component/SearchBar1';
import logo from './component/logo.png';
import navlogo from './component/navlogo.png';







function App (){
    
    


  return(
    <Fragment>
      <nav className="navigation">
          <a><img height="40px" src={navlogo} /></a>
      </nav>
    <div className="tkm">
      <img className="img" src={logo} alt='logo'/>
      <h1>Github Bookmark Manager</h1>
      <div className="searching">
        <div className="searchbar">
          <SearchBar/>
          </div>
        <div className="searchbar1">
          <SearchBar1/>
          </div>
      </div>
    </div>
    </Fragment>
  )
}

export default App;

