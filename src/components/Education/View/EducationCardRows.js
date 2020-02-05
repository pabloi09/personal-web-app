import React, { Component } from 'react';
import {Row} from "react-bootstrap"
import EducationCardItem from "./EducationCardItem"
class EducationCardRows extends Component {
    constructor(){
        super()
        this.getDataInColumns.bind(this)
    }
    render() {
        var dataInColumns = this.getDataInColumns(this.props.data)
        return this.props.mobile ? 
             this.props.data.map((item,index)=><Row><EducationCardItem item ={item} key ={index}/></Row>):
             dataInColumns.map((row,index)=>{
                 return <Row key ={index} style={{width:"100%"}}>
                     {row.map((item,columnIndex)=><EducationCardItem key ={columnIndex} item ={item}/>)}
                 </Row>
             })
             

    }

    getDataInColumns(){
        var col = 4;
        var data = []
        for(var i=0;i<this.props.data.length;i=i+col){
            var newRow=[];
            for(var j=0;j<col;j++){
                if(i+j>=this.props.data.length){
                    newRow.push("blank")
                }else{
                    newRow.push(this.props.data[i+j])
                }
            }
            data.push(newRow);
        }
        return data
    }

}

export default EducationCardRows;