import React, { Component } from 'react';
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
      cartProducts: []
    }
  }
  render() {
    const { catalogEntryView, ...restData } = apiData;
    return (<div>
      <Navbar cartCount={this.state.cartProducts.length} />
      <Banner />
      <hr />
      {/* Cards Start */}
      <div className="p-2 d-flex justify-content-center flex-wrap">
        {catalogEntryView.map((item) => <Card item={item}
          addProduct={(product) =>
            this.setState({
              cartProducts: [...this.state.cartProducts, product]
            })}
        />)}
      </div>
      {/* Cards End */}
      <Footer />
    </div>);
  }
}

// const App = () => {
//   const { catalogEntryView, ...restData } = apiData;

//   return (<div>
//     <Navbar />
//     <Banner />
//     <hr />
//     {/* Cards Start */}
//     <div className="p-2 d-flex justify-content-center flex-wrap">
//       {catalogEntryView.map((item) => <Card item={item} />)}
//     </div>
//     {/* Cards End */}
//     <Footer />
//   </div>);
// }

export default App;
