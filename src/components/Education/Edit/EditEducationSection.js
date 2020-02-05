import React, { Component } from 'react';
import EditEducationItem from "./EditEducationItem"
import EditAccordionItem from "../../EditAccordionItem"
import AddAccordionItem from "../../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}

class EditEducationSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>

                {this.props.educationItems.map((item, index) => {

                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditEducationItem item={item} onSubmit={this.props.onSubmit} />} />)
                })}
                <AddAccordionItem
                    key={this.props.educationItems.length}
                    index={this.props.educationItems.length}
                    component={<EditEducationItem item={defaultNewItem} onSubmit={(value) => {
                        this.props.onSubmit(value)
                        this.forceUpdate()
                    }} />} />

            </Accordion>)

    }
}

export default EditEducationSection;