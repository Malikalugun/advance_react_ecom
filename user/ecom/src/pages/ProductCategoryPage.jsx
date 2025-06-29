import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Category from "../components/ProductsDetails/Category";
import axios from "axios";

function ProductCategoryPage() {
  const { category } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.ProductListByCategory(category))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Category Category={category} ProductData={productData} />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default ProductCategoryPage;
