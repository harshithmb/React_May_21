import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from "axios";
import { blogData, filterData } from "./utils/commonData"
import Capsule from './components/Capsule/Capsule';

const Parent = () => {
  const [showChild, updateShowChild] = useState(true);
  const [count, updateCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [completeProducts, setCProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  const [filters, setFilters] = useState([])
  const [blogs, setBlogs] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [originalBlogs, setOriginalBlogs] = useState("");
  const [filterIndex, setFilterIndex] = useState(null)
  const showHide = () => {
    console.log(showChild)
    updateShowChild(!showChild)
  }

  /*Lifecycle*/
  useEffect(() => {
    console.log("Component DId Mount API")
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(response => response.json())


    // axios("https://jsonplaceholder.typicode.com/photos")
    //   .then(res => {
    //     const tenProducts = res.data.slice(productIndex, 10);
    //     setProductIndex(11);
    //     setCProducts(res.data)
    //     setProducts(tenProducts)
    //   })


    setFilters(filterData)
    setBlogs(blogData)
    setOriginalBlogs(blogData)
    axios("https://api.edyoda.com/v1/blog/postcategories?id=1234")
      .then(res =>
        setFilters(res.data)
      )

    axios.get("https://api.edyoda.com/v1/blog/postcategories", {
      params: {
        id: 123
      }
    }).then(res => setFilters(res.data))
      .catch(err => console.log(err))

  }, [])



  async function getDetails() {
    const response = await axios.get("https://api.edyoda.com/v1/blog/postcategories", {
      params: {
        id: 123
      }
    }).then(res => { return res })
    console.log("response", response)
  }

  function getDetails_1() {
    return axios.get("url")
  }

  const postData = () => {
    axios({
      method: "delete", // get delete put
      url: "https://jsonplaceholder.typicode.com/posts/1",
      // data: {
      //   "userId": 1,
      //   "id": 1,
      //   "title": "new title",
      //   "body": "New Body"
      // }
      headers: { "content-type": "application/json", "Authorization": "#!@311231" }
    }).then(res => console.log("Res post", res))
  }

  Promise.all([getDetails_1()])
    .then((results) =>
      console.log(results[0], results[1]))

  //Post


  useEffect(() => {
    console.log("Component DId Mount Component DId Update")
  })
  /*!Lifecycle*/

  const addMoreProducts = () => {
    const nextIndex = productIndex + 10;
    const tenProducts = completeProducts.
      slice(productIndex, nextIndex); // 11 to 21 before 21
    setProductIndex(nextIndex);
    const updateProducts = [...products, ...tenProducts]
    updateProducts.length < 50 && setProducts(updateProducts)
  }

  const onSearch = () => {
    const updatedValues = originalBlogs.filter(item => item.authorname.includes(searchValue) || item.slug.includes(searchValue))
    setBlogs(updatedValues)
  }

  const onFilterClick = (id, slug) => {
    // axios.post()
    console.log("id, DATA", id, slug)
    const updatedValues = originalBlogs.filter(item => item.slug === slug)
    setBlogs(updatedValues)
    setFilterIndex(id)
  }

  return (<div>
    {/* <h1 className="head-title">Parent - {products.length}</h1> */}
    <button onClick={showHide}>Show/Hide</button>
    <button onClick={() => postData()}>Hit Post</button>
    <button onClick={() => count < 6 && updateCount(count + 1)}>Count</button>

    <input className="search" onChange={(e) => setSearchValue(e.target.value)} /> <button onClick={onSearch}>Search</button>

    {/*Filters*/}
    <div className="capsules">
      {filters.length && filterData.map(({ id, title, slug }) => <Capsule
        id={id}
        title={title}
        slug={slug}
        filterIndex={filterIndex}
        onFilterClick={(id, slug) => onFilterClick(id, slug)}
      />)}
    </div>

    {/*Blogs*/}
    <div className="blogs">
      {blogs.length && blogs.map(({ authorname, id, small_image, posted_on, slug, description, title }) =>
        <div key={id} className="blog">
          <img src={small_image} />
          <h3>{title}</h3>
          <h4 style={{ color: "red" }}>{slug}</h4>
          <h5>{authorname}</h5>
          <p>{description}</p>
        </div>
      )}
    </div>
    {showChild && <Child count={count} />}

    {/*Cards*/}
    <div className="products">
      {products.length && products.map(({ title, url, thumbnailUrl, id }) => <div key={id} className="card">
        <h5>{title}</h5>
        <img src={thumbnailUrl} />
      </div>)}
    </div>
    {/*User can add the see products till 40 length*/}
    {products.length && products.length < 40 ? <button onClick={addMoreProducts}>Show More Products</button> : ""}
  </div>);
}

export default Parent;

const Child = ({ count }) => {
  const [childCount, updateChildCount] = useState(count);
  useEffect(() => {
    return () => { console.log("Clean UP") }
  }, [])

  useEffect(() => {
    if (count <= 5) {
      updateChildCount(count)
    }
  }, [count])

  return (<div>
    <h1 className="head-child">Child  - {childCount}</h1>
  </div>);
}

























// class Parent extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       showChild: true
//     }
//   }
//   componentDidMount() {
//     console.log("componentDidMount Parent")
//     setTimeout(() => this.setState({ count: 1 }), 4000)
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log("shouldComponentUpdate - Parent")
//   //   if (nextState.count == 1) {
//   //     return false
//   //   } else return true
//   // }
//   componentDidUpdate() {
//     console.log("componentDidUpdate Parent")
//   }

//   render() {
//     console.log("Render Parent")
//     return (<div>
//       <h1>Parent - {this.state.count} </h1>
//       <button onClick={() => this.setState({ showChild: !this.state.showChild })}>Show/Hide</button>
//       {this.state.showChild && <Child />}{/*Holded*/}
//       <hr />
//     </div>);
//   }
// }

// export default Parent;

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   componentDidMount() {
//     console.log("componentDidMount Child")
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnMount - Child")
//   }
//   render() {
//     return (<div>
//       <h1>Child</h1>
//     </div>);
//   }
// }

















// class App extends Component{
//   constructor(){
//     this.getFullName = this.getFullName.bind(this)
//   }

//   getFullName(){

//   }

//   getFullName1 = () => {

//   }
//   //this.getFullName() this.getFullName1()

// }
















// import Banner from './components/Banner';
// import Card from './components/Card';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// import { apiData } from "./utils/commonData"

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       products: [],
//       count: 0,
//       showLife: true
//     }
//     console.log("First Call Constructor - App")
//   }

//   componentDidMount() {
//     console.log("componentDidMount - App")
//     // setTimeout(() =>
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => this.setState({
//         products: json, loading: false
//       }))
//     // , 5000)
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("Update phase shouldcomponentupdate App")
//     if (nextState.count <= 10 && !(nextState.count < 0)) {
//       return true
//     } else {
//       return false
//     }
//   }

//   componentDidUpdate() {
//     console.log("Update Phase after render")
//   }


//   render() {
//     console.log("Second Call Render - App")
//     const { count, loading, products, showLife } = this.state;
//     return (<>
//       <h1>App - {count}</h1>
//       <button
//         onClick={() =>
//           this.setState({
//             count: this.state.count - 1
//           })}
//       >Decrement</button>
//       <button
//         onClick={() =>
//           this.setState({
//             count: this.state.count + 1
//           })}
//       >Increment</button>



//       {loading && <h1>Loading...</h1>}
//       {/* <button onClick={() =>
//         this.setState({ count: this.state.count + 1 })
//       }>Click</button>

//       <hr />
//       <button onClick={() =>
//         this.setState({ showLife: !this.state.showLife })
//       }>Show/Hide</button>
//       {showLife && <LifeCycle count={count} />} */}
//       {products.length ? products.map((item) =>
//         <h5>{item.title}</h5>) : ""}
//     </>);
//   }
// }

// export default App;

// class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}

//   }
//   componentDidMount() {
//     // console.log("componentDidMount - Lifecycle")
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.count <= 3) {
//       return true
//     } else return false
//   }

//   componentWillUnmount() {
//     console.log("When component dies")
//   }
//   render() {

//     return (<>
//       <h1>Life Cycle Methods - {this.props.count}</h1>
//     </>);
//   }
// }



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
