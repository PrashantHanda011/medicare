export const CartReducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty:3 }] };
    case "removefromcart":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
