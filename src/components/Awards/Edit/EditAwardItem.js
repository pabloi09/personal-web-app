import React, { Component } from 'react';
import FormCreator from "../../Forms/FormCreator"

class EditAwardItem extends Component {

    render() {
        let creator = {
            id: this.props.item.id,
            onSubmit: this.props.onSubmit,
            elements: [
                {
                    property: "title",
                    tag: "Title",
                    value: this.props.item.title ? this.props.item.title : "",
                    isTextArea: false,
                    maximumChars: 100
                },
                {
                    property: "description",
                    tag: "Description",
                    value: this.props.item.description ? this.props.item.description : "",
                    isTextArea: true,
                    maximumChars: 600
                },
            ]
        }
        return (
            <FormCreator creator ={creator}/>
        );
    }
}

export default EditAwardItem;