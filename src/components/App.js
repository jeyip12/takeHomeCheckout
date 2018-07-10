import React, { Component } from "react";
import Item from "./Item";
import GrandTotal from "./GrandTotal";

let data = require("../../cart.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: data,
      items: data.items,
      firstName: data.customer.first_name,
      lastName: data.customer.last_name,
      subtotal: 0
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
  }

  componentDidMount() {
    this.updateTotal();
  }

  updateTotal() {
    let subtotal = this.state.items.reduce((acc, ele) => {
      return acc + ele.unit_price * ele.quantity;
    }, 0);
    this.setState({
      subtotal: subtotal
    });
  }

  addItem(event) {
    let increaseItemCount = this.state.items.map(ele => {
      if (ele.id == event.target.value) {
        ele.quantity += 1;
        return ele;
      } else {
        return ele;
      }
    });
    this.setState({
      items: increaseItemCount
    });
    this.updateTotal();
  }

  deleteItem(event) {
    let index = 0;
    this.state.items.forEach((ele, i) => {
      if (ele.id == event.target.value) {
        index = i;
      }
    });
    let itemsBeforeDelete = this.state.items.slice(0, index);
    let itemsAfterDelete = this.state.items.slice(index + 1);
    let combined = itemsBeforeDelete.concat(itemsAfterDelete);
    const promise = new Promise((resolve, reject) => {
      resolve(
        this.setState({
          items: combined
        })
      );
    });
    promise.then(() => {
      this.updateTotal();
    });
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <p>
          Checking Out {this.state.firstName} {this.state.lastName}
        </p>
        {this.state.items.map((ele, i) => {
          return (
            <Item
              key={i}
              value={ele.id}
              name={ele.name}
              price={ele.unit_price}
              quantity={ele.quantity}
              addItem={this.addItem}
              deleteItem={this.deleteItem}
            />
          );
        })}
        <GrandTotal
          salesTax={this.state.cart.sales_tax}
          subtotal={this.state.subtotal}
        />
      </div>
    );
  }
}

export default App;
