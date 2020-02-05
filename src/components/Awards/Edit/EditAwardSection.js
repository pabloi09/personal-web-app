import React, { Component } from 'react';
import EditAwardItem from "./EditAwardItem"
import EditAccordionItem from "../../EditAccordionItem"
import AddAccordionItem from "../../AddAccordionItem"
import { Accordion } from "react-bootstrap"
const uuidv4 = require('uuid/v4');
const defaultNewItem = {
    id: uuidv4(),
}


class EditAwardSection extends Component {
    render() {
        return (
            <Accordion defaultActiveKey={0}>
                {this.props.awardsItems.map((item, index) => {
                    return (
                        <EditAccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            onDelete={() => this.props.onDelete(item.id)}
                            component={<EditAwardItem item={item} onSubmit={this.props.onSubmit} />} />)
                })}
                <AddAccordionItem
                    key={this.props.awardsItems.length}
                    index={this.props.awardsItems.length}
                    component={<EditAwardItem item={defaultNewItem} onSubmit={this.props.onSubmit} />} />
            </Accordion>)

    }

}

export default EditAwardSection;