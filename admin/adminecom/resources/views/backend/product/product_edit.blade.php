@extends('admin.admin_master')
@section('admin')
<div class="row">
   <div class="col-lg-12">
      <div class="right-personal-card">
         <div class="card shadow-sm form-container">
            <div class="card-body">
               <div class="form-container">
                  <h2>Edit Product</h2>
                  <form method="post" action="{{route('product.update', $product->id)}}" enctype="multipart/form-data">
                     @csrf
                  
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Title</label>
                              <input type="text"  name="title" value="{{$product->title}}"/>
                              @error('title')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Code</label>
                              <input type="text"  name="product_code" value="{{$product->product_code}}"/>
                              @error('product_code')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Price</label>
                              <input type="text"  name="price" value="{{$product->price}}"/>
                              @error('price')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Special Price</label>
                              <input type="text"  name="special_price" value="{{$product->special_price}}"/>
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
                                 <option value="{{$item->category_name}}" {{$item->category_name == $product->category ? 'selected' : ''}}>{{$item->category_name}}</option>
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
                                 <option value="{{$item->subcategory_name}}" {{$item->subcategory_name == $product->subcategory ? 'selected' : ''}}>{{$item->subcategory_name}}</option>
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
                                 <option selected="" disabled {{ $product->brand == '' ? 'selected' : '' }}>Choose Brand Name</option>
                                  <option value="Apple Tony" {{ $product->brand == 'Apple Tony' ? 'selected' : '' }}>Apple Tony</option>
    <option value="Tony" {{ $product->brand == 'Tony' ? 'selected' : '' }}>Tony</option>
    <option value="Sony" {{ $product->brand == 'Sony' ? 'selected' : '' }}>Sony</option>
    <option value="Oppo" {{ $product->brand == 'Oppo' ? 'selected' : '' }}>Oppo</option>
                              </select>
                              @error('brand')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
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
                              <input class="form-check-input" type="checkbox" id="remarkFeatured" name="remark" value="Featured" {{$product->remark == 'Featured' ? 'checked' : ''}}>
                              <label class="form-check-label" for="remarkFeatured">Featured</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="remarkNew" name="remark" value="New" {{$product->remark == 'New' ? 'checked' : ''}}>
                              <label class="form-check-label" for="remarkNew">New</label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="remarkCollection" name="remark" value="Collection" {{$product->remark == 'Collection' ? 'checked' : ''}}>
                              <label class="form-check-label" for="remarkCollection">Collection</label>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label for="formFile">Product Tumbnail Image</label>
                              <input type="file" id="image" name="image"/>
                           </div>
                           <div class="mb-3">
                              <img id="showImage" src="{{ !empty($product->image) ? asset($product->image) : asset('upload/avatar-7.jpg') }}" alt="" style="width: 100px;height:100px;">
                           </div>
                        </div>
                         @foreach ($product_details as $item)
                        <div class="col-lg-6">
                           {{-- multi image start --}}
                           <div class="form-group">
                              <label for="formFile">Image One</label>
                              <input type="file" name="image_one" value="{{ $item->image_one }}">
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 2 --}}
                           <div class="form-group">
                              <label for="formFile">Image Two</label>
                              <input type="file" name="image_two" value="{{ $item->image_two }}"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 3 --}}
                           <div class="form-group">
                              <label for="formFile">Image Three</label>
                              <input type="file" name="image_three" value="{{ $item->image_three }}"/>
                           </div>
                        </div>
                        <div class="col-lg-6">
                           {{-- 4 --}}
                           <div class="form-group">
                              <label for="formFile">Image Four</label>
                              <input type="file" name="image_four" value="{{ $item->image_four }}"/>
                           </div>
                        </div>
                       
                        <div class="col-lg-12">
                           <div class="form-group">
                              <label>Product Short Description</label>
                              <textarea type="text"  name="short_description" rows="2">{{$item->short_description}}</textarea>
                              @error('short_description')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Color</label>
                              <input type="text" name="color" class="form-control" data-role="tagsinput" value="{{$item->color}}">
                              @error('color')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-6">
                           <div class="form-group">
                              <label>Product Size</label>
                              <input type="text" name="size" class="form-control" data-role="tagsinput" value="{{$item->size}}">
                              @error('size')
                              <span class="text-danger">{{$message}}</span> 
                              @enderror
                           </div>
                        </div>
                        <div class="col-lg-12">
                           <div class="form-group">
                              <label for="long_description">Long Description</label>
                              <textarea id="summernote" name="long_description">{{$item->long_description}}</textarea>
                              @error('long_description')
                              <span class="text-danger">{{ $message }}</span>
                              @enderror
                           </div>
                        </div>
                        @endforeach
                     </div>
                     <div class="form-actions">
                        <button type="submit" class="btn-submit">Update Product</button>
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