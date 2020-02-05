import React, { Component } from 'react';
import {Jumbotron, Badge} from "react-bootstrap"
import ScrollableAnchor from 'react-scrollable-anchor'


class ExperienceSection extends Component {
    render() {
        return (
            <ScrollableAnchor id={'experience'}>
                <div>
                {this.props.data.map( (item,index) => {
                    return <Jumbotron style={{textAlign:"left"}} key={index}>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
                            <h1 style={{marginRight:15}}>{item.title}</h1>
                            <h4><Badge variant="dark">{item.time}</Badge></h4>
                        </div>
                        <p>
                            {item.description}
                        </p>
                    </Jumbotron>
                } )}
                </div>
                    
            </ScrollableAnchor>
        );
    }
}

export default ExperienceSection;