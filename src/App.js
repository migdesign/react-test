import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Banner.css';

import data from './data.json';
import photo from './meBg2.png';

import Identity from './Identity';
import CompetenceWidget from './CompetenceWidget';


class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
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
    //S'il ni y pas de donnée récupéré alors on re return rien ou NULL;
    if(!data)return null;

    return (
      <div className="App">
        
        <header className="">
          {this.getNavBar()}
          
          <Identity name={data.identite.name} lastName={data.identite.lastName} job={data.identite.job} avatar={photo} /> 
          <h1 className="App-title">Miguel playground</h1>

        </header>
     
        <CompetenceWidget allCompetence={data.competences}/>

      </div>
    );
  }
}
export default App;
