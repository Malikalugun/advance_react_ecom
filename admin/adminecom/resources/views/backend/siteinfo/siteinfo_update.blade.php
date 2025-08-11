@extends('admin.admin_master')
@section('admin')

<div class="row">
   
   <div class="col-lg-12">
   <div class="right-personal-card">
      <div class="card shadow-sm change-password-form">
         <div class="card-body">
            <h2>User Site Info </h2>
            <form method="post" action="{{route('change.password.update')}}">
                @csrf
               
               <div class="form-group">
                  <label for="about">About Us</label>
                 <textarea id="summernote" name="about">{!!$siteinfo->about!!}</textarea>
                  
               </div>
               <div class="form-group">
                  <label for="refund">Refund</label>
              <textarea id="summernote1" name="about">{!!$siteinfo->refund!!}</textarea>
               </div>
                <div class="form-group">
                  <label for="refund">How to purches</label>
              <textarea id="summernote2" name="about">{!!$siteinfo->parchase_guide!!}</textarea>
               </div>
                <div class="form-group">
                  <label for="refund">Privacy Policy</label>
              <textarea id="summernote3" name="about">{!!$siteinfo->privacy!!}</textarea>
               </div>
                 <div class="form-group">
                  <label for="refund">Address</label>
              <textarea id="summernote4" name="about">{!!$siteinfo->address!!}</textarea>
               </div>
               {{--  --}}
                <div class="form-group">
                  <label for="ios_app_link">IOS App Link</label>
                  <input type="text"  name="ios_app_link" id="ios_app_link">
               </div>
                <div class="form-group">
                  <label for="facebook_link">Facebook  Link</label>
                  <input type="text"  name="facebook_link" id="facebook_link">
               </div>
                <div class="form-group">
                  <label for="twitter_link">Twitter Link</label>
                  <input type="text"  name="twitter_link" id="twitter_link">
               </div>
                <div class="form-group">
                  <label for="instagram_link">Instagram Link</label>
                  <input type="text"  name="instagram_link" id="instagram_link">
               </div>
                <div class="form-group">
                  <label for="copyright_text">Copy Right Text</label>
                  <input type="text"  name="copyright_text" id="copyright_text">
               </div>
               {{--  --}}
               <div class="form-actions">
                  <button type="submit" class="btn-success">Update Site Info</button>
                  <button type="button" class="btn-danger">Cancel</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</div>

@endsection
