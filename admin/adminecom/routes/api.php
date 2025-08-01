<?php

use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\FavouriteController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\HomeSliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\ProductReviewController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// user login api start
Route::post('/login', [AuthController::class, 'Login']);
Route::post('/register', [AuthController::class, 'Register']);
Route::post('/forgetpassword', [ForgetController::class, 'ForgetPassword']);
Route::post('/restpassword', [ResetController::class, 'ResetPassword']);
Route::get('/user', [UserController::class, 'User'])->middleware('auth:api');
// user login api end
Route::get('/getVisitor', [VisitorController::class, 'GetVisitorDetails']);
Route::post('/postcontact', [ContactController::class, 'PostContactDetails']);
Route::get('/allsiteinfo', [SiteController::class, 'AllSiteInfo']);
Route::get('/allcategory', [CategoryController::class, 'AllCategory']);
Route::get('/productlistbyremark/{remark}', [ProductListController::class, 'ProductListByRemark']);
Route::get('/productlistbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}', [ProductListController::class, 'ProductListBySubCategory']);
Route::get('/allslider', [HomeSliderController::class, 'AllSlider']);
// product details
Route::get('/productdetails/{id}', [ProductDetailsController::class, 'ProductDetails']);
// notification start
Route::get('/notification', [NotificationController::class, 'NotificationHistory']);
// search route
Route::get('/search/{key}', [ProductListController::class, 'ProductBySearch']);
// similar product 
Route::get('/similar/{subcategory}', [ProductListController::class, 'SimilarProduct']);

// product cart 
Route::post('/addtocart', [ProductCartController::class, 'AddToCart']);
//  product count
Route::get('/cartcount/{product_code}', [ProductCartController::class, 'CartCount']);
// favourities 
Route::get('/favourites/{product_code}/{email}', [FavouriteController::class, 'AddFavourities']);
Route::get('/favouriteslist/{email}', [FavouriteController::class, 'FavouriteList']);
Route::get('/favouriteRemove/{product_code}/{email}', [FavouriteController::class, 'FavouriteRemove']);
// product cart list
Route::get('/CartList/{email}', [ProductCartController::class, 'CartList']);
// remove form cart
Route::get("/removeCart/{id}", [ProductCartController::class, 'RemoveCartList']);
Route::get("/cartitemplus/{id}/{quantity}/{total_price}", [ProductCartController::class, 'CartItemPlus']);
Route::get("/cartitemminus/{id}/{quantity}/{total_price}", [ProductCartController::class, 'CartItemMinus']);
// cart order route
Route::post('/cartorder', [ProductCartController::class, 'CartOrder']);
Route::get("/orderlistbyuser/{email}", [ProductCartController::class, 'OrderListByUser']);
// review list
Route::get('/reviewlist/{product_code}', [ProductReviewController::class, 'ReviewList']);
Route::post("/postreview", [ProductReviewController::class, 'PostReview']);
