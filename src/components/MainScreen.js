import React, { Component } from 'react';
import DarkNavbar from './DarkNavbar';
import PresentationCarousel from "./Presentation/View/PresentationCarrousel"
import EducationSection from "./Education/View/EducationSection"
import ExperienceSection from './Experience/View/ExperienceSection'
import ProjectsSection from "./Projects/View/ProjectsSection"
import AwardsSection from "./Awards/View/AwardsSection"

import { configureAnchors } from 'react-scrollable-anchor'
import { withRouter } from 'react-router'

class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          currentPage : window.location.href.substr(window.location.href.indexOf('#'))
        }
    }

    render() {
        return (
            <div className="App">
                <DarkNavbar page={this.state.currentPage} preview={this.props.preview} data={this.props.learnMoreItems}/>
                <PresentationCarousel mobile = {this.props.mobile} data = {this.props.presentationItems} />
                <EducationSection mobile = {this.props.mobile} data = {this.props.educationItems}/>
                <ExperienceSection mobile = {this.props.mobile} data = {this.props.experienceItems}/>
                <ProjectsSection mobile = {this.props.mobile} data = {this.props.projectItems}/>
                <AwardsSection mobile = {this.props.mobile} data = {this.props.awardsItems}/>
            </div>
        );
    }

    componentDidMount(){
        this.props.history.push("#presentation")
        configureAnchors({offset: -56, scrollDuration: 200})
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({
                currentPage : window.location.href.substr(window.location.href.indexOf('#')+1)
            })
            this.forceUpdate()
        });

    }
    
    componentWillUnmount() {
          this.unlisten();
      }

    
}

export default withRouter(MainScreen);