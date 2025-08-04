@extends('admin.admin_master')
@section('admin')

<div class="row">
  
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Edit Slider</h2>
                  <form method="post" action="{{route('slider.update')}}" enctype="multipart/form-data">
                     @csrf
                     <input type="hidden" name="id" value="{{$slider->id}}">
                     <div class="form-group">
                        <label for="formFile">Change Slider Image</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="file" id="image" name="slider_image"/>
                     </div>
                     <div class="mb-3">
                        <img id="showImage" src="{{asset($slider->slider_image) }}" alt="" style="width: 100px;height:100px;">
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Update Slider</button>
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
