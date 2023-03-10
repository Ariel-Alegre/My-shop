import AllProducts from "./components/AllProducts/AllProducts";
import Details from "./components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Registers from "./components/Registers/Registers";




function App() {
  return (
    <div>
     <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<AllProducts/>}/> 
    <Route  exact path='/details/:productId' element={<Details/>}/> 
    <Route  exact path='/register' element={<Registers/>}/> 

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

