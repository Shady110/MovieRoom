import Navbar from "./components/navbar";
import Home from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Search from "./pages/search";
import loginButton from "./components/loginButton";
import Genres from "./pages/genres";
function App() {
  return ( 
  <>
  
    <Navbar></Navbar>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/search/:name' element={<Search/>}></Route>
    <Route path='/:id' element={<Genres/>}></Route>
    </Routes>
    

  </> );
}

export default App;