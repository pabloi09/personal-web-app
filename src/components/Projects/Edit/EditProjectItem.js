import React, { Component } from 'react';
import FormCreator from "../../Forms/FormCreator"

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
                    property: "subtitle",
                    tag: "Subtitle",
                    value: this.props.item.subtitle ? this.props.item.subtitle : "",
                    isTextArea: false,
                    maximumChars: 100
                },
                {
                    property: "description",
                    tag: "Description",
                    value: this.props.item.description ? this.props.item.description : "",
                    isTextArea: true,
                },
                {
                    property: "columns",
                    value: [
                        {
                            property: "buttonProject",
                            tag: "Project button's name",
                            value: this.props.item.buttonProject ? this.props.item.buttonProject : "",
                            isTextArea: false,
                            maximumChars: 100
                        },
                        {
                            property: "projectUrl",
                            tag: "Project's URL",
                            value: this.props.item.projectUrl ? this.props.item.projectUrl : "",
                            isTextArea: false
                        }
                    ]
                },
                {
                    property: "columns",
                    value: [
                        {
                            property: "buttonDemo",
                            tag: "Demo button's name",
                            value: this.props.item.buttonDemo ? this.props.item.buttonDemo : "",
                            isTextArea: false,
                            maximumChars: 100
                        },
                        {
                            property: "demoUrl",
                            tag: "Demo's web",
                            value: this.props.item.demoUrl ? this.props.item.demoUrl : "",
                            isTextArea: false
                        }
                    ]
                }
            ]
        }

        return (
            <FormCreator creator = {creator}/>
        );
    }
}

export default EditProjectItem;