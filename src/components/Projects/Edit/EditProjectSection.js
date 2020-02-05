import React, { Component } from 'react';
import EditProjectItem from "./EditProjectItem"
import EditAccordionItem from "../../EditAccordionItem"
import AddAccordionItem from "../../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}

class EditProjectSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>

                {this.props.projectItems.map((item, index) => {

                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditProjectItem item={item} onSubmit={this.props.onSubmit} />} />)
                })}

                <AddAccordionItem
                    key={this.props.projectItems.length}
                    index={this.props.projectItems.length}
                    component={<EditProjectItem item={defaultNewItem} onSubmit={(value) => {
                        this.props.onSubmit(value)
                        this.forceUpdate()
                    }} />} />
            </Accordion>)

    }
}

export default EditProjectSection;