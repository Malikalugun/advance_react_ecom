<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteInfo;

class SiteController extends Controller
{
    public function AllSiteInfo()
    {
        $result = SiteInfo::get();
        return $result;
    }
}
