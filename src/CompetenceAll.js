import React, {Component} from 'react'
import Competence from './Competence'

export default class CompetenceAll extends Component{
    getListCompetence(){
        return (
            /*ul className="list-group list-group-flush">*/
            <ul className="">
                {this.props.listCompetence.map((competence)=><li className=""><Competence name={competence} /></li>)}
            </ul>
        );
    }

    render(){
       return this.getListCompetence();
    }
}   