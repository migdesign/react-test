import React, {Component} from 'react'

export default class CompetenceHeader extends Component{
    render(){
        return (<h4 className="card-title">{this.props.name}</h4>);
    }
}