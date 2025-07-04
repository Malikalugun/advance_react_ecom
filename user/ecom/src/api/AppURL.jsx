class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getVisitor";
  static PostContact = this.BaseURL + "/postcontact";
  static AllSiteInfo = this.BaseURL + "/allsiteinfo";
  static AllCategoryDetails = this.BaseURL + "/allcategory";
  static ProductListByRemark(remark) {
    return this.BaseURL + "/productlistbyremark/" + remark;
  }
  static ProductListByCategory(category) {
    return this.BaseURL + "/productlistbycategory/" + category;
  }
  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + "/productlistbysubcategory/" + category + "/" + subcategory
    );
  }
  static AllSlider = this.BaseURL + "/allslider";
  // product details
  static ProductDetails(code) {
    return this.BaseURL + "/product-details/" + code;
  }
  static NotificationHistory = this.BaseURL + "/notification";

  static SearchProduct(searchkey) {
    return this.BaseURL + "/search/" + searchkey;
  }
  static UserLogin = this.BaseURL + "/login/";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForgetPassword = this.BaseURL + "/forgetpassword";
  static UserResetPassword = this.BaseURL + "/restpassword";
  static SimilarProduct(code) {
    return this.BaseURL + "/similar/" + code;
  }
}

export default AppURL;
