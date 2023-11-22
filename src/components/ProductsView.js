import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { Decrement, Increment, productSelector } from "./reduc-components/ProductSlice";
import { useParams } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Decrement, Increment, createCart, productSelector } from "./reduc-components/ProductSlice";


export default function ProductsView() {

    const { id } = useParams();
    const product = useSelector(productSelector(id));


    const dispatch = useDispatch();

    return (
        <Grid >
            {/* <header style={{ display: "flex", justifyContent: "end" }}><ShoppingCartIcon /></header> */}
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", border: "1px solid black", padding: "20px" }}>
                <img src={product.image} style={{ height: "100px", width: "100px" }} />

                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>
                    <Button onClick={() => dispatch(Decrement(id))}>-</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => dispatch(Increment(id))}>+</Button>
                    <Button style={{ border: "1px solid black", marginLeft: "90px", backgroundColor: "orange", color: "black" }} onClick={() => dispatch(createCart(product))}>Add to cart</Button>

                </div>
            </Box>
        </Grid>
    );
}