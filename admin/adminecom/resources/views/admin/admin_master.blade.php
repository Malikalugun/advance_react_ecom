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
      <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yaireo/tagify/dist/tagify.css">

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
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
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
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
        <script>
            // Initialize Quill editor
            const quill = new Quill('#editor', {
                modules: {
                    toolbar: '#toolbar'
                },
                theme: 'snow'
            });
        </script>
        <!-- Tagify JS via CDN -->
        <script src="https://cdn.jsdelivr.net/npm/@yaireo/tagify"></script>

        <script>
            const input = document.querySelector('#colorTags');

            // Initialize Tagify
            const tagify = new Tagify(input, {
                whitelist: [], // Empty to allow any color
                dropdown: {
                    enabled: 0
                } // No dropdown suggestions
            });

            // Change background color of each tag
            tagify.on('add', e => {
                const tagElm = e.detail.tag;
                const color = e.detail.data.value.toLowerCase();

                if (isValidColor(color)) {
                    tagElm.style.backgroundColor = color;
                    tagElm.style.color = getContrastColor(color);
                } else {
                    alert("Invalid color: " + color);
                    tagify.removeTag(e.detail.data.value);
                }
            });

            // Check if color is valid (by applying to a dummy element)
            function isValidColor(color) {
                const s = new Option().style;
                s.color = color;
                return s.color !== '';
            }

            // Contrast text color (black/white) for readability
            function getContrastColor(bgColor) {
                const dummy = document.createElement("div");
                dummy.style.color = bgColor;
                document.body.appendChild(dummy);
                const computed = getComputedStyle(dummy).color;
                document.body.removeChild(dummy);

                const rgb = computed.match(/\d+/g).map(Number);
                const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
                return brightness > 128 ? '#000' : '#fff';
            }
        </script>

   </body>
</html>