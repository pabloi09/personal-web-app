import React, { Component } from 'react';
import FormCreator from "../Forms/FormCreator"

class EditProjectItem extends Component {
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
                    property: "resource",
                    tag: "Resource",
                    value: this.props.item.resource ? this.props.item.resource : "",
                    isTextArea: false,
                },
            ]
        }

        return (
            <FormCreator creator = {creator}/>
        );
    }
}

export default EditProjectItem;