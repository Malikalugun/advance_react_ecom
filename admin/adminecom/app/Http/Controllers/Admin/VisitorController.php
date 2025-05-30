<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vistor;

class VisitorController extends Controller
{
    function GetVisitorDetails()
    {
        $ip_address = $_SERVER['REMOTE_ADDR'];
        date_default_timezone_set("Asia/Kolkata");
        $visit_time = date('h:i:sa');
        $visit_date = date('d-m-y');
        $result = Vistor::insert(
            [
                'ip_address' => $ip_address,
                'visit_time' => $visit_time,
                'visit_date' => $visit_date,
            ]
        );
        return $result;
    }
}
