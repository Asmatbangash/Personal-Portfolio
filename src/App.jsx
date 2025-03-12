import Navbar from "./Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App(){
  return(
        <>
        <Navbar />
        <Outlet />
        </>
  )
}
export default App;