@extends('admin.admin_master')
@section('admin')
<div class="row g-4">
    <div class="col-md-12">
        <div class="card shadow-sm">
            <div class="card-body">
            <div class="headergraph">
                <h3>All Message</h3>
            </div>
            <table class="table product-table align-middle">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Product Name</th>
                        <th>Reviewer Name</th>
                        <th>Rating</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php($i = 1)
                    @foreach ($review as $item)
                         <tr>
                        <td>
                        {{$i++}}
                        </td>
                         <td> {{$item->product_name}}</td>
                        <td> {{$item->reviewer_name}}</td>
                        <td>{{$item->reviewer_rating}}</td>
                        <td>{{$item->reviewer_comment}}</td>
                        <td class="action-icons">
                       
                        <a href="{{route('review.delete',$item->id)}}" id="delete"><i class="fas fa-trash"></i> </a>
                        </td>
                    </tr>
                  
                    @endforeach
                   
                </tbody>
            </table>
            </div>
            
        </div>
        <div class="painatepage">
{{$review->links('vendor.pagination.custom')}}

        </div>
    </div>
    
</div>
@endsection
