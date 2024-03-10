import React from "react";
import "./RelatedItems.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedItems = () => {
  return (
    <div className="related-products">
      <h2>You might also like</h2>
      <hr />
      <div className="related-product-item">
        {data_product.map((item, i) => {
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
    </div>
  );
};

export default RelatedItems;
