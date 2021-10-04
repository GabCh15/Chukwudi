import "./App.css";
import "./Cart.js";
import { Cart } from "./Cart.js";
import { Home } from "./Home.js";

function App() {
  return (
    <div className="App">
      <Home className="Home"/>
      <Cart className="Cart"/>
    </div>
  );
}

export default App;
