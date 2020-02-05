import React, { Component } from 'react';
import { Accordion, Card, Button} from "react-bootstrap"
import * as Icons from "./Icons"
class EditAccordionItem extends Component {
    render() {
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.index}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <h3>{this.props.title}</h3>
                        <Button variant="light" onClick={this.props.onDelete}>
                            <Icons.TrashIcon fill="red" height={16} width={16} />
                        </Button>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse as={Card.Header} eventKey={this.props.index}>
                    <Card.Body>
                        {this.props.component}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

export default EditAccordionItem;