import { createContext, useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import ProductDetalis from './Components/Products/ProductsDetails/ProductDetalis';
import MainContainer from './Components/Products/MainContainer/MainContainer';

export const ProjectContext = createContext();
function App() {

  const [openBar,setOpenBar] = useState(false)
  const [offset,setOffset] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const states = {
    width:width,
    offset:offset,
  }
  return (
    <ProjectContext.Provider value = {states}>
    <div className="App">
      <Navbar openBar={openBar} setOpenBar={setOpenBar}/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="productDetails" element={<ProductDetalis/>}/>
      <Route path="/allProducts" element={<MainContainer/>}/>
      </Routes>
      
    </div>
    </ProjectContext.Provider>
  );
}

export default App;
