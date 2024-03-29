import "./App.css";
import Header from "./components/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
