<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CartOrder;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductCartController extends Controller
{
    public function AddToCart(Request $request)
    {
        $email = $request->input('email');
        $size = $request->input('size');
        $color = $request->input('color');
        $quantity = $request->input('quantity');
        $product_code = $request->input('product_code');
        $productDetails = ProductList::where('product_code', $product_code)->get();
        $price = $productDetails[0]['price'];
        $special_price = $productDetails[0]['special_price'];
        if ($special_price == "na") {
            $total_price = $price * $quantity;
            $unit_price = $price;
        } else {
            $total_price = $special_price * $quantity;
            $unit_price = $special_price;
        }
        $result = ProductCart::insert([
            'email' => $email,
            'image' => $productDetails[0]['image'],
            'product_name' => $productDetails[0]['title'],
            'product_code' => $productDetails[0]['product_code'],
            'size' => "Size" . $size,
            'color' => "Color:" . $color,
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price,
        ]);
        return $result;
    }
    public function CartCount(Request $request)
    {
        $product_code = $request->product_code;
        $result = ProductCart::count();
        return $result;
    } // End Method 


    public function CartList(Request $request)
    {
        $email = $request->email;
        $result = ProductCart::where('email', $email)->get();
        return $result;
    }
    public function RemoveCartList(Request $request)
    {
        $id = $request->id;
        $result = ProductCart::where("id", $id)->delete();
        return $result;
    }
    public function CartItemPlus(Request $request)
    {
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->total_price;
        $newQuantity = $quantity + 1;
        $totalPrice = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $totalPrice]);
        return $result;
    }
    public function CartItemMinus(Request $request)
    {
        $id = $request->id;
        $quantity = $request->quantity;
        $price = $request->total_price;
        $newQuantity = $quantity - 1;
        $total_price = $newQuantity * $price;
        $result = ProductCart::where('id', $id)->update(['quantity' => $newQuantity, 'total_price' => $total_price]);
        return $result;
    }
    public function CartOrder(Request $request)
    {
        $city = $request->input('city');
        $payment_method = $request->input('payment_method');
        $yourname = $request->input('name');
        $email = $request->input('email');
        $delivery_address = $request->input('delivery_address');
        $invoice_no = $request->input('invoice_no');
        $delivery_charge = $request->input('delivery_charge');
        date_default_timezone_set("Asia/Dhaka");
        $request_time = date("h:i:sa");
        $request_date = date("d-m-y");
        $cartInsertDeleteResult = 0;
        $CartList = ProductCart::where('email', $email)->get();

        if ($CartList->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        foreach ($CartList as $cartListItem) {

            $resultInsert = CartOrder::insert([
                'invoice_no' => "Easy" . $invoice_no,
                'product_name' => $cartListItem['product_name'],
                'product_code' => $cartListItem['product_code'],
                'size' => $cartListItem['size'],
                'color' => $cartListItem['color'],
                'quantity' => $cartListItem['quantity'],
                'unit_price' => $cartListItem['unit_price'],
                'total_price' => $cartListItem['total_price'],
                'email' => $cartListItem['email'],
                'name' => $yourname,
                'payment_method' => $payment_method,
                'delivery_address' => $delivery_address,
                'city' => $city,
                'delivery_charge' => $delivery_charge,
                'order_date' => $request_date,
                'order_time' => $request_time,
                'order_status' => "Pending",
            ]);
            if ($resultInsert == 1) {
                $resultDelete = ProductCart::where('id', $cartListItem['id'])->delete();
                if ($resultDelete == 1) {
                    $cartInsertDeleteResult = 1;
                } else {
                    $cartInsertDeleteResult = 0;
                }
            }
        }
        return $cartInsertDeleteResult;
    }
    public function OrderListByUser(Request $request)
    {
        $email = $request->email;
        $result = CartOrder::where('email', $email)->orderBy('id', 'DESC')->get();
        return $result;
    }
}
