<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function AdminLogout()
    {
        Auth::logout();
        return Redirect()->route('login');
    }
    public function UserProfile()
    {
        $adminData = User::find(1);
        return view('backend.admin.admin_profile', compact('adminData'));
    }
    public function UserProfileStore(Request $request)
    {
        $data = User::find(1);
        $data->name = $request->name;
        $data->email = $request->email;

        if ($request->file('profile_photo_path')) {
            // Store current image path for deletion
            $oldImage = public_path('upload/admin_image/' . $data->profile_photo_path);

            // Delete old image if it exists
            if (file_exists($oldImage)) {
                @unlink($oldImage);
            }

            // Handle new image upload
            $image = $request->file('profile_photo_path');
            $filename = date('YmdHi') . $image->getClientOriginalName();
            $image->move(public_path('upload/admin_image'), $filename);

            $data->profile_photo_path = $filename;
        }

        $data->save();
        $notification = array(
            'message' => 'User Profile Updated Successfully',
            'alert-type' => 'success'
        );

        return redirect()->route('user.profile')->with($notification);
    }
    public function ChangePassword()
    {
        return view('backend.admin.change_password');
    }
    public function ChangePasswordUpdate(Request $request)
    {
        $validateData = $request->validate([
            'current_password' => 'required',
            'password' => 'required|confirmed'
        ]);
        $hashedPassword = User::find(1)->password;
        if (Hash::check($request->current_password, $hashedPassword)) {
            $user = User::find(1);
            $user->password = Hash::make($request->password);
            $user->save();
            Auth::logout();
            return Redirect()->route('admin.logout');
        } else {
            return redirect()->back();
        }
    }
}
