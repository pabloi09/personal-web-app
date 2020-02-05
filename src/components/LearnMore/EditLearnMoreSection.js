import React, { Component } from 'react';
import EditLearnMore from "./EditLearnMore"
import EditAccordionItem from "../EditAccordionItem"
import AddAccordionItem from "../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}

class EditLearnMoreSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>

                {this.props.learnMoreItems.map((item, index) => {

                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditLearnMore item={item} onSubmit={this.props.onSubmit} />} />)
                })}
                <AddAccordionItem
                    key={this.props.learnMoreItems.length}
                    index={this.props.learnMoreItems.length}
                    component={<EditLearnMore item={defaultNewItem} onSubmit={(value) => {
                        this.props.onSubmit(value)
                        this.forceUpdate()
                    }} />} />

            </Accordion>)

    }
}

export default EditLearnMoreSection;