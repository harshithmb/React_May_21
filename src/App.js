import React, { Component, useState } from 'react';
import "./App.css";
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { apiData } from "./utils/commonData"


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartProducts: []
//     }
//   }
//   render() {
//     const { catalogEntryView, ...restData } = apiData;
//     return (<React.Fragment>
//       <Navbar cartCount={this.state.cartProducts.length} />
//       <Banner />
//       <hr />
//       {/* Cards Start */}
//       <div className="p-2 d-flex justify-content-center flex-wrap">
//         {catalogEntryView.map((item) => <Card item={item}
//           addProduct={(product) =>
//             this.setState({
//               cartProducts: [...this.state.cartProducts, product]
//             })}
//         />)}
//       </div>
//       {/* Cards End */}
//       <Footer />
//     </React.Fragment>);
//   }
// }

const App = () => {
  const { catalogEntryView, ...restData } = apiData;
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const updateCart = (product) => {
    //Code If product exist ->>>> Increase the quantity by 1
    let checkProductIndex = cartProducts.length &&
      cartProducts.findIndex(item => item.uniqueID === product.uniqueID);
    if (cartProducts.length && checkProductIndex !== -1) {
      cartProducts[checkProductIndex].quantity += 1;
      setCartProducts(cartProducts)
    } else {
      product.quantity = 1;
      setCartProducts([...cartProducts, product])
    }
  }

  return (<div>
    <Navbar cartCount={cartProducts.length} cartProducts={cartProducts} />
    <Banner />
    <hr />
    <input placeholder="Search" />
    <button>Price</button>
    <button>Name</button>
    {/* Cards Start */}
    <div className="p-2 d-flex justify-content-center flex-wrap">
      {catalogEntryView.map((item) => <Card item={item}
        addProduct={updateCart} />)}
    </div>
    {/* Cards End */}
    <Footer />

    <button type="button" class="btn btn-primary" onClick={() => setShowModal(true)}>
      Launch demo modal
</button>

  </div>);
}

export default App;
