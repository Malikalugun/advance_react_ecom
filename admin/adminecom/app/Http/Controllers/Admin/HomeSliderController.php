<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeSlider;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class HomeSliderController extends Controller
{
    public function AllSlider()
    {
        $result = HomeSlider::all();
        return $result;
    }
    public function AllSliderView()
    {
        $slider = HomeSlider::latest()->get();
        return view('backend.slider.slider_view', compact('slider'));
    }
    public function AddSlider()
    {
        return view('backend.slider.slider_add');
    }
    public function StoreSlider(Request $request)
    {
        $request->validate([
            'slider_image' => 'required',
        ], [
            'slider_image.required' => 'Upload Slider Image'
        ]);
        $image = $request->file('slider_image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        $save_path = public_path('upload/slider/' . $name_gen);
        $manager = new ImageManager(new Driver());
        $image = $manager->read($image)
            ->resize(1024, 379)
            ->save($save_path);
        $save_url = asset('http://127.0.0.1:8000/upload/slider/' . $name_gen);
        HomeSlider::insert([

            'slider_image' => $save_url,
        ]);
        $notification = array(
            'message' => 'Slider Image inserted successfully',
            'alert-type' => 'success'
        );
        return redirect()->route('all.slider')->with($notification);
    }
    public function EditSlider($id)
    {
        $slider = HomeSlider::findOrFail($id);
        return view('backend.slider.slider_edit', compact('slider'));
    }
    public function UpdateSlider(Request $request)
    {
        $slider_id = $request->id;
        $image = $request->file('slider_image');
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        $save_path = public_path('upload/slider/' . $name_gen);
        $manager = new ImageManager(new Driver());
        $image = $manager->read($image)
            ->resize(1024, 379)
            ->save($save_path);
        $save_url = asset('http://127.0.0.1:8000/upload/slider/' . $name_gen);
        HomeSlider::findOrFail($slider_id)->update([
            'slider_image' => $save_url,
        ]);
        $notification = array(
            'message' => 'Slider Image updated successfully',
            'alert-type' => 'success'
        );
        return redirect()->route('all.slider')->with($notification);
    }
    public function DeleteSlider($id)
    {
        HomeSlider::findOrFail($id)->delete();
        $notification = array(
            'message' => 'Slider Image Deleted successfully',
            'alert-type' => 'error'
        );
        return redirect()->back()->with($notification);
    }
}
