@extends('admin.admin_master')
@section('admin')

<div class="row">
   <div class="col-lg-4">
      <div class="card shadow-sm personal-info-card">
         <div class="card-body">
            <div class="profile-card">
               <div class="profile-left">
                  <div class="avatar-wrapper d-flex justify-center">
                    <img src="{{ !empty($adminData->profile_photo_path) ? url('upload/admin_image/'.$adminData->profile_photo_path) : url('upload/avatar-7.jpg') }}" class="avatar" alt="Rosa Dodson" width="120">
                     <a href="#"> <span class="badge"><i class="fa-solid fa-camera"></i></span></a>
                  </div>
                  <div class="profile-info">
                     <h4>{{$adminData->name}}</h4>
                     <p class="subtitle">{{$adminData->email}}</p>
                  </div>
               </div>
            </div>
            <div class="social-stats">
               <div class="social">
                  <div class="icon facebook"><i class="fab fa-facebook-f"></i></div>
                  <div>
                     <h5>25k</h5>
                     <p>Facebook Followers</p>
                  </div>
               </div>
               <div class="social">
                  <div class="icon twitter"><i class="fab fa-twitter"></i></div>
                  <div>
                     <h5>58k</h5>
                     <p>Twitter Followers</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Personal Information</h2>
                  <form method="post" action="{{route('user.profile.store')}}" enctype="multipart/form-data">
                     @csrf
                     <div class="form-group">
                        <label>Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="text" value="{{$adminData->name}}"  name="name"/>
                     </div>
                     <div class="form-group">
                        <label>Email</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="text" value="{{$adminData->email}}" name="email"/>
                     </div>
                     <div class="form-group">
                        <label for="formFile">Change Profile</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="file" id="image" name="profile_photo_path"/>
                     </div>
                     <div class="mb-3">
                        <img id="showImage" src="{{ !empty($adminData->profile_photo_path) ? url('upload/admin_image/'.$adminData->profile_photo_path) : url('upload/avatar-7.jpg') }}" alt="" style="width: 100px;height:100px;">
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Save Changes</button>
                        <button type="button" class="btn-cancel">Cancel</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  <script type="text/javascript">
    $(document).ready(function () {
      $('#image').change(function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#showImage').attr('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      });
    });
  </script>
@endsection
