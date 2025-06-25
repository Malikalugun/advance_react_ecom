<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgetMail;
use App\Http\Requests\ForgetRequest;
use Exception;
use App\Http\Controllers\Controller;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request)
    {
        $email = $request->email;
        if (User::where('email', $request->email)->doesntExist()) {
            return response([
                'message' => 'Email Invalid'
            ], 400);
        }
        $token = rand(10, 100000);
        try {
            // Store token in password_resets table
            DB::table('password_reset_tokens')->updateOrInsert(
                ['email' => $email],
                ['token' => $token, 'created_at' => now()]
            );

            // Send mail
            Mail::to($email)->send(new ForgetMail($token));

            return response([
                'message' => 'Reset password mail has been sent to your email.'
            ], 200);
        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
