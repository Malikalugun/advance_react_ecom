<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;



class CategoryController extends Controller
{
    public function AllCategory()
    {
        $categories = Category::all();
        $categoryDetailsArray = [];
        foreach ($categories as $value) {
            $subcategory = Subcategory::where("category_name", $value['category_name'])->get();
            $item = [
                'category_name' => $value['category_name'],
                'category_image' => $value['category_image'],
                'subcategory_name' => $subcategory
            ];
            array_push($categoryDetailsArray, $item);
        }
        return $categoryDetailsArray;
    }
    public function AllCategoryList()
    {
        $category = Category::latest()->get();
        return view('backend.category.category_view', compact('category'));
    }
    public function AddCategory()
    {
        return view('backend.category.categoryadd');
    }
    public function StoreCategory(Request $request)
    {
        $validate = $request->validate([
            'category_name' => 'required',

        ], [
            'category_name' => 'Input Category Name'
        ]);
        // $image = $request->file('category_image');
        // $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        // Image::make($image)->resize(128, 128)->save('uplade/category/' . $name_gen);
        // $save_url = 'http://127.0.0.1:8000/upload/category/' . $name_gen;
        $imageFile = $request->file('category_image');
        $name_gen = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
        $save_path = public_path('upload/category/' . $name_gen);
        $manager = new ImageManager(new Driver());
        $image = $manager->read($imageFile)
            ->resize(128, 128)
            ->save($save_path);
        $save_url = asset('http://127.0.0.1:8000/upload/category/' . $name_gen);

        Category::insert([
            'category_name' => $request->category_name,
            'category_image' => $save_url,
        ]);
        $notification = array(
            'message' => 'Category inserted successfully',
            'alert-type' => 'success'
        );
        return redirect()->route('all.category')->with($notification);
    }
    public function EditCategory($id)
    {
        $category = Category::findOrFail($id);
        return view('backend.category.category_edit', compact('category'));
    }
    public function UpdateCategory(Request $request)
    {
        $category_id = $request->id;
        if ($request->file('category_image')) {
            $imageFile = $request->file('category_image');
            $name_gen = hexdec(uniqid()) . '.' . $imageFile->getClientOriginalExtension();
            $save_path = public_path('upload/category/' . $name_gen);
            $manager = new ImageManager(new Driver());
            $image = $manager->read($imageFile)
                ->resize(128, 128)
                ->save($save_path);
            $save_url = asset('http://127.0.0.1:8000/upload/category/' . $name_gen);

            Category::findOrFail($category_id)->update([
                'category_name' => $request->category_name,
                'category_image' => $save_url,
            ]);

            $notification = array(
                'message' => 'Category update with image successfully',
                'alert-type' => 'success'
            );
            return redirect()->route('all.category')->with($notification);
        } else {
            Category::findOrFail($category_id)->update([
                'category_name' => $request->category_name,

            ]);
            $notification = array(
                'message' => 'Category update without image successfully',
                'alert-type' => 'success'
            );
            return redirect()->route('all.category')->with($notification);
        }
    }
    public function DeleteCategory($id)
    {
        $category = Category::findOrFail($id)->delete();

        $notification = array(
            'message' => 'Category deleted successfully',
            'alert-type' => 'error'
        );
        return redirect()->back()->with($notification);
    }
}
