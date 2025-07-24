export { createContext } from "react";

export const CartContext = createContext({

    product: [],
    loading: false,
    error: null,
    
    cart: [],
    addToCart: () => {},
    updateQtyCart: () => {},
    clearCart: () => {},
});

export function CartProvider({ children }) {}