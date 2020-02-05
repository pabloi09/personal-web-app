import React, { Component } from 'react';
import { Accordion, Card} from "react-bootstrap"
import * as Icons from "./Icons"


class AddAccordionItem extends Component {
    render() {
        return (
            <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.index}>
                            <Icons.AddIcon fill="#007bff" height={8} width={8} />
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

export default AddAccordionItem;