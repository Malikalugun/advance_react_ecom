<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function PostContactDetails(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');
        date_default_timezone_set("Asia/Kolkata");
        $contact_time = date('h:i:sa');
        $contact_date = date('d-m-y');
        $result = Contact::insert([
            'name' => $name,
            'email' => $email,
            'message' => $message,
            'contact_time' => $contact_time,
            'contact_date' => $contact_date,

        ]);
        return $result;
    }
    public function ContactMessage()
    {
        $message = Contact::latest()->paginate(10);
        return view('backend.contact.contact_all', compact('message'));
    }
    public function ConatctDelete($id)
    {
        Contact::findOrFail($id)->delete();
        $notification = array(
            'message' => 'Data Deleted successfully',
            'alert-type' => 'errro'
        );
        return redirect()->back()->with($notification);
    }
}
