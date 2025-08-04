@extends('admin.admin_master')
@section('admin')

<div class="row">
  
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Add Slider</h2>
                  <form method="post" action="{{route('slider.store')}}" enctype="multipart/form-data">
                     @csrf
                    
                   
                   
                     <div class="form-group">
                        <label for="formFile">Slider Image</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="file" id="image" name="slider_image"/>
                        @error('slider_image')
                            <span class="text-danger">{{message}}</span>
                        @enderror
                     </div>
                     <div class="mb-3">
                        <img id="showImage" src="{{url('upload/avatar-7.jpg') }}" alt="" style="width: 100px;height:100px;">
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Add Slider</button>
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
