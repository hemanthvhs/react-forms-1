import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { product: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="product">Product</label>
          <input
            value={this.state.product}
            name="product"
            onChange={this.handleChange}
          />

          <label htmlFor="quantity">Quantity</label>
          <input
            value={this.state.quantity}
            name="qty"
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
