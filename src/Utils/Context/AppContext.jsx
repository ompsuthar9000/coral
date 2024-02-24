import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const Context = createContext();

const Appconext = ({ children }) => {
  // State to manage the products in the cart
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [itemCount, setItemCount] = useState(0); // State to keep track of total number of items in cart

  useEffect(() => {
    // Calculate subtotal and item count whenever cart changes
    calculateSubtotal();
    calculateItemCount();
  }, [cart]);

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.TotalPrice;
    });
    setSubtotal(total);
  };

  // Function to calculate total number of items in cart
  const calculateItemCount = () => {
    let count = 0;
    cart.forEach(item => {
      count += item.Qty;
    });
    setItemCount(count);
  };

  // Function to add a product to the cart
  const addProductToCart = (product) => {
    const isProductInCart = cart.some(item => item.id === product.id);
    if (!isProductInCart) {
      setCart([...cart, product]);
    } else {
      // Product is already in the cart, update its quantity and total price
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          // Update quantity and total price of the existing product
          return {
            ...item,
            Qty: item.Qty + product.Qty,
            TotalPrice: item.TotalPrice + (product.Qty * product.price)
          };
        }
        return item;
      });

      // Update the cart state with the updatedCart array
      setCart(updatedCart);
    }
  };

  // Function to remove a product from the cart
  const removeProductFromCart = (productToRemove) => {
    const updatedCart = cart.filter(product => product !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <Context.Provider value={{ cart, setCart, addProductToCart, removeProductFromCart, subtotal, itemCount }}>
      {children}
    </Context.Provider>
  )
}

export default Appconext;
