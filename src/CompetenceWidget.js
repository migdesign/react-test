import React, {Component} from 'react';
import CompetenceHeader from './CompetenceHeader';
import CompetenceAll from './CompetenceAll';
import './CompetenceWidget.css';



export default class CompetenceWidget extends Component{

    getCompetenceWidget(){
        return (
            <div className="container-widget">
                <section className="container-flex">
                    {this.props.allCompetence.map((header)=>{
                        if(header.show===true){
                        <div className="card w-40">
                            <img src="http://unsplash.it/200/120/?random" alt="" />
                           
                                <CompetenceHeader name={header.title}/>
                                <CompetenceAll listCompetence={header.list} /> 
                            
                            
                        </div>}
                    })}  
                </section>
            </div>);
    }

    render(){
       
       return this.getCompetenceWidget();
    }
}   