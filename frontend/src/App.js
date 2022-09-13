import { createContext, useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetalis from "./Components/Products/ProductsDetails/ProductDetalis";
import MainContainer from "./Components/Products/MainContainer/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAdmin } from "./Redux/Actions/ProductsActions";
import Wishlist from "./Components/Wishlist/Wishlist";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Orders/Shipping";
import ConfirmOrder from "./Components/Orders/ConfirmOrder";
import Payment from "./Components/Orders/Payment";
import Auth from "./Components/authentication/Auth";
import { loadUser } from "./Redux/Actions/UserActions";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Profile from "./Components/authentication/Profile";
import Checkout from "./Components/Orders/Checkout";
export const ProjectContext = createContext();
function App() {
  const [openBar, setOpenBar] = useState(false);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [openAlert, setOpenAlert] = useState({
    open:false,
    message:"success",
    success:true,
  });

  // redirect or navigation handling
  const navigate = useNavigate();
  const navigator = (link) => {
    navigate(link);
  };

  // global useDispatch for entire project
  const dispatch = useDispatch();

  useEffect(() => {
    // handling screen width
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    // handling screen scroll
    function handleWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);

    // load authenticated user if user loggedIn
    dispatch(loadUser());

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  // small states handling using useContext
  const states = {
    width: width,
    offset: offset,
    openAlert: openAlert,
    setOpenAlert:setOpenAlert,
    navigator: navigator,
    dispatch: dispatch,
  };

  return (
    <ProjectContext.Provider value={states}>
      <div className="App">
        <Navbar openBar={openBar} setOpenBar={setOpenBar} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productDetails/:id" element={<ProductDetalis />} />
          <Route path="/allProducts" element={<MainContainer />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/auth" element={<Auth />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>
      </div>
    </ProjectContext.Provider>
  );
}

export default App;
