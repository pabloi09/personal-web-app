import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import ScrollableAnchor from 'react-scrollable-anchor'
import {storage} from "../../../Firebase"
import preparing from "../../../assets/preparing.png"
class PresentationCarrousel extends Component {

    constructor(){
        super()
        this.state = { firebaseURLs: {}, downloadStarted : false}
    }

    render() {
        return (
            <ScrollableAnchor id={'presentation'}>
                <div>
                <Carousel>
                    {this.props.data.map((item, index) =>{
                        return <Carousel.Item key={index} style={{height: "calc(100vh - 56px)", minHeight: "350px"}}>
                                
                                    <img
                                        src={this.state.firebaseURLs[item.image] ? this.state.firebaseURLs[item.image] : preparing}
                                        className="d-block w-100"
                                        style={{height: "calc(100vh - 56px)", minHeight: "350px"}}
                                        alt={item.imageAlt}/>
                                        
                                    <Carousel.Caption  >
                                        <h3 style={{textAlign:"left", backgroundColor:"rgb(0,0,0,0.6)"}}>{item.title}</h3>
                                        <p style={{textAlign:"left",backgroundColor:"rgb(0,0,0,0.6)"}}>{item.description}</p>
                                    </Carousel.Caption>
                                
                                </Carousel.Item>
                                
                    })}
                </Carousel>
                </div>
            </ScrollableAnchor>
                
        );
    }

    componentDidUpdate(){
        if(!this.state.downloadStarted && this.props.data.length > 0){
            this.setState({...this.state,downloadStarted: true})
            this.props.data.forEach(item => {
                var url = item.image
                storage.ref().child(url).getDownloadURL().then(firebaseURL => this.setState({...this.state, firebaseURLs : {...this.state.firebaseURLs, [url] : firebaseURL}}))
            });
    }
       
    }

}

export default PresentationCarrousel;