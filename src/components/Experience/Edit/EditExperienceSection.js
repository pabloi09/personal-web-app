import React, { Component } from 'react';
import EditExperienceItem from "./EditExperienceItem"
import EditAccordionItem from "../../EditAccordionItem"
import AddAccordionItem from "../../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}

class EditExperienceSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>

                {this.props.experienceItems.map((item, index) => {

                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditExperienceItem item={item} onSubmit={this.props.onSubmit} />} />)
                })}
                <AddAccordionItem
                    key={this.props.experienceItems.length}
                    index={this.props.experienceItems.length}
                    component={<EditExperienceItem item={defaultNewItem} onSubmit={(value) => {
                        this.props.onSubmit(value)
                        this.forceUpdate()
                    }} />} />
            </Accordion>)

    }
}

export default EditExperienceSection;