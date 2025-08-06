@extends('admin.admin_master')
@section('admin')
<div class="row">
   <div class="col-lg-12">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Add Product</h2>
                  <form method="post" action="{{route('category.store')}}" enctype="multipart/form-data">
                     @csrf
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Title</label>
                              <input type="text"  name="title"/>
                              @error('title')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Code</label>
                              <input type="text"  name="product_code"/>
                              @error('product_code')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <label>Long Description</label>
                              <div class="editorcontainer">
                                 <!-- Create the toolbar container -->
                                 <div id="toolbar">
                                    <select class="ql-header">
                                       <option value="1"></option>
                                       <option value="2"></option>
                                       <option selected></option>
                                    </select>
                                    <button class="ql-bold"></button>
                                    <button class="ql-italic"></button>
                                    <button class="ql-underline"></button>
                                    <button class="ql-link"></button>
                                    <button class="ql-list" value="ordered"></button>
                                    <button class="ql-list" value="bullet"></button>
                                    <button class="ql-clean"></button>
                                 </div>
                                 <!-- Create the editor container -->
                                 <div id="editor">
                                    <p>Hello World!<br><strong>Some initial bold text</strong></p>
                                 </div>
                              </div>
                              {{-- 
                              <textarea type="text"  name="long_description" rows="3"></textarea>
                              --}}
                              @error('long_description')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <label>Product Short Description</label>
                              <textarea type="text"  name="short_description" rows="2"></textarea>
                              @error('short_description')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Price</label>
                              <input type="text"  name="price"/>
                              @error('price')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Special Price</label>
                              <input type="text"  name="special_price"/>
                              @error('special_price')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Category</label>
                              <i class="fa-solid fa-user form-icon"></i>
                              <select name="category" id="category" aria-label="Default select example">
                                 <option selected="" disabled>Choose Category</option>
                                 @foreach ($category as $item)
                                 <option value="{{$item->category}}">{{$item->category}}</option>
                                 @endforeach
                              </select>
                              @error('category')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label> Product Sub Category</label>
                              <i class="fa-solid fa-user form-icon"></i>
                              <select name="subcategory" id="subcategory" aria-label="Default select example">
                                 <option selected="" disabled>Choose Sub Category Name</option>
                                 @foreach ($subcategory as $item)
                                 <option value="{{$item->subcategory}}">{{$item->subcategory}}</option>
                                 @endforeach
                              </select>
                              @error('subcategory')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Brand</label>
                              <i class="fa-solid fa-user form-icon"></i>
                              <select name="brand" id="brand" aria-label="Default select example">
                                 <option selected="" disabled>Choose Brand Name</option>
                                 <option value="Apple Tony">Apple Tony</option>
                                 <option value="Tony">Tony</option>
                                 <option value="Sony">Sony</option>
                                 <option value="Oppo">Oppo</option>
                              </select>
                              @error('brand')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                           <div class="form-group">
                              <label>Color</label>
                              <input id="colorTags" placeholder="Type color name or hex and hit Enter">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Remark</label>
                              <!-- Optional text input for custom remark -->
                              <input type="text" name="remark_text" class="form-control" placeholder="Enter remark (optional)">
                              @error('remark')
                              <span class="text-danger">{{ $message }}</span>
                              @enderror
                           </div>
                           <!-- Checkbox group -->
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="remarkFeatured" name="remark[]" value="Featured">
                              <label class="form-check-label" for="remarkFeatured">Featured</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="remarkNew" name="remark[]" value="New">
                              <label class="form-check-label" for="remarkNew">New</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="remarkCollection" name="remark[]" value="Collection">
                              <label class="form-check-label" for="remarkCollection">Collection</label>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Size</label>
                              <input type="text"  name="product_size" value="S,M,L,XL"/>
                              @error('product_size')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="formFile">Product Tumbnail Image</label>
                              <input type="file" id="image" name="image"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- multi image start --}}
                           <div class="form-group">
                              <label for="formFile">Image One</label>
                              <input type="file" name="image_one"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 2 --}}
                           <div class="form-group">
                              <label for="formFile">Image One</label>
                              <input type="file" name="image_two"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 3 --}}
                           <div class="form-group">
                              <label for="formFile">Image One</label>
                              <input type="file" name="image_three"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 4 --}}
                           <div class="form-group">
                              <label for="formFile">Image One</label>
                              <input type="file" name="image_four"/>
                           </div>
                        </div>
                     </div>
                     {{-- multi image end --}}
                     <div class="mb-3">
                        <img id="showImage" src="{{url('upload/avatar-7.jpg') }}" alt="" style="width: 100px;height:100px;">
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Add Category</button>
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