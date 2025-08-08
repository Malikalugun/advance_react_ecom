<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Admin Panel</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <link href="{{asset('backend/assets/css/style.css')}}" rel="stylesheet"/>
      <link href="{{asset('backend/assets/css/responsive.css')}}" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css">
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote.min.css" rel="stylesheet">
<style>
.bootstrap-tagsinput {
    width: 100%;
    min-height: 40px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    line-height: 22px;
}
.bootstrap-tagsinput .tag {
    margin-right: 2px;
    color: white;
    background-color: #007bff;
    padding: 3px 7px;
    border-radius: 3px;
}
.note-toolbar {
    display: block !important;
    visibility: visible !important;
}
</style>

   </head>
   <body>
      <!-- Page content -->
      <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
         @include('admin.body.sidebar');
      </div>
      <!-- Sidebar -->
      <!-- Page Content -->
      <div id="page-content-wrapper" class="w-100">
         <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">
               <button class="btn btnadminpanel" id="menu-toggle">☰</button>
               <span class="ms-3 fw-bold">Dashboard</span>
            </div>
         </nav>
         <!-- Main Content -->
         <div class="flex-grow-1 adminbg">
            <!-- Topbar start -->
            @include('admin.body.header')
            <!-- Topbar End -->
            @yield('admin')
            <footer>
               <p>© 2025 Admin Panel Developed by <a href="#">Tripledots Software Services Pvt. Ltd.</a></p>
            </footer>
         </div>
      </div>
      @include('admin.body.footer')
<!-- jQuery -->
{{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> --}}

<!-- Toastr JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

<!-- Bootstrap Tags Input -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.min.js"></script>

<!-- Summernote JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote.min.js"></script>

<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
 {{-- <script>
    $(document).ready(function() {
      $('#summernote').summernote({
        height: 300,
        placeholder: 'Write something...'
      });
    });
  </script> --}}
  <script>
   $(document).ready(function() {
  $('#summernote').summernote({
    height: 300,
    placeholder: 'Write something...',
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['fontname', ['fontname']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });
});

  </script>
<script type="text/javascript">
$(function(){
    $(document).on('click','#delete',function(e){
        e.preventDefault();
        var link = $(this).attr("href");
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "Delete This Data?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = link
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    }
                  }) 
    });

  });

	
</script>
 <script>
         @if(Session::has('message'))
         var type = "{{ Session::get('alert-type','info') }}"
         switch(type){
            case 'info':
            toastr.info(" {{ Session::get('message') }} ");
            break;
         
            case 'success':
            toastr.success(" {{ Session::get('message') }} ");
            break;
         
            case 'warning':
            toastr.warning(" {{ Session::get('message') }} ");
            break;
         
            case 'error':
            toastr.error(" {{ Session::get('message') }} ");
            break; 
         }
         @endif 
      </script>
   </body>
</html>