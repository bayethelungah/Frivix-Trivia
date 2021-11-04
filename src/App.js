import "./styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Nav from "./components/Nav";
import Hero from "./components/hero";

function App() {
  const darkmode = useSelector((state) => state.darkMode);
  console.log(darkmode);

  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
