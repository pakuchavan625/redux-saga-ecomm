import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import {Routes,Route} from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
   
    </>
  );
}

export default App;
