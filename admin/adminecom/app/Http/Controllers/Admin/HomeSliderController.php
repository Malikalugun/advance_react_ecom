<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeSlider;

class HomeSliderController extends Controller
{
    public function AllSlider()
    {
        $result = HomeSlider::all();
        return $result;
    }
}
