// pages/SearchPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import axios from "axios";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SearchList from "../components/ProductsDetails/SearchList";

const SearchPage = () => {
  const { searchKey } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(AppURL.SearchProduct(searchKey))
      .then((res) => setProductData(res.data))
      .catch((err) => console.error("Error:", err));
  }, [searchKey]);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <SearchList SearchKey={searchKey} ProductData={productData} />

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default SearchPage;
