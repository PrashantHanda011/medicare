import React from "react";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ClearIcon from "@material-ui/icons/Clear";
import { useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Cart } from "../Context/Context";
import Cartproduct from "../ordercart/Cartproduct";

export default function Button() {
  const CartState = useContext(Cart);
  const {
    state: { cart },
  } = CartState;
  let cost = cart.cost;
  console.log(cart);
  const [style, setstyle] = useState("Cart");

  const Open = () => {
    setstyle("Cart-1");
  };
  const Close = () => {
    setstyle("Cart");
  };

  return (
    <>
      <button onClick={Open} className="side-open">
        <h4>{cart.length} Item</h4>
        <p>50 Rs</p>
      </button>

      <div id={style} className="Cart-slider">
        <div className="cart-header">
          <p className="cart-bag">
            <LocalMallIcon style={{ color: "grey", fontSize: "1.7rem" }} />
          </p>
          <button onClick={Close} className="cart-close">
            <ClearIcon style={{ color: "grey", fontSize: "1.7rem" }} />
          </button>
        </div>

        <hr style={{ border: "0.1px solid grey", margin: "0" }} />

        <div className="cart-middle">
          <Scrollbars style={{ overflowX: "hidden", width: "100%" }}>
            {cart.length > 0 ? (
              cart.map((item, index) => {
                return (
                  <Cartproduct
                    props={item}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    cost={item.cost}
                  />
                );
              })
            ) : (
              <span style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <badge><LocalMallIcon  style={{fontSize:"80px", color:"red" }} /></badge>
            </span>
            )}
          </Scrollbars>
        </div>

        <div className="cart-footer">
          <a href="">
            <p>Do you have any voucher?</p>
          </a>
          <button className="cart-footer-btn">
            <p>Checkout</p> <span class="card-footer-btn-cost"> 20 R </span>
          </button>
        </div>
      </div>
    </>
  );
}
