<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductReview;
use Illuminate\Http\Request;

class ProductReviewController extends Controller
{
    public function ReviewList(Request $request)
    {
        $product_code = $request->product_code;
        $result = ProductReview::where('product_code', $product_code)->orderBy('id', 'desc')->limit(4)->get();
        return $result;
    }
    public function PostReview(Request $request)
    {
        $product_name = $request->input('product_name');
        $product_code = $request->input('product_code');
        $reviewer_name = $request->input('reviewer_name');
        $reviewer_photo = $request->input('reviewer_photo');
        $reviewer_rating = $request->input('reviewer_rating');
        $reviewer_comment = $request->input('reviewer_comment');
        $result = ProductReview::insert([
            'product_name' => $product_name,
            'product_code' => $product_code,
            'reviewer_name' => $reviewer_name,
            'reviewer_photo' => $reviewer_photo,
            'reviewer_rating' => $reviewer_rating,
            'reviewer_comment' => $reviewer_comment,


        ]);
        return $result;
    }
    public function AllReview()
    {
        $review = ProductReview::latest()->paginate(10);
        return view('backend.review.review_all', compact('review'));
    }
    public function ReviewDelete($id)
    {
        ProductReview::findOrFail($id)->delete();
        $notification = array(
            'message' => 'Data Deleted successfully',
            'alert-type' => 'errro'
        );
        return redirect()->back()->with($notification);
    }
}
