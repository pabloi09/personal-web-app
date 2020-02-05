import React, { Component } from 'react';
import AwardsList from "./AwardsList"
import ScrollableAnchor from "react-scrollable-anchor"
class AwardsSection extends Component {
    render() {
        return (
            <ScrollableAnchor id={'awards'}>
            <div style={{ width:"100%"}} >
                <AwardsList {...this.props} />
            </div>
            </ScrollableAnchor>
        );
    }
}

export default AwardsSection;