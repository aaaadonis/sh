import logo from "./imgs/logo.png"
import "./App.css";
import Signup from "./Signup";


function App() {

  return (
    <div className="App">
        <Signup />
        <img src={logo} alt="" />
    </div>
  );
}

export default App;
