import React from 'react';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';
import './App.css';

const App = ({ products }) => {
  const contextValue = {
    products: products,
  }
  
  return (
    <div className="App-Cart">
      <CartContext.Provider value={contextValue}>
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
