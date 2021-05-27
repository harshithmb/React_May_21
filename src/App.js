import './App.css';
import Footer from './components/Footer';
//import TopBarComponent from "./components/TopBar";
import { TopBar, SubNavBar } from "./components/TopBar";
import Card from "./components/Card";
import { products, userName } from "./commonData"

function App() {

  const fullName = (first, last) => {
    return `${first} ${last}` // first + " " + last
  }

  return (
    <div className="App">
      <TopBar name={userName} />
      <SubNavBar />
      {products.map(({ imageUrl, title, id }, index) =>
        <Card imageUrl={imageUrl} title={title} index={id} />)
      }
      <Footer />
    </div>
  );
}

export default App;


