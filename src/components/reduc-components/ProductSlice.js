import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Count: 0,
    query:'',
    PRODUCTS: [
        {
            image: "https://d2xamzlzrdbdbn.cloudfront.net/products/0f890dc4-9ab0-4e35-9f6a-a8a49d0b8fb922011222.jpg",
            name: "Washing machine",
            price: 50000,
            quantity: 0,
            id: 0,
        },
        {
            image: "https://m.media-amazon.com/images/I/516LU0H963L._SX466_.jpg",
            name: "hp mouse",
            price:  595,
            quantity: 0,
            id: 1,
        },
        {
            image: "https://m.media-amazon.com/images/I/41SMFsDvi2L._SX300_SY300_QL70_FMwebp_.jpg",
            name: "Jam & Honey Penguin, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift (Black and White, 17 cm)",
            price:  159,
            quantity: 0,
            id: 2,
        },
        {
            image: "https://m.media-amazon.com/images/I/51k784DFnRL._SY575_.jpg",
            name: "kazmarmax shoes",
            price:  919,
            quantity: 0,
            id: 3,
        },
        {
            image: "https://rukminim2.flixcart.com/image/416/416/xif0q/incense-stick/x/p/m/premium-gulab-incense-stick-no-charcoal-100-herbal-natural-original-imagmfu3w9hb5zxh.jpeg?q=70",
            name: "DOKCHAN Gulab Incense Stick| 6x100g Bottle  (100, Set of 1)",
            price:  89,
            quantity: 0,
            id: 4,
        },
        {
            image: "https://rukminim2.flixcart.com/image/416/416/xif0q/snack-savourie/d/r/v/-original-imaghfn8j2vrwfcy.jpeg?q=70",
            name: "Happilo Premium Natural Californian Almonds  (200 g)",
            price:  220,
            quantity: 0,
            id: 5,
        },
        {
            image: "https://rukminim2.flixcart.com/image/612/612/kqttg280/stuffed-toy/c/y/n/cute-nylex-mother-teddy-bear-40-fluffies-original-imag4r4yzgauqdxb.jpeg?q=70",
            name: "fluffies Teddy Bear",
            price:  254,
            quantity: 0,
            id: 6,
        },
        {
            image: "https://rukminim2.flixcart.com/image/612/612/l2tcfbk0/coffee/a/j/a/100-100-pure-glass-bottle-1-instant-coffee-tata-coffee-original-image2kyc9byvmx5.jpeg?q=70",
            name: "Tata gold instant coffee",
            price:  332,
            quantity: 0,
            id: 7,
        },
    ],
    cart: [],
};

const ProductDetails = createSlice({
    name: "product",
    initialState,
    reducers: {
        Increment: (state, action) => {
            if (state.PRODUCTS[action.payload].quantity === 10) {
                return;
            }
            state.PRODUCTS[action.payload].quantity++;
            state.PRODUCTS = [...state.PRODUCTS];

            const found = state.cart.find(product => product.id === state.PRODUCTS[action.payload].id);    //find the cart item in existing cart
            if (found) {
                found.quantity++;
                state.cart = [...state.cart]
            }

        },
        Decrement: (state, action) => {
            if (state.PRODUCTS[action.payload].quantity === 0) {
                return;
            }
            state.PRODUCTS[action.payload].quantity--;
            state.PRODUCTS = [...state.PRODUCTS]

            const found = state.cart.find(product => product.id === state.PRODUCTS[action.payload].id);
            if (found) {
                found.quantity--;
                state.cart = [...state.cart]
            }

        },
        createCart: (state, action) => {
            state.cart = [...state.cart, action.payload];


        },
        updateQuery:(state,action)=>{
            state.query =action.payload.trim();
        }
    }
});
export const { Increment, Decrement, createCart,updateQuery  } = ProductDetails.actions

export const productSelector = (id) => (state) => state.product.PRODUCTS[id];


export default ProductDetails.reducer
