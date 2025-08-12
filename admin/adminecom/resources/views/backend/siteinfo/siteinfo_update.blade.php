@extends('admin.admin_master')
@section('admin')

<div class="row">
   
   <div class="col-lg-12">
   <div class="right-personal-card">
      <div class="card shadow-sm change-password-form">
         <div class="card-body">
            <h2>User Site Info </h2>
            <form method="post" action="{{route('siteinfo.update')}}">
                @csrf
               <input type="hidden" name="id" value="{{$siteinfo->id}}">
               <div class="form-group">
                  <label for="about">About Us</label>
                 <textarea id="summernote" name="about">{!!$siteinfo->about!!}</textarea>
                  
               </div>
               <div class="form-group">
                  <label for="refund">Refund</label>
              <textarea id="summernote1" name="refund">{!!$siteinfo->refund!!}</textarea>
               </div>
                <div class="form-group">
                  <label for="parchase_guide">How to purches</label>
              <textarea id="summernote2" name="parchase_guide">{!!$siteinfo->parchase_guide!!}</textarea>
               </div>
                <div class="form-group">
                  <label for="privacy">Privacy Policy</label>
              <textarea id="summernote3" name="privacy">{!!$siteinfo->privacy!!}</textarea>
               </div>
                 <div class="form-group">
                  <label for="address">Address</label>
              <textarea id="summernote4" name="address">{!!$siteinfo->address!!}</textarea>
               </div>
               {{--  --}}
               <div class="form-group">
                  <label for="android_app_link">Android App Link</label>
                  <input type="text"  name="android_app_link" id="android_app_link" value="{{$siteinfo->android_app_link}}">
               </div>
                <div class="form-group">
                  <label for="ios_applink">IOS App Link</label>
                  <input type="text"  name="ios_applink" id="ios_applink" value="{{$siteinfo->ios_applink}}">
               </div>
                <div class="form-group">
                  <label for="facebook_link">Facebook  Link</label>
                  <input type="text"  name="facebook_link" id="facebook_link" value="{{$siteinfo->facebook_link}}">
               </div>
                <div class="form-group">
                  <label for="twitter_link">Twitter Link</label>
                  <input type="text"  name="twitter_link" id="twitter_link" value="{{$siteinfo->twitter_link}}">
               </div>
                <div class="form-group">
                  <label for="instagram_link">Instagram Link</label>
                  <input type="text"  name="instagram_link" id="instagram_link" value="{{$siteinfo->instagram_link}}">
               </div>
                <div class="form-group">
                  <label for="copyright_text">Copy Right Text</label>
                  <input type="text"  name="copyright_text" id="copyright_text" value="{{$siteinfo->copyright_text}}">
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
