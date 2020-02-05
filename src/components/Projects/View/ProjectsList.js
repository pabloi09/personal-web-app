import React, { Component } from 'react';
import {Card, Row} from "react-bootstrap"

class ProjectsList extends Component {
    render() {
        return (
            <div style={{padding:20, display:"flex", flexDirection:"column", alignItems:"center"}}>
                {this.getRowsAndColumns(this.props.data)}
            </div>
        );
    }

    getCardFromItem(item, index){
        return (<Card style={{ width: '100%', textAlign:"left", margin:10}} key={index}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                            <Card.Text>
                            {this.getTextWithParagraphs(item.description)}
                            </Card.Text>
                            <Card.Link href={item.projectUrl} target="_blank">{item.buttonProject}</Card.Link>
                            <Card.Link href={item.demoUrl} target="_blank">{item.buttonDemo}</Card.Link>
                        </Card.Body>
                    </Card>);
    }

    getRowsAndColumns(data){
        var result = []
        for(var i=0;i<data.length;i++){
            result.push(
                <Row style = {{width: "100%"}} key={i}>
                    {this.getCardFromItem(data[i],i)}
                </Row>
            );
        }
        return result;
    }

    

    getTextWithParagraphs(text){
        let newText = text.split('\n').map((item, i) => {
            if(item.startsWith("-")){
                item = item.replace("-","");
                return <li key = {i}>{item}</li>;
            }
            return <span key = {i}>{item}<br/></span>;
        });
        return newText
        
    }

}

export default ProjectsList;