import React, { useContext } from 'react'
import "../stylesheets/PlaceOrder/PlaceOrder.css";
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="tel" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Totals</h2>
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
          <button>Proceed to pay</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder
