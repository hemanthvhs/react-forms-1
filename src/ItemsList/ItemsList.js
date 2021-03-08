import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Form from "../Form/Form";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: uuid(), product: "Apples", qty: 10 },
        { id: uuid(), product: "Oranges", qty: 20 }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    const newItem = { ...item, id: uuid() };
    console.log(item);
    this.setState(curState => ({
      items: [...curState.items, newItem]
    }));
  }

  render() {
    return (
      <div className="ItemsList">
        <h2>Items List</h2>
        <Form addItem={this.addItem} />
        <ul>
          {this.state.items.map(item => {
            return (
              <li>
                {item.product} - {item.qty}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
