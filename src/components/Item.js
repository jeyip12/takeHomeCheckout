import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Item = props => {
  return (
    <Card>
      <CardContent>
        <Typography>Item : {props.name}</Typography>
        <Typography>Price : {props.price}</Typography>
        <Typography>Item : {props.quantity}</Typography>
        <Typography>Subtotal : ${props.price * props.quantity}</Typography>
      </CardContent>
      <button value={props.value} onClick={props.addItem}>
        Add Additional Item to Cart
      </button>
      <button value={props.value} onClick={props.deleteItem}>
        Delete Item from Cart
      </button>
    </Card>
  );
};

export default Item;
