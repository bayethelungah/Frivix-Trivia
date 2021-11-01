import "./styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Nav from "./components/Nav";

function App() {
  const darkmode = useSelector((state) => state.darkMode);
  console.log(darkmode);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
