import React, { useState } from "react";
//Redux
import { connect } from "react-redux";
import { clearCart } from "../../actions";
import { Redirect } from "react-router-dom";

const Cart = (props) => {
  const [home, setHome] = useState(false);
  return (
    <div>
      {home && <Redirect to="/" />}
      <h1>Cart</h1>

      <h1>
        Total{" "}
        {props.cart.length &&
          props.cart.reduce((acc, item) => acc + item.price, 0)}
      </h1>

      <button
        onClick={() => {
          props.clearAll();
          setHome(true);
        }}
      >
        Place Order
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  clearAll: () => dispatch(clearCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
