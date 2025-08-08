<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ProductDetails;
use App\Models\ProductList;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ProductListController extends Controller
{
    public function ProductListByRemark(Request $request)
    {
        $remark = $request->remark;
        $productlist = ProductList::where('remark', $remark)->limit(8)->get();
        return $productlist;
    }
    public function ProductListByCategory(Request $request)
    {
        $category = $request->category;
        $productlist = ProductList::where('category', $category)->get();
        return $productlist;
    }
    public function ProductListBySubCategory(Request $request)
    {
        $category = $request->category;
        $subcategory = $request->subcategory;
        $productlist = ProductList::where('category', $category)->where('subcategory', $subcategory)->get();
        return $productlist;
    }
    public function ProductBySearch(Request $request)
    {
        $key = $request->key;
        $productlist = ProductList::where('title', 'LIKE', "%{$key}%")->orWhere('brand', 'LIKE', "%{$key}%")->get();
        return $productlist;
    }
    public function SimilarProduct(Request $request)
    {
        $subcategory = $request->subcategory;
        $productlist = ProductList::where('subcategory', $subcategory)->orderBy('id', 'desc')->limit(6)->get();
        return $productlist;
    } // End Method 
    // get all product
    public function GetAllProduct()
    {
        $product = ProductList::latest()->paginate(6);
        return view('backend.product.product_all', compact('product'));
    }
    public function AddProduct()
    {
        $category = Category::orderBy('category_name', 'ASC')->get();
        $subcategory = Subcategory::orderBy('subcategory_name')->get();
        return view('backend.product.product_add', compact('category', 'subcategory'));
    }
    public function StoreProduct(Request $request)
    {
        $request->validate([
            'product_code' => 'required',
        ], [
            'product_code.required' => 'Input Product Code'
        ]);
        $imageFile = $request->file('image');
        $name_gen = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
        $save_path = public_path('upload/product/' . $name_gen);
        $manager = new ImageManager(new Driver());
        $image = $manager->read($imageFile)
            ->resize(711, 960)
            ->save($save_path);
        $save_url = asset('http://127.0.0.1:8000/upload/product/' . $name_gen);
        // insert into product list table
        $product_id = ProductList::insertGetId([
            'title' => $request->title,
            'price' => $request->price,
            'special_price' => $request->special_price,
            'category' => $request->category,
            'subcategory' => $request->subcategory,
            'remark' => $request->remark,
            'brand' => $request->brand,
            'product_code' => $request->product_code,
            'image' => $save_url,
        ]);
        // insert product details table
        // image one 
        $imageFile1 = $request->file('image_one');
        $name_gen1 = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
        $save_path1 = public_path('upload/product_details/' . $name_gen1);
        $manager1 = new ImageManager(new Driver());
        $image1 = $manager1->read($imageFile1)
            ->resize(711, 960)
            ->save($save_path1);
        $save_url1 = asset('http://127.0.0.1:8000/upload/product_details/' . $name_gen1);
        // two
        $imageFile2 = $request->file('image_two');
        $name_gen2 = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
        $save_path2 = public_path('upload/product_details/' . $name_gen2);
        $manager2 = new ImageManager(new Driver());
        $image2 = $manager2->read($imageFile2)
            ->resize(711, 960)
            ->save($save_path2);
        $save_url2 = asset('http://127.0.0.1:8000/upload/product_details/' . $name_gen2);
        // three
        $imageFile3 = $request->file('image_three');
        $name_gen3 = hexdec(uniqid()) . '.' . $imageFile3->getClientOriginalExtension();
        $save_path3 = public_path('upload/product_details/' . $name_gen3);
        $manager3 = new ImageManager(new Driver());
        $image3 = $manager3->read($imageFile3)
            ->resize(711, 960)
            ->save($save_path3);
        $save_url3 = asset('http://127.0.0.1:8000/upload/product_details/' . $name_gen3);
        // four
        $imageFile4 = $request->file('image_four');
        $name_gen4 = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
        $save_path4 = public_path('upload/product_details/' . $name_gen4);
        $manager4 = new ImageManager(new Driver());
        $image4 = $manager4->read($imageFile4)
            ->resize(711, 960)
            ->save($save_path4);
        $save_url4 = asset('http://127.0.0.1:8000/upload/product_details/' . $name_gen4);
        ProductDetails::insertGetId([
            'product_id' => $product_id,
            'image_one' => $save_url1,
            'image_two' => $save_url2,
            'image_three' => $save_url3,
            'image_four' => $save_url4,
            'short_description' => $request->short_description,
            'color' => $request->color,
            'size' => $request->size,
            'long_description' => $request->long_description,

        ]);

        $notification = array(
            'message' => 'Product inserted successfully',
            'alert-type' => 'success'
        );
        return redirect()->route('all.product')->with($notification);
    }
}
