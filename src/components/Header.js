import React from "react";
import "../styles/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProduct } from "../redux/productListAction";

const Header = () => {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.cartData);
  console.log(result);

  return (
    <>
      <div className="header-wrapper">
        <Link to="/">
          <header className="header">E-comm</header>
        </Link>
        <input
          type="text"
          placeholder="search by product"
          className="search-field"
          onChange={(e) => dispatch(searchProduct(e.target.value))}
        />

        <div className="header-items">
          <span className="number">{result.length}</span>
          <Link to="/cart">
            <span class="fa-solid fa-cart-shopping"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
