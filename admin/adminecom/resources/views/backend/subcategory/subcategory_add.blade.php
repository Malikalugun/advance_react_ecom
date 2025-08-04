@extends('admin.admin_master')
@section('admin')

<div class="row">
  
   <div class="col-lg-8">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Add Sub Category</h2>
                  <form method="post" action="{{route('subcategory.store')}}">
                     @csrf
                      <div class="form-group">
                        <label>Category Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <select name="category_name" id="category_name" aria-label="Default select example">
                            <option selected="" disabled>Choose Category Name</option>
                            @foreach ($category as $item)
                                <option value="{{$item->category_name}}">{{$item->category_name}}</option>
                            @endforeach
                            
                        </select>
                    
                        @error('category_name')
                           <span class="text-danger">{{$message}}</span> 
                        @enderror
                     </div>
                     <div class="form-group">
                        <label>Sub Category Name</label>
                        <i class="fa-solid fa-user form-icon"></i>
                        <input type="text"  name="subcategory_name"/>
                        @error('subcategory_name')
                           <span class="text-danger">{{$message}}</span> 
                        @enderror
                     </div>
                    
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Add Sub Category</button>
                        <button type="button" class="btn-cancel">Cancel</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
@endsection
