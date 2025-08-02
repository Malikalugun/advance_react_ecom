<nav class="sidebar border-end" id="sidebar">
   <div class="d-flex justify-content-between align-items-center p-3 border-bottom d-md-none">
      <h5 class="mb-0">Menu</h5>
      <button id="close-sidebar" class="btn btn-sm btn-outline-secondary">&times;</button>
   </div>
   <div class="text-center p-4 sidemenulogo">
      <img src="https://mannatthemes.com/rizz/default/assets/images/logo-sm.png" alt="Logo">
      <h5 class="mt-2">DashEdge</h5>
   </div>
   <ul class="nav flex-column">
      <!-- Dashboards Dropdown -->
      <div class="nav-linktitle">MAIN MENU</div>
      <li class="nav-item">
         <a href="{{url('/dashboard')}}" class="nav-link">
            <i class="fas fa-chart-line me-2"></i> Dashboards
         </a>
      </li>
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#applicationsMenu" role="button" aria-expanded="false" aria-controls="applicationsMenu">
            <i class="fas fa-th me-2"></i> Category
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="applicationsMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="{{route('all.category')}}"><i class="fas fa-comments me-2"></i> All Category</a></li>
               <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-address-book me-2"></i> Add Category</a></li>
              
            </ul>
         </div>
      </li>
    
      <!-- Forms Dropdown -->
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#formsMenu" role="button" aria-expanded="false" aria-controls="formsMenu">
            <i class="fas fa-file-alt me-2"></i> Forms
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="formsMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Form Elements</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Validation</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Wizards</a></li>
               <li class="nav-item"><a class="nav-link" href="#">File Upload</a></li>
            </ul>
         </div>
      </li>
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#tablesMenu" role="button" aria-expanded="false" aria-controls="tablesMenu">
            <i class="fas fa-table me-2"></i> Tables
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="tablesMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Basic Tables</a></li>
               <li class="nav-item"><a class="nav-link" href="#">DataTables</a></li>
            </ul>
         </div>
      </li>
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#mapsMenu" role="button" aria-expanded="false" aria-controls="mapsMenu">
            <i class="fas fa-map-marked-alt me-2"></i> Maps
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="mapsMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Google Maps</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Vector Maps</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Leaflet Maps</a></li>
            </ul>
         </div>
      </li>
      <!-- Email Templates Dropdown -->
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#emailTemplatesMenu" role="button" aria-expanded="false" aria-controls="emailTemplatesMenu">
            <i class="fas fa-envelope me-2"></i> Email Templates
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="emailTemplatesMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Welcome Email</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Reset Password</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Order Confirmation</a></li>
            </ul>
         </div>
      </li>
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#pagesMenu" role="button" aria-expanded="false" aria-controls="pagesMenu">
            <i class="fas fa-file-alt me-2"></i> Pages
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="pagesMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Starter Page</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
               <li class="nav-item"><a class="nav-link" href="#">FAQs</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
            </ul>
         </div>
      </li>
      <li class="nav-item">
         <a class="nav-link" data-bs-toggle="collapse" href="#authMenu" role="button" aria-expanded="false" aria-controls="authMenu">
            <i class="fas fa-user-lock me-2"></i> Authentication
            <i class="fas fa-chevron-down ms-auto"></i>
         </a>
         <div class="collapse" id="authMenu">
            <ul class="nav flex-column ms-3">
               <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Register</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Forgot Password</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Reset Password</a></li>
               <li class="nav-item"><a class="nav-link" href="#">Lock Screen</a></li>
            </ul>
         </div>
      </li>
   </ul>
</nav>