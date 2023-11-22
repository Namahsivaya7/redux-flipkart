import React from "react";
import { Box, Grid, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, createCart } from "./reduc-components/ProductSlice";
import { Link } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from "./Cart";


export default function Home() {

    const PRODUCTS = useSelector((state) => {
        return state.product.PRODUCTS.filter(prod => prod.name.toLowerCase().includes(state.product.query))
    });
    const Count = useSelector((state) => state.product.Count);

    const dispatch = useDispatch();

    return (
        <Grid>
            <header style={{ display: "flex", justifyContent: "end" }}>
                {/* <Link to="cart">
                    <ShoppingCartIcon />
                </Link> */}
            </header>
            <div style={{ marginTop: "50px", display: "flex", flexWrap:"wrap",margin:"50px 50px",gap:"10px",paddingLeft:"150px" }}>
                {
                    PRODUCTS.map(({ image, name, price, quantity, id }, i) => (

                        <Grid style={{ border: "1px solid black", padding: "20px", justifyContent: "center",width:"280px" }}>

                            <Link to={`/ProductsView/${i}`} style={{ textDecoration: "none" }}>
                                <img src={image} style={{ height: "100px", width: "100px" }} />
                                <div><p>{name}</p></div>
                            </Link>
                            <div>₹ {price}</div>
                            <div>
                                <p >Quantity
                                    <Button onClick={() => dispatch(Decrement(i))} style={{ marginLeft: "10px", border: "1px solid black",backgroundColor:"" }}>-</Button>
                                    <span style={{ margin: "auto 15px" }}><b>{quantity}</b></span>
                                    <Button onClick={() => dispatch(Increment(i))} style={{ border: "1px solid black" }}>+</Button>
                                </p>
                            </div>
                            <Button id="addtocart" style={{ border: "1px solid black",marginLeft:"90px",backgroundColor:"orange",color:"black"}} onClick={() => dispatch(createCart(PRODUCTS[i]))}>Add to cart</Button>

                        </Grid>

                    ))
                }
                {PRODUCTS.length === 0 && <p>No items found</p>}
            </div>
        </Grid>
    );
}

