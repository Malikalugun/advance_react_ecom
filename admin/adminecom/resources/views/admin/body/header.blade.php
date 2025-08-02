@php
 $adminData = App\Models\User::find(1);   
@endphp
<div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
   <h4 class="mb-0">Good Morning, {{$adminData->name}}!</h4>
   <div class="d-flex align-items-center gap-3 topmenuadmin">
      <form class="search-bar" onsubmit="return handleSearch(event)">
         <i class="fas fa-search search-icon" onclick="document.getElementById('searchForm').submit()"></i>
         <input type="text" id="searchInput" class="form-control" placeholder="Search here..." oninput="toggleClearBtn()">
         <button type="button" id="clearBtn" class="clear-btn" onclick="clearSearch()" style="display: none;">×</button>
      </form>
      <div class="dropdown">
         <a href="#" class="d-flex align-items-center" id="flagDropdown" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="https://cdn-icons-png.flaticon.com/128/14009/14009677.png" alt="Flag" width="24">
         </a>
         <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="flagDropdown">
            <li><a class="dropdown-item" href="#"><img src="https://cdn-icons-png.flaticon.com/128/4060/4060248.png" width="20" class="me-2"> France</a></li>
            <li><a class="dropdown-item" href="#"><img src="https://mannatthemes.com/rizz/default/assets/images/flags/germany_flag.jpg" width="20" class="me-2"> Germany</a></li>
         </ul>
      </div>
      <div class="dropdown notification-menu">
         <button class="btn btn-light position-relative rounded-circle shadow-sm" id="notifDropdown" data-bs-toggle="dropdown" aria-expanded="false">
         <i class="fas fa-bell fa-lg text-dark"></i>
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         3
         </span>
         </button>
         <ul class="dropdown-menu dropdown-menu-end shadow-sm p-0" aria-labelledby="notifDropdown">
            <li class="dropdown-header fw-semibold px-3 py-2">Notifications</li>
            <li>
               <hr class="dropdown-divider m-0" />
            </li>
            <li>
               <a class="dropdown-item d-flex align-items-start gap-2 px-3 py-2" href="#">
                  <div class="icon-circle text-white"><i class="fas fa-envelope"></i></div>
                  <div>
                     <div class="fw-notification">New message received</div>
                     <small class="text-muted">2 mins ago</small>
                  </div>
               </a>
            </li>
            <li>
               <a class="dropdown-item d-flex align-items-start gap-2 px-3 py-2" href="#">
                  <div class="icon-circle text-white"><i class="fas fa-user-plus"></i></div>
                  <div>
                     <div class="fw-notification">New user registered</div>
                     <small class="text-muted">10 mins ago</small>
                  </div>
               </a>
            </li>
            <li>
               <a class="dropdown-item d-flex align-items-start gap-2 px-3 py-2" href="#">
                  <div class="icon-circle text-white"><i class="fas fa-server"></i></div>
                  <div>
                     <div class="fw-notification">Server rebooted</div>
                     <small class="text-muted">30 mins ago</small>
                  </div>
               </a>
            </li>
            <li>
               <hr class="dropdown-divider m-0" />
            </li>
            <li><a class="dropdown-item text-center py-2" href="#">View all notifications</a></li>
         </ul>
      </div>
      <div class="dropdown">
         <a href="#" class="d-flex align-items-center text-decoration-none" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="{{asset('backend/assets/images/avatar-2.jpg')}}" alt="Profile" width="36" class="rounded-circle">
         <span class="ms-2 fw-semibold text-dark d-none d-md-inline">{{$adminData->name}}</span>
         </a>
         <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><a class="dropdown-item" href="{{route('user.profile')}}"><i class="fas fa-user me-2"></i> Profile</a></li>
             <li><a class="dropdown-item" href="{{route('change.password')}}"><i class="fas fa-lock me-2"></i> Change Password</a></li>
            <li>
            <li><a class="dropdown-item" href="#"><i class="fas fa-cog me-2"></i> Settings</a></li>
            <li>
               <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item text-danger" href="{{route('admin.logout')}}"><i class="fas fa-sign-out-alt me-2"></i> Logout</a></li>
         </ul>
      </div>
   </div>
</div>