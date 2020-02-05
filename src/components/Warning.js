import React, { Component } from 'react';
import {Modal, Button } from "react-bootstrap"
class Warning extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Warning;