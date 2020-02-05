import React, { Component } from 'react';
import FormCreator from "../../Forms/FormCreator"


class EditEducationItem extends Component {
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
                    property: "columns",
                    value: [
                        {
                            property: "time",
                            tag: "Time",
                            value: this.props.item.time ? this.props.item.time : "",
                            isTextArea: false,
                            maximumChars: 100
                        },
                        {
                            property: "gpa",
                            tag: "GPA",
                            value: this.props.item.gpa ? this.props.item.gpa : "",
                            isTextArea: false,
                            maximumChars: 100
                        }
                    ]
                },
                {
                    property: "columns",
                    value: [
                        {
                            property: "image",
                            tag: "Photo URL",
                            value: this.props.item.image ? this.props.item.image : "",
                            isTextArea: false,
                        },
                        {
                            property: "alt",
                            tag: "Photo description",
                            value: this.props.item.alt ? this.props.item.alt : "",
                            isTextArea: false,
                        }
                    ]
                },
                {
                    property: "description",
                    tag: "Description",
                    value: this.props.item.description ? this.props.item.description : "",
                    isTextArea: true,
                    maximumChars: 600
                },
                {
                    property: "columns",
                    value: [
                        {
                            property: "buttonDescription",
                            tag: "Button's name",
                            value: this.props.item.buttonDescription ? this.props.item.buttonDescription : "",
                            isTextArea: false,
                        },
                        {
                            property: "buttonUrl",
                            tag: "Button's web",
                            value: this.props.item.buttonUrl ? this.props.item.buttonUrl : "",
                            isTextArea: false,
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

export default EditEducationItem;