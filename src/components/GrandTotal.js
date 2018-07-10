import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const GrandTotal = props => {
  let grandTotal = props.salesTax * 0.01 * props.subtotal + props.subtotal;
  return (
    <Card>
      <CardContent>
        <Typography>Sales Tax: {props.salesTax}%</Typography>
        <Typography>GrandTotal: ${grandTotal.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

export default GrandTotal;
