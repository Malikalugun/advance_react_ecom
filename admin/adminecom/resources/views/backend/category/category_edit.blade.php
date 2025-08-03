@extends('admin.admin_master')
@section('admin')

<div class="row">
  
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Edit Category</h2>
                  <form method="post" action="{{route('category.update')}}" enctype="multipart/form-data">
                     @csrf
                     <input type="hidden" name="id" value="{{$category->id}}">
                     <div class="form-group">
                        <label>Category Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="text"  name="category_name" value="{{$category->category_name}}"/>
                        @error('category_name')
                           <span class="text-danger">{{$message}}</span> 
                        @enderror
                     </div>
                   
                   
                     <div class="form-group">
                        <label for="formFile">Change Catgory Image</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="file" id="image" name="category_image"/>
                     </div>
                     <div class="mb-3">
                        <img id="showImage" src="{{asset($category->category_image) }}" alt="" style="width: 100px;height:100px;">
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Update Category</button>
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
