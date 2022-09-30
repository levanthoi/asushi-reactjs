const { createSlice } = require("@reduxjs/toolkit");

const items = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];

const cartSlice = createSlice({
    name: "cart",
    initialState: {cart: items},
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if(itemInCart) itemInCart.quantity+= action.payload.quantity;
            else state.cart.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            const a = document.querySelector(".box-cart");
            console.log(a);
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            console.log("newstate",state.cart);
            localStorage.setItem("cart", JSON.stringify(state.cart));
            // return [...state.cart];
        },
        updateCart: (state, action) => {
            state.cart.find((item) => item.id === action.payload.id).quantity = action.payload.quantity;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity===1 ? item.quantity =1 :  item.quantity--;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        increaseCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});
export const { addToCart, deleteFromCart, updateCart, increaseCart,decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
