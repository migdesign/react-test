import React, {Component} from 'react'
import './Identity.css'

/*
*classe qui gére l'indentité d'un utilisateur
*
*
*/
export default class Identity extends Component{

    formatName (){       
        return `${this.props.name.charAt(0).toUpperCase()}${this.props.name.substring(1,this.props.name.length).toLowerCase()}`;
        
    }
    
    formatLastName(){
        return this.props.lastName.toUpperCase();
    }

    toString(){
        return this.formatName()+ " " + this.formatLastName();
    }

    render(){
        return <section className="">
                <img className="avatar-big" src={this.props.avatar} alt={this.toString}/> 
                <p>
                    <span>{this.formatName()}</span> <span>{this.formatLastName()}</span>
                </p>
                <p>
                    {this.props.job}
                </p>
            </section>;
    }
    
}

