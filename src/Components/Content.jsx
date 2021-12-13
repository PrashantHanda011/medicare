import Sidenavbar from "./Sidenavbar";
import Products from "./Products";
import { useContext, useState } from "react";
import { Cart } from "./Context/Context";

export default function Content() {
  const CartState = useContext(Cart);
  const {
    state: { products },
  } = CartState;
  console.log(products);
  return (
    <>
      <section id="main">
        <Sidenavbar />
        <div className="Product">
          {products.map((item, index) => {
            return (
              <Products
               
                prod={item}
                key={index}
                name={item.name}
                image={item.image}
                cost={item.cost}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
