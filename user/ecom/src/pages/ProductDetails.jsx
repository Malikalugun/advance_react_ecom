import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppURL from "../api/AppURL";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductsDetails from "../components/ProductsDetails/ProductsDetails";
import SilderLoading from "../components/common/Placeholder/SilderLoading";

const ProductDetails = () => {
  const { code } = useParams();
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetails(code))
      .then((res) => {
        setProductData(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [code]);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>

      {loading ? (
        <SilderLoading />
      ) : (
        <>
          <ProductsDetails data={ProductData} />
        </>
      )}

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default ProductDetails;
