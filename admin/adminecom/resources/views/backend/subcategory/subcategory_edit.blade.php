@extends('admin.admin_master')
@section('admin')

<div class="row">
  
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Edit Sub Category</h2>
                  <form method="post" action="{{route('subcategory.update')}}" enctype="multipart/form-data">
                     @csrf
                     <input type="hidden" name="id" value="{{$subcategory->id}}">
                      <div class="form-group">
                        <label>Category Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <select name="category_name" id="category_name" aria-label="Default select example">
                            <option selected="" disabled>Choose Category Name</option>
                            @foreach ($category as $item)
                                <option value="{{$item->category_name}}" {{$item->category_name == $subcategory->category_name ? 'selected' : ''}}>{{$item->category_name}}</option>
                            @endforeach
                            
                        </select>
                    
                        @error('category_name')
                           <span class="text-danger">{{$message}}</span> 
                        @enderror
                     </div>
               
                     <div class="form-group">
                        <label>Sub Category Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="text"  name="subcategory_name" value="{{$subcategory->subcategory_name}}"/>
                        @error('subcategory_name')
                           <span class="text-danger">{{$message}}</span> 
                        @enderror
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
