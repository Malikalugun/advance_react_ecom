@extends('admin.admin_master')
@section('admin')
<div class="row g-4">
    <div class="col-md-12">
        <div class="card shadow-sm">
            <div class="card-body">
            <div class="headergraph">
                <h3>All Category Products</h3>
            </div>
            <table class="table product-table align-middle">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Category Image</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php($i = 1)
                    @foreach ($category as $item)
                         <tr>
                        <td>
{{$i++}}
                        </td>
                        <td>
                        <div class="d-flex align-items-center productflex">
                            <img src={{$item->category_image}} class="product-img" alt="History Book">

                        </div>
                        </td>
                        <td> {{$item->category_name}}</td>
                        
                        <td class="action-icons">
                       <a href="" > <i class="fas fa-pen"></i></a>
                        <a href=""><i class="fas fa-trash"></i> </a>
                        </td>
                    </tr>
                  
                    @endforeach
                   
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
@endsection