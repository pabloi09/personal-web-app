import React from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import {Modal} from "react-bootstrap"

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebase from '../Firebase'
import {name} from "../constants"

const sections = [["#presentation" ,"presentation", "Presentation"],
                  ["#education" ,"education", "Education"],
                  ["#experience" ,"experience", "Experience"],
                  ["#projects" ,"projects", "Projects"],
                  ["#awards" ,"awards", "Awards"]]

export default class DarkNavbar extends React.Component{
    state = {
        isSignedIn: false, // Local signed-in state.
        showSignInModal : false,
        urlOk: false,
        urls :{}
      };
    
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth.onAuthStateChanged(
            (user) => this.setState({...this.state,isSignedIn: !!user})
        );
        
        
    }
    componentDidUpdate(){
        if(!this.state.urlOk && this.props.data.length !== 0){
            this.props.data.forEach((item)=>{
                var urls = this.state.urls
                if(item.resource.replace(/.*files\/.*/i, "") !== ""){
                    urls[item.resource] = item.resource
                }else{
                    firebase.storage.ref().child(item.resource).getDownloadURL().then((firebaseURL) => {
                        urls[item.resource] = firebaseURL
                        this.setState({...this.state, urls})})
                }
            })
            this.setState({...this.state,urlOk:true})
        }
        
    }

    handleClose(){
        this.setState({...this.state, showSignInModal: false})
    }

    handleOpen(){
        this.setState({...this.state, showSignInModal: true})
    }

    
  


    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position: "sticky", top:0, zIndex:1000}}>
                <Navbar.Brand href="#home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="#presentation">
                    {sections.map((section,index)=>{
                        return this.props.sections[index]? <Nav.Link href={section[0]} active={this.props.page===section[1]} key={index}>{section[2]}</Nav.Link>:<></>
                    })}
                    </Nav>
                    <Nav>
                    <NavDropdown title="Learn more" id="collasible-nav-dropdown">
                        {this.props.data.map((item,index)=><NavDropdown.Item key ={index} href = {this.state.urls[item.resource]} target = "_blank">{item.title}</NavDropdown.Item>)}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/pabloi09/personal-web-app">Create a web like this one</NavDropdown.Item>
                    </NavDropdown>
                    {this.props.preview ? <div></div>:
                        !this.state.isSignedIn?
                            (<Nav.Link onClick= {this.handleOpen.bind(this)}>
                                {!this.state.isSignedIn? "Log in as admin":firebase.auth.currentUser.displayName}
                                <div onClick={e => e.stopPropagation()}>
                                    <Modal show={this.state.showSignInModal} onHide={this.handleClose.bind(this)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Login to edit your web page</Modal.Title>
                                        </Modal.Header>
                                        <StyledFirebaseAuth uiConfig={firebase.uiConfig} firebaseAuth={firebase.auth}/>
                                    </Modal>
                                </div>
                                </Nav.Link>):
                            (<NavDropdown title={firebase.auth.currentUser.displayName} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/edit"> 
                                    Edit Web Page  
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {
                                    firebase.auth.signOut()
                                    this.handleClose()
                                }}> Log out </NavDropdown.Item>
                            </NavDropdown>)
                    }
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
   
}
