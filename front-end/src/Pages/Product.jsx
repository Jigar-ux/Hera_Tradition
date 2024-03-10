import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedItems from "../Components/RelatedItems/RelatedItems";
import Footer from "../Components/Footer/Footer";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedItems />
      <Footer />
    </div>
  );
};

export default Product;
