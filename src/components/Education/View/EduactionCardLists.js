import React, { Component } from 'react';
import EducationCardRows from "./EducationCardRows"

class EduactionCardLists extends Component {
    constructor(){
        super()
        this.state ={}
    }
    render() {
        return (
            <div style={{padding:20, display:"flex", flexDirection:"column", alignItems:"center"}}>
                <EducationCardRows data = {this.props.data} mobile={this.props.mobile}/>
            </div>
        );
    }

}

export default EduactionCardLists;