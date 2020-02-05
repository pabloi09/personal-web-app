import React, { Component } from 'react';
import { InputGroup, FormControl, Form, Button, Col } from "react-bootstrap"
import { Formik } from "formik"
import * as yup from 'yup';
import ImageUpload from "../ImageUpload"
import Warning from "../Warning"
import ResourceForm from "../Forms/ResourceForm"

const uuidv4 = require('uuid/v4');


class FormCreator extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false,
            error: ""
        }
        this.throwError.bind(this)
        this.getColumnsElement.bind(this)
        this.getDefaultElement.bind(this)
        this.handleClose.bind(this)
    }

    handleClose() {
        this.setState({
            showModal: false,
            error: ""
        })
    }

    throwError(error) {
        this.setState({
            showModal: true,
            error: error
        })
    }

    render() {
        let schema = this.createSchema(this.props.creator)
        let initialValues = this.getInitialValues(this.props.creator)
        return (<div style={{ padding: 10 }}>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    this.props.creator.onSubmit(values)
                }}
                initialValues={initialValues}>
                {({
                    submitForm,
                    handleChange,
                    values,
                    touched,
                    errors,
                }) => (
                        <Form style={{ display: "flex", flexDirection: "column" }}>
                            {this.props.creator.elements.map((element, index) => {
                                switch (element.property) {
                                    case "columns":
                                        return this.getColumnsElement(values, handleChange, touched, errors, index, element)
                                    case "image":
                                        return <Col>
                                                    <ImageUpload type="image"
                                                        value={values[element.property]}
                                                        throwError={(error) => this.throwError(error)}
                                                        accepts={["image/*"]}
                                                        url={values[element.property]}
                                                        error={errors[element.property]}
                                                        onImage={(path) => { values[element.property] = path }} />
                                                </Col>
                                    case "resource": 
                                        return <ResourceForm
                                                        key={index}
                                                        touched={touched[element.property]}
                                                        error={errors[element.property]}
                                                        handleChange={handleChange}
                                                        url={values[element.property]}
                                                        onFile={(path)=>values[element.property] = path}
                                                        throwError={(error) => this.throwError(error)}/>
                                    default:
                                        return this.getDefaultElement(values, handleChange, touched, errors, index, element)
                                }
                            })}
                            <Button style={{ alignSelf: "flex-end" }} onClick={() => submitForm(values)}>Save</Button>
                        </Form>)}
            </Formik>
            <Warning show={this.state.showModal} title="Error" text={this.state.error} handleClose={() => this.handleClose()} />

        </div>)

    }


    getColumnsElement(values, handleChange, touched, errors, index, element) {
        return (<Form.Row style={{ marginBottom: 15, alignItems: "center" }} key={index}>
            {element.value.map((column, subindex) => {
                switch (column.property) {
                    case "image":
                        return <Col key={subindex}>
                            <ImageUpload type="image"
                                value={values[column.property]}
                                throwError={(error) => this.throwError(error)}
                                accepts={["image/*"]}
                                url={values[column.property]}
                                error={errors[column.property]}
                                onImage={(path) => { values[column.property] = path }} />
                        </Col>
                    default:
                        return (<Col key={subindex}>
                            <Form.Group controlId={uuidv4()}>
                                <InputGroup className="mb-3" style={column.isTextArea ? { height: 300 } : { height: 38 }}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>{column.tag}</InputGroup.Text>
                                    </InputGroup.Prepend>

                                    <FormControl
                                        style={column.isTextArea ? { height: 300 } : { height: 38 }}
                                        type="text"
                                        name={column.property}
                                        value={values[column.property]}
                                        onChange={handleChange}
                                        as={column.isTextArea ? "textarea" : "input"}
                                        isValid={touched[column.property] && !errors[column.property]}
                                        isInvalid={!!errors[column.property]} />
                                    <Form.Control.Feedback>Valid</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {errors[column.property]}
                                    </Form.Control.Feedback>

                                </InputGroup>
                            </Form.Group>
                        </Col>)

                }

            })}
        </Form.Row>)
    }

    getDefaultElement(values, handleChange, touched, errors, index, element) {
        return (<Form.Group controlId={uuidv4()} key={index}>
            <InputGroup className="mb-3" style={element.isTextArea ? { height: 300 } : { height: 38 }}>
                <InputGroup.Prepend>
                    <InputGroup.Text>{element.tag}</InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    style={element.isTextArea ? { height: 300 } : { height: 38 }}
                    type="text"
                    name={element.property}
                    value={values[element.property]}
                    onChange={handleChange}
                    as={element.isTextArea ? "textarea" : "input"}
                    isValid={touched[element.property] && !errors[element.property]}
                    isInvalid={!!errors[element.property]} />
                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    {errors[element.property]}
                </Form.Control.Feedback>

            </InputGroup>
        </Form.Group>)

    }


    createSchema(creator) {

        var object = {}
        creator.elements.forEach(element => {
            switch (element.property) {
                case "columns":
                    element.value.forEach(column => {
                        switch (column.property) {
                            case "image":
                                object[column.property] = yup.mixed().required("A file is required").test(value => {
                                    if (value) {
                                        return value.includes("images")
                                    }
                                    return false
                                })
                                return
                            default:
                                object[column.property] = yup.string().required().max(column.maximumChars ? column.maximumChars : 2000)
                                return
                        }
                    })
                    return
                case "image":
                    object[element.property] = yup.mixed().required("A file is required").test(value => value & value.includes("images"))
                    return
                case "resource":
                    object[element.property] = yup.string().required().max(element.maximumChars ? element.maximumChars : 2000)
                    return
                default:
                    object[element.property] = yup.string().required().max(element.maximumChars ? element.maximumChars : 2000)
                    return
            }

        })
        return yup.object(object)

    }

    getInitialValues(creator) {
        var initialValues = { id: creator.id }
        creator.elements.forEach(element => {
            if (element.property === "columns") {
                element.value.forEach(column => {
                    initialValues[column.property] = column.value
                })
            } else {
                initialValues[element.property] = element.value
            }
        })
        return initialValues
    }
}


export default FormCreator;