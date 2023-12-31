import React from "react";
import CartList from "./_components/cart-list";

const CartPage = () => {
  return (
    <div className="mt-24">
      <h1 className="my-10 text-2xl font-bold">Cart</h1>
      <CartList />
    </div>
  );
};

export default CartPage;
