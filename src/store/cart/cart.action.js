import { CART_ACTIONS_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";



const addCartItem = (cartItems, productToAdd) => {
    // Find if cartItems contais productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    // If found, increment quantity

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    }

    // Return new array with modified cartItems / new cart item.
    return [...cartItems, {...productToAdd, quantity: 1}];
}


const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // Check if quantity is equal to 1, if it is, remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // Return back caritems with matching quantity (reduced)
    return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem);
};

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
}; 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};


export const clearItemToCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setCartToClear = () => {
    const newCartItems = [];
    return createAction(CART_ACTIONS_TYPES.CLEAR_CART, newCartItems);
};


export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean);
