import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
