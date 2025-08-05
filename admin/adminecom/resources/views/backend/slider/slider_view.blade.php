@extends('admin.admin_master')
@section('admin')
<div class="row g-4">
    <div class="col-md-12">
        <div class="card shadow-sm">
            <div class="card-body">
            <div class="headergraph">
                <h3>All Slider</h3>
            </div>
            <table class="table product-table align-middle">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Category Image</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php($i = 1)
                    @foreach ($slider as $item)
                         <tr>
                        <td>
{{$i++}}
                        </td>
                        <td>
                        <div class="d-flex align-items-center productflex">
                            <img src={{$item->slider_image}} class="product-img" alt="History Book">
                        </div>
                        </td>
                        <td class="action-icons">
                       <a href="{{route('slider.edit',$item->id)}}" > <i class="fas fa-pen"></i></a>
                        <a href="{{route('slider.delete',$item->id)}}" id="delete"><i class="fas fa-trash"></i> </a>
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
