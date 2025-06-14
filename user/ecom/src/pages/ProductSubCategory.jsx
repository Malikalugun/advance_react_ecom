import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import SubCategory from "../components/ProductsDetails/SubCategory";
import axios from "axios";

function ProductSubCategory() {
  const { category, subcategory: subCategoryName } = useParams();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.ProductListBySubCategory(category, subCategoryName))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category, subCategoryName]);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <SubCategory
        Category={category}
        SubCategory={subCategoryName}
        ProductData={productData}
      />

      <div className="Desktop">
        <FooterDesktop />
      </div>

      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
}

export default ProductSubCategory;
