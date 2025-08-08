@extends('admin.admin_master')
@section('admin')
<div class="row g-4">
    <div class="col-md-12">
        <div class="card shadow-sm">
            <div class="card-body">
            <div class="headergraph">
                <h3>All Products</h3>
            </div>
            <table class="table product-table align-middle">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Product Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php($i = 1)
                    @foreach ($product as $item)
                         <tr>
                        <td>
                        {{$i++}}
                        </td>
                        <td>
                        <div class="d-flex align-items-center productflex">
                            <img src={{$item->image}} class="product-img" alt="History Book">

                        </div>
                        </td>
                        <td> {{$item->title}}</td>
                        <td>{{$item->product_code}}</td>
                        <td>{{$item->category}}</td>
                        <td class="action-icons">
                       <a href="{{route('product.edit',$item->id)}}" > <i class="fas fa-pen"></i></a>
                        <a href="{{route('category.delete',$item->id)}}" id="delete"><i class="fas fa-trash"></i> </a>
                        </td>
                    </tr>
                  
                    @endforeach
                   
                </tbody>
            </table>
            </div>
            
        </div>
        <div class="painatepage">
{{$product->links('vendor.pagination.custom')}}

        </div>
    </div>
    
</div>
@endsection
