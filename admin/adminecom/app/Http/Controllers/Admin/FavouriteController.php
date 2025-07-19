<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Faourites;
use App\Models\ProductList;

class FavouriteController extends Controller
{
    public function AddFavourities(Request $request)
    {
        $product_code = $request->product_code;
        $email = $request->email;
        $productDetails = ProductList::where('product_code', $product_code)->get();
        $result = Faourites::insert([

            'product_name' => $productDetails[0]['title'],
            'image' => $productDetails[0]['image'],
            'product_code' => $product_code,
            'email' => $email,

        ]);
        return $result;
    }
    public function FavouriteList(Request $request)
    {
        $email = $request->email;
        $result = Faourites::where('email', $email)->get();
        return $result;
    }
}
