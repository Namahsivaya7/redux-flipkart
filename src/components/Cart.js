import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Decrement, Increment } from "./reduc-components/ProductSlice";

export default function Cart() {

    const cartItem = useSelector((state) => state.product.cart);
    const dispatch = useDispatch();
    let total = 0;
    return (

        <Grid style={{width:"100%"}}>
            <h3 style={{display:"flex",justifyContent:"center"}}> Total items in your cart</h3>
            {cartItem.map(({ image, name, price, quantity, id }, i) => {
                const totalAmount = price * quantity;
                total += totalAmount;
                return (
                    <Grid container sx={{margin:"50px"}}>
                        <Grid item xs={6}>
                            <img src={image} style={{ height: "150px", width: "150px" }} />
                            <div>{name}</div>
                            <div>₹ {price}</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>Quantity
                                <Button onClick={() => dispatch(Decrement(id))} style={{ marginLeft: "10px", border: "1px solid black" }}>-</Button>
                                <span style={{ margin: "auto 15px" }}>{quantity}</span>
                                <Button onClick={() => dispatch(Increment(id))} style={{ border: "1px solid black" }}>+</Button>
                            </div>
                            <span>Sub total : ₹ {price * quantity}</span>
                        </Grid>
                        <p>Total : ₹ {total} /-</p>

                    </Grid>
                );
            })}
        </Grid>
        

    );
}