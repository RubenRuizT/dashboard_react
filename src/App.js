import {react,useState,createState} from "react"; 
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"; 
import Home from "./pages/home/home"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar/>  
      <div className="container">
        <Sidebar/>  
          <Home/>
          </div> 
        </div>
  );
}

export default App; 