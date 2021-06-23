import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/apis";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProductsDetails = (props) => {
  const [product, setProduct] = useState({});
  const [loader, setloader] = useState(true);
  const { id } = useParams();
  const {
    brand = "",
    description = "",
    id: productId = null,
    isAccessory = null,
    name = "",
    photos = [],
    preview = "",
    price = null,
    size = [],
  } = product;

  console.log("Props", props);
  useEffect(() => {
    axios(`${getProduct}${id}`).then((res) => {
      setProduct(res.data);
      setloader(false);
    });
  }, []);
  return (
    <div>
      <h1>Product Details - {id}</h1>
      {loader ? (
        <CircularProgress />
      ) : (
        <>
          <h1>{name}</h1>
          <h2>{price}</h2>
          <h3>{description}</h3>
        </>
      )}
    </div>
  );
};

export default ProductsDetails;
