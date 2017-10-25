import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Banner.css'
import Identity from './Identity';
import data from './data.json'
import photo from './meBg2.png';

import CompetenceWidget from './CompetenceWidget';


class App extends Component {
  getNavBar(){
    return (
    <nav className="navbar navbar-inverse bg-inverse"> 
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"><a className="nav-link" href="">Accueil</a></li>
        <li className="nav-item "><a className="nav-link" href="">À propos</a></li>					
        <li className="nav-item "><a className="nav-link" href="">Contact</a></li>
      </ul>
    </nav>);
  }

  render() {
    return (
      <div className="App">
        
        <header className="banner">
          {this.getNavBar()}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Miguel playround</h1>
        </header>

        <Identity name={data.identite.name} lastName={data.identite.lastName} job={data.identite.job} avatar={photo} /> 
        <CompetenceWidget allCompetence={data.competences}/>

      </div>
    );
  }
}
export default App;
