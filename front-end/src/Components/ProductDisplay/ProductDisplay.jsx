import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import starDull from "../Assets/star_dull_icon.png";
import "../Script/changeImage";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const changeImage = (id) => {
    let mainImg = document.querySelector("#main-img");
    let img = document.querySelector(id);

    let isSwapped = false;

    if (mainImg && img) {
      if (!isSwapped) {
        const tempSrc = mainImg.src;
        mainImg.src = img.src;
        img.src = tempSrc;
      }
    }
    isSwapped = !isSwapped;
  };

  const getValue = (id) => {
    const value = document.querySelector(id).getAttribute("value");
    console.log(value);
  };

  return (
    <div className="productdisplay">
      <div className="display-left">
        <div className="display-img-list">
          <img
            id="image1"
            src={product.img4}
            alt=""
            onClick={() => changeImage("#image1")}
          />
          <img
            id="image2"
            src={product.img3}
            alt=""
            onClick={() => changeImage("#image2")}
          />
          <img
            id="image3"
            src={product.img2}
            alt=""
            onClick={() => changeImage("#image3")}
          />
          <img
            id="image4"
            src={product.img1}
            alt=""
            onClick={() => changeImage("#image4")}
          />
        </div>
        <div className="display-img">
          <img
            id="main-img"
            className="display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={starDull} alt="" />
          <p>(122)</p>
        </div>
        <div className="display-right-prices">
          <div className="display-right-old-price">${product.old_price}</div>
          <div className="display-right-new-price">${product.new_price}</div>
        </div>
        <div className="display-right-description">Description</div>
        <div className="display-right-size">
          <h1>Select Size</h1>
          <div className="display-right-sizes">
            <div
              value="S"
              id="small"
              tabIndex="1"
              onClick={() => getValue("#small")}
            >
              S
            </div>

            <div
              value="M"
              id="medium"
              tabIndex="2"
              onClick={() => getValue("#medium")}
            >
              M
            </div>
            <div
              value="L"
              id="large"
              tabIndex="3"
              onClick={() => getValue("#large")}
            >
              L
            </div>
            <div
              value="XL"
              id="xl"
              tabIndex="4"
              onClick={() => getValue("#xl")}
            >
              XL
            </div>
            <div
              value="XXL"
              id="xxl"
              tabIndex="5"
              onClick={() => getValue("#xxl")}
            >
              XXL
            </div>
          </div>
          <button
            onClick={(id) => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="display-right-tags">
            <span>Category: </span> Women, Kurti
          </p>
          <p className="display-right-tags">
            <span>Tags: </span> Traditional, Indian
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
