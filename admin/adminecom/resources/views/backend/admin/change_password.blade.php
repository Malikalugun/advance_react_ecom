@extends('admin.admin_master')
@section('admin')

<div class="row">
   
   <div class="col-lg-12">
   <div class="right-personal-card">
      <div class="card shadow-sm change-password-form">
         <div class="card-body">
            <h2>User Change Password</h2>
            <form method="post" action="{{route('change.password.update')}}">
                @csrf
                @foreach ($errors->all() as $error)
                    <p class="text-danger">{{$error}}</p>
                @endforeach
               <div class="form-group">
                  <label for="current_password">Current Password</label>
                  <input type="password" placeholder="Password" name="current_password" id="current_password">
                  
               </div>
               <div class="form-group">
                  <label for="password">New Password</label>
                  <input type="password" placeholder="New Password" name="password" id="password">
               </div>
               <div class="form-group">
                  <label for="password_confirmation">Confirm Password</label>
                  <input type="password" placeholder="Re-Password" name="password_confirmation" id="password_confirmation">
               </div>
               <div class="form-actions">
                  <button type="submit" class="btn-success">Change Password</button>
                  <button type="button" class="btn-danger">Cancel</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</div>

@endsection
