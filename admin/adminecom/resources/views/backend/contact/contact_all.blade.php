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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php($i = 1)
                    @foreach ($message as $item)
                         <tr>
                        <td>
                        {{$i++}}
                        </td>
                         <td> {{$item->name}}</td>
                        <td> {{$item->email}}</td>
                        <td>{{$item->message}}</td>
                        <td>{{$item->contact_date}}</td>
                        <td class="action-icons">
                       
                        <a href="{{route('contact.delete',$item->id)}}" id="delete"><i class="fas fa-trash"></i> </a>
                        </td>
                    </tr>
                  
                    @endforeach
                   
                </tbody>
            </table>
            </div>
            
        </div>
        <div class="painatepage">
{{$message->links('vendor.pagination.custom')}}

        </div>
    </div>
    
</div>
@endsection
