import React, {Component} from 'react';
import CompetenceHeader from './CompetenceHeader';
import CompetenceAll from './CompetenceAll';
import './CompetenceWidget.css';



export default class CompetenceWidget extends Component{

    getCompetenceWidget(){
        return (
            <div className="container-widget">
                <section className="container-flex">
                    {this.props.allCompetence.map((competence)=>{ 
                        if(!competence.show){
                            return null;
                        }
                        return(
                            <div className="card w-40">                             
                                <CompetenceHeader name={competence.title}/>
                                <CompetenceAll listCompetence={competence.list} /> 
                            </div>);
                        })
                    }  
                </section>
            </div>);
    }

    render(){
       return (this.getCompetenceWidget());
    }
}   