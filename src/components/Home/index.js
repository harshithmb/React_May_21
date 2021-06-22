import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import Card from "../Card";

//API
import { homeProductsAPI } from "../../utils/apis";
import axios from "axios";

//Store
import { connect } from "react-redux";
import { addProduct, getProducts } from "../../actions";

const Home = (props) => {
  useEffect(() => {
    axios(homeProductsAPI).then((res) => props.sendProducts(res.data));
  }, []); // componentDidMount
  return (
    <>
      <Slider />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.products?.map((item) => (
          <Card {...item} addProduct={() => props.addProductToCart(item)} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  addProductToCart: (payload) => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
