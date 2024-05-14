import React, { useContext } from "react";
import "../stylesheets/Cart/Cart.css";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../store/apiUrl";

const Cart = () => {
  const foodImageUrl = `${API_URL}/images/`;

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>

      <br />
      <hr />

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <>
              <div className="cart-items-title cart-items-item">
                <img src={foodImageUrl + item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs. {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs. {item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">
                  x
                </p>
              </div>

              <hr />
            </>
          );
        }
      })}

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount() === 0 ? "0" : "20"}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Total</p>
              <p>
                Rs.{" "}
                {getTotalCartAmount() === 0
                  ? getTotalCartAmount()
                  : getTotalCartAmount() + 20}
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>

        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="Promo Code" />
              <button>Apply Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
