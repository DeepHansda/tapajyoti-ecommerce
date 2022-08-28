import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  const [openBar,setOpenBar] = useState(false)

  
  return (
    <div className="App">
      <Navbar openBar={openBar} setOpenBar={setOpenBar}/>
      <Main/>
    </div>
  );
}

export default App;
