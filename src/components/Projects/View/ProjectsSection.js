import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import ProjectsList from "./ProjectsList"
class ProjectsSection extends Component {
    render() {
        return (
            <ScrollableAnchor id={'projects'}>
            <div style={{minHeight: "calc(100vh - 56px)", width:"100%"}}>
                <ProjectsList {...this.props}/>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default ProjectsSection;