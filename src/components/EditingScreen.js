import React, { Component } from 'react';
import { Tabs, Tab } from "react-bootstrap"

import EditPresentationSection from "./Presentation/Edit/EditPresentationSection"
import EditAwardSection from "./Awards/Edit/EditAwardSection"
import EditEducationSection from "./Education/Edit/EditEducationSection"
import EditExperienceSection from "./Experience/Edit/EditExperienceSection"
import EditProjectSection from "./Projects/Edit/EditProjectSection"
import EditLearnMoreSection from "./LearnMore/EditLearnMoreSection"
import MainScreen from "./MainScreen"

import Warning from "./Warning"
import * as sync from "../SyncActions"


import { withRouter } from 'react-router-dom'

class EditingScreen extends Component {
    constructor(){
        super()
        this.state={
            showModal: false,
            error: ""
        }
    }

    handleClose(){
        this.setState({
            showModal: false,
            error: ""
        })
    }


    render() {
        return (
            <>
            <Tabs defaultActiveKey="presentation" onSelect={(key)=>{if(key==="goback") this.props.history.push("/") }}>
                <Tab eventKey="goback" title="Go back"/>

                <Tab eventKey="presentation" title="Presentation">
                    <EditPresentationSection presentationItems={this.props.presentationItems}
                        onSubmit={(presentation)=>{
                            this.props.refreshPresentation(presentation)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deletePresentation} />
                </Tab>
                <Tab eventKey="education" title="Education">
                    <EditEducationSection educationItems={this.props.educationItems}
                        onSubmit={(education)=>{
                            this.props.refreshEducation(education)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deleteEducation} />
                </Tab>
                <Tab eventKey="experience" title="Experience">
                    <EditExperienceSection experienceItems={this.props.experienceItems}
                        onSubmit={(experience)=>{
                            this.props.refreshExperience(experience)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deleteExperience} />
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    <EditProjectSection projectItems={this.props.projectItems}
                        onSubmit={(project)=>{
                            this.props.refreshProject(project)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deleteProject} />

                </Tab>
                <Tab eventKey="awards" title="Awards">
                    <EditAwardSection awardsItems={this.props.awardsItems}
                        onSubmit={(award)=>{
                            this.props.refreshAward(award)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deleteAward} />
                </Tab>
                <Tab eventKey="learnMore" title="Learn More">
                    <EditLearnMoreSection learnMoreItems={this.props.learnMoreItems}
                        onSubmit={(learnMore)=>{
                            this.props.refreshLearnMore(learnMore)
                            this.forceUpdate()
                        }}
                        onDelete={this.props.deleteLearnMore} />
                </Tab>
                <Tab eventKey="preview" title="Preview">
                    <MainScreen {...this.props} preview/>
                </Tab>
            </Tabs>
            <Warning show = {this.state.showModal} title="Error" text = {this.state.error} handleClose={this.handleClose.bind(this)}/>
            </>
        );
    }
    
    componentDidUpdate(){
        sync.dispatchEvents(this,document)
    }
}

export default withRouter(EditingScreen);