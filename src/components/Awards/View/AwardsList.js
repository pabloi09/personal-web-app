import React, { Component } from 'react';
import {Col, Alert, Row} from "react-bootstrap"

class AwardsList extends Component {
    render() {
        return (
            <div style={{padding:20, display:"flex", flexDirection:"column", alignItems:"center"}}>
                {this.getRowsAndColumns(this.props.data)}
            </div>
        );
    }

    getCardFromItem(item, index){
        return (<Col style={{width:"45%",marginBottom: 10}} key = {index}>
                    <Alert variant="dark" key = {index} style={{textAlign:"left", width: "100%",display:"flex", flexDirection: "row", alignItems:"center", height:"100%"}}>
                        <Alert.Heading style = {{marginRight: 10}}><span role ="img" aria-label="medall emoji" >🥇</span></Alert.Heading>
                        <div>
                        <Alert.Heading>{item.title} </Alert.Heading>
                        {this.getTextWithParagraphs(item.description)}
                        </div>
                    </Alert>
                </Col>);
    }


    getRowsAndColumns(data){
        var result = []
        var cols = this.props.mobile ? 1:2
        for(var i=0;i<data.length;i=i+cols){
            var newRow=[];
            for(var j=0;j<cols;j++){
                if(i+j>=data.length){
                    newRow.push(<Col></Col>)
                }else{
                    newRow.push(this.getCardFromItem(data[i+j],i+j))
                }
            }
            result.push(
                <Row key = {i} style={{width: "100%"}}>
                    {newRow}
                </Row>
            );
        }
        return result;
    }

    getTextWithParagraphs(text){
        let newText = text.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
        });
        return newText
        
    }
}

export default AwardsList;