import React, { Component } from 'react';
import FileUpload from "../FileUpload"
import { InputGroup, FormControl, Form } from "react-bootstrap"
const uuidv4 = require('uuid/v4');

class ResourceForm extends Component {

    constructor() {
        super()
        this.state = {
            type: "url"
        }
    }

    handleOptionChange(changeEvent) {
        if(this.props.url.replace(/.*files\/.*/i, "") !== "" || this.props.url === ""){
            this.setState({
                type: changeEvent.target.value
            });
        }else{
            this.props.throwError("You need to recreate the item if you want to change the type of resource")
        }
    }
    componentDidMount(){
        this.setState({type: this.props.url.replace(/.*files\/.*/i, "") === ""?"pdf":"url", value: this.props.url})
    }

    render() {
        return (
            <div>
                <Form.Group controlId={uuidv4()}>
                    <Form.Check
                        type="radio"
                        value="url"
                        checked={this.state.type === "url"}
                        onChange={this.handleOptionChange.bind(this)}
                        label="Copy a url resource" />
                </Form.Group>
                <Form.Group controlId={uuidv4()}>
                    <Form.Check
                        type="radio"
                        checked={this.state.type === "pdf"}
                        value="pdf"
                        onChange={this.handleOptionChange.bind(this)}
                        label="Upload PDF" />
                </Form.Group>
                {
                    this.state.type === "url" ?
                        <Form.Group controlId={uuidv4()}>

                            <InputGroup className="mb-3">

                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        URL
                                    </InputGroup.Text>
                                </InputGroup.Prepend>

                                <FormControl
                                    type="text"
                                    name="url"
                                    value={this.state.value ? this.state.value:""}
                                    onChange={(e)=>{
                                        this.props.onFile(e.target.value)
                                        this.setState({...this.state, value : e.target.value})
                                    }
                                       }
                                    as="input"
                                    isValid={this.props.touched && !this.props.error}
                                    isInvalid={!!this.props.error} />

                                <Form.Control.Feedback>Valid</Form.Control.Feedback>

                                <Form.Control.Feedback type="invalid">
                                    {this.props.error}
                                </Form.Control.Feedback>

                            </InputGroup>
                        </Form.Group>:
                        <FileUpload type="pdf"
                                    value={this.props.url}
                                    throwError={this.props.throwError}
                                    accepts={[".pdf"]}
                                    url={this.props.url}
                                    error={this.props.error}
                                    onFile={this.props.onFile} />
                }
            </div>
            

            
            
        );
    }


}

export default ResourceForm;