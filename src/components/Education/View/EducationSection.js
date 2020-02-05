import React, { Component } from 'react';


import ScrollableAnchor from 'react-scrollable-anchor'
import EducationCardLists from "./EduactionCardLists"

class EducationSection extends Component {
    render() {
        return (
            <ScrollableAnchor id={'education'}>
            <div style={{width:"100%"}}>
                <EducationCardLists {...this.props}/>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default EducationSection;