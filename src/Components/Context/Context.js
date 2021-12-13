import { PinDropSharp } from '@material-ui/icons';
import React, { useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';
import { CartReducer } from './CartReducer';
import Data from '../dummyproducts/productsapi';

export const Cart = createContext();

const Context = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, {
        products : Data,
        cart:[]
    })
    return (
        <>
          <Cart.Provider value={{state,dispatch}}>
              {children};
          </Cart.Provider>  
        </>
    );
};

export default Context;
