import '../App.css';
import React, { Component } from 'react';
import MainScreen from "./MainScreen"
import EditScreen from "./EditingScreen"
import * as firebase from "../Firebase"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as sync from "../SyncActions"
import { connect } from "react-redux"
import { setData, refreshAward, refreshEducation, refreshExperience, refreshPresentation, refreshProject, refreshLearnMore,
         deleteAward, deleteEducation, deleteExperience, deletePresentation, deleteProject, deleteLearnMore } from "../Redux/actions"



class App extends Component {

  constructor(props) {
    super(props);
    this.downloadData.bind(this)
    this.editPageSelector.bind(this)
  }
  render() {
    var mobile = this.isMobileDevice();
    
    return (
      <Router>
        <Switch>
          <Route path="/edit">
            {this.editPageSelector()}
          </Route>
          <Route path="/">
            <MainScreen mobile={mobile} {...this.props} />
          </Route>
        </Switch>
      </Router>

    );
  }

  componentDidMount() {
    this.downloadData()
  }

  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  downloadData() {
    firebase.nameRef.on("value", snapshot => {
      this.props.setData(snapshot.val())
      this.forceUpdate()
    })
  }

  editPageSelector() {
    return firebase.auth.currentUser ?
      <EditScreen {...this.props} /> :
      <div></div>
  }

  

}

const mapStateToProps = function (state) {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => {

  return {
    setData: data => dispatch(setData(data)),
    refreshAward: award => {
      dispatch(refreshAward(award))
      sync.award(document)
    },
    refreshEducation: education => {
      dispatch(refreshEducation(education))
      sync.education(document)
    },
    refreshExperience: experience => {
      dispatch(refreshExperience(experience))
      sync.experience(document)
    },
    refreshPresentation: presentation => {
      dispatch(refreshPresentation(presentation))
      sync.presentation(document)
    },
    refreshProject: project => {
      dispatch(refreshProject(project))
      sync.project(document)
    },
    refreshLearnMore: learnMore =>{
      dispatch(refreshLearnMore(learnMore))
      sync.learnMore(document)
    },
    deleteAward: id => {
      dispatch(deleteAward(id))
      sync.award(document)
    },
    deleteEducation: id => {
      dispatch(deleteEducation(id))
      sync.education(document)
    },
    deleteExperience: id => {
      dispatch(deleteExperience(id))
      sync.experience(document)
    },
    deletePresentation: id => {
      dispatch(deletePresentation(id))
      sync.presentation(document)
    },
    deleteProject: id => {
      dispatch(deleteProject(id))
      sync.project(document)
    },
    deleteLearnMore: id =>{
      dispatch(deleteLearnMore(id))
      sync.learnMore(document)
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
