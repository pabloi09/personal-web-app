import React, { Component } from 'react';
import EditPresentationItem from "./EditPresentationItem"
import EditAccordionItem from "../../EditAccordionItem"
import AddAccordionItem from "../../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}

class EditPresentationSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>

                {this.props.presentationItems.map((item, index) => {

                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditPresentationItem item={item} onSubmit={this.props.onSubmit} />} />)
                })}

                <AddAccordionItem
                    key={this.props.presentationItems.length}
                    index={this.props.presentationItems.length}
                    component={<EditPresentationItem item={defaultNewItem} onSubmit={(value) => {
                        this.props.onSubmit(value)
                        this.forceUpdate()
                    }} />} />
            </Accordion>)

    }
}

export default EditPresentationSection;