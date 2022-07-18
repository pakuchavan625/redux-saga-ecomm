import "../App.css";
import { add, remove, empty } from "../redux/action";
import { useDispatch } from "react-redux";
import { productListAction } from "../redux/productListAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productListReducer);
  console.log("data in the main component from saga", data);

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);


  return (
    <>
      <div className="App">
        <div>
          <button className="btn btn-danger" onClick={() => dispatch(empty())}>Empty cart</button>
        </div>
      </div>
      <div
        className="product-container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
          height: "auto",
        }}
      >
        {data.map((product) => {
          return (
            <div
              style={{
                width: "400px",
                height: "400px",
                border: "1px solid grey",
                margin: "10px",
                borderRadius: "5px",
                padding: "10px",
                boxShadow: "2px 2px 2px 5px  green",
              }}
              key={product.id}
            >
              <img
                src={product.photo}
                alt="phot0"
                style={{ width: "400", height: "200px" }}
              />
              <div>Nmae:{product.name}</div>
              <div>Price:{product.price}</div>
              <div>Color:{product.color}</div>
              <div>Category:{product.category}</div>
              <div className="button">
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(add(product))}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(remove(product.id))}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Main;
