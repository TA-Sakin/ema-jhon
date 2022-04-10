import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../Utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCarts(products);
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* <Link to="/inventory">
            <button>Poceed Checkout</button>
          </Link> */}
          {/* pure button without showing any link in the buttom left corner of the page */}
          <button onClick={() => navigate("/inventory")}>
            Poceed Checkout
          </button>
        </Cart>
      </div>
    </div>
    // <div>
    //   <h1>Your orders: {products.length}</h1>
    //   <p>Ordered Items: {cart.length}</p>
    // </div>
  );
};

export default Orders;
