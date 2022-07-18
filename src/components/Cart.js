import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import "../styles/cart.css";
const Cart = () => {
  const data = useSelector((state) => state.cartData);
  let amount =data.length && data.map((items)=>items.price).reduce((a,b)=>a+b)
//   console.log("data in the catrt par", data[2].price);
  console.log("toatal amount of selected ", amount)
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="btn btn-primary"> Product List</button>
        </Link>
      </div>
      <h1 style={{ textAlign: "center" }}>Cart page</h1>
      <div className="table-price-conatiner">
        <div className="table">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Color</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            {data.map((product) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{product.name}</th>
                    <td>{product.color}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className="price-details">
          <div className="adjust-price">
            <span>Ammount</span><span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span><span>{amount/5}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span><span>00</span>
          </div>
          <div className="adjust-price">
            <span>Total</span><span>{amount-amount/5}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
