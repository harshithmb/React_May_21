import React, { Component, useState } from 'react';
import "./App.css";
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { apiData } from "./utils/commonData"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      count: 0,
      showLife: true
    }
    console.log("First Call Constructor - App")
  }

  componentDidMount() {
    console.log("componentDidMount - App")
    setTimeout(() =>
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({
          products: json, loading: false
        })), 5000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update phase shouldcomponentupdate App")
    if (nextState.count <= 10 && !(nextState.count < 0)) {
      return true
    } else {
      return false
    }
  }

  componentDidUpdate() {
    console.log("Update Phase after render")
  }


  render() {
    console.log("Second Call Render - App")
    const { count, loading, products, showLife } = this.state;
    return (<>
      <h1>App - {count}</h1>
      <button
        onClick={() =>
          this.setState({
            count: this.state.count - 1
          })}
      >Decrement</button>
      <button
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })}
      >Increment</button>




      {/* <button onClick={() =>
        this.setState({ count: this.state.count + 1 })
      }>Click</button>
      {loading && <h1>Loading...</h1>}
      <hr />
      <button onClick={() =>
        this.setState({ showLife: !this.state.showLife })
      }>Show/Hide</button>
      {showLife && <LifeCycle count={count} />} */}
      {/* {products.length ? products.map((item) =>
        <h5>{item.title}</h5>) : ""} */}
    </>);
  }
}

export default App;

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  componentDidMount() {
    // console.log("componentDidMount - Lifecycle")
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count <= 3) {
      return true
    } else return false
  }

  componentWillUnmount() {
    console.log("When component dies")
  }
  render() {

    return (<>
      <h1>Life Cycle Methods - {this.props.count}</h1>
    </>);
  }
}



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

// const App = () => {
//   const { catalogEntryView, ...restData } = apiData;
//   const [cartProducts, setCartProducts] = useState([]);

//   const updateCart = (product) => {
//     //Code If product exist ->>>> Increase the quantity by 1
//     let checkProductIndex = cartProducts.length &&
//       cartProducts.findIndex(item => item.uniqueID === product.uniqueID);
//     if (cartProducts.length && checkProductIndex !== -1) {
//       cartProducts[checkProductIndex].quantity += 1;
//       setCartProducts(cartProducts)
//     } else {
//       product.quantity = 1;
//       setCartProducts([...cartProducts, product])
//     }
//   }

//   return (<div>
//     <Navbar cartCount={cartProducts.length} cartProducts={cartProducts} />
//     <Banner />
//     <hr />
//     <input placeholder="Search" />
//     <button>Price</button>
//     <button>Name</button>
//     {/* Cards Start */}
//     <div className="p-2 d-flex justify-content-center flex-wrap">
//       {catalogEntryView.map((item) => <Card item={item}
//         addProduct={updateCart} />)}
//     </div>
//     {/* Cards End */}
//     <Footer />
//   </div>);
// }

// export default App;
