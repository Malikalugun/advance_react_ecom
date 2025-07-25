<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ResetRequest;

class ResetController extends Controller
{
    public function ResetPassword(ResetRequest $request)
    {
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);
        $emailcheck = DB::table('password_reset_tokens')->where('email', $email)->first();
        $pincheck = DB::table('password_reset_tokens')->where('token', $token)->first();
        if (!$emailcheck) {
            return response([
                'message' => 'Email Not Found'
            ], 401);
        }
        if (!$pincheck) {
            return response([
                'message' => 'Pin Code Invalid'
            ], 401);
        }
        DB::table('users')->where('email', $email)->update(['password' => $password]);
        DB::table('password_reset_tokens')->where('email', $email)->delete();
        return response([
            'message' => 'Password Changes Successfully'
        ]);
    }
}
