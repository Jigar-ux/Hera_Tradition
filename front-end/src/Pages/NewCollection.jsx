import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "../Pages/CSS/NewCollection.css";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import Footer from "../Components/Footer/Footer";

const NewCollection = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="collection">
      <img className="banner" src={props.banner} alt="" />
      <div className="products">
        <p>
          <span>Showing 1-9</span> out of 23 products
        </p>
        <div className="collection-sort">
          Sort by: <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="newcollection">
        {all_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="load">Explore More</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default NewCollection;
