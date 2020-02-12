import React, { Component } from 'react';
import {Card, Button, Col} from "react-bootstrap"
import {storage} from "../../../Firebase"
import preparing from "../../../assets/preparing.png"

class EducationCardItem extends Component {
    constructor(){
        super()
        this.state = {source: preparing}
    }

    render() {
        return (
            <Col >
            {
                this.props.item === "blank" ? <div/>:
                <Card style={{ width: '100%', textAlign:"left", height: '90%'}}>
                            <Card.Img  variant="top" src={this.state.source} style={{height: '30%'}} />
                            <Card.Body style={{display:"flex",flexDirection:"column", justifyContent: "space-between", alignItems:"flex-start"}}>
                                <div>
                                <Card.Title>{this.props.item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{this.props.item.time}</Card.Subtitle>
                                <Card.Text>
                                {this.props.item.description}
                                </Card.Text>
                                </div>
                                <Button variant="dark" href={this.props.item.buttonUrl} target="_blank" >{this.props.item.buttonDescription}</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">GPA of {this.props.item.gpa}</Card.Footer>
                    </Card>
            }
            </Col>
                    
        );
    }

    componentDidUpdate(){
        if(this.props.item !== "blank" && this.state.source === preparing){
            storage.ref().child(this.props.item.image).getDownloadURL()
            .then(firebaseURL => this.setState({source : firebaseURL}))
        }
        
    }

    
}

export default EducationCardItem;