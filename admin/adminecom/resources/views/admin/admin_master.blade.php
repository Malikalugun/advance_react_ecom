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
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css" >
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
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
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