<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Admin Panel</title>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <link href="{{asset('backend/assets/css/style.css')}}" rel="stylesheet"/>
      <link href="{{asset('backend/asset/css/responsive.css')}}" rel="stylesheet"/>
   </head>
   <body>
      <div class="loginbody">
         <!-- main content start  -->
         <div class="login-container">
            <div class="login-header">
               {{-- <img src="https://i.imgur.com/RC0n4Xn.png" alt="Logo" /> --}}
               <h2>Let's Get Started Rizz</h2>
               <p>Sign in to continue to Rizz.</p>
            </div>
            <form method="POST" action="{{ route('register') }}">
               @csrf
               <div class="login-body">
                  <label for="name">Username</label>
                  <input type="text" id="name" name="name" placeholder="Enter name" />
                  @error('name')
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                     <strong>{{ $message }}</strong>
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  @enderror
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter email" />
                  @error('email')
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                     <strong>{{ $message }}</strong>
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  @enderror
                  <label for="password">Password</label>
                  <input type="password" id="password" placeholder="Enter password" />
                  @error('password')
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                     <strong>{{ $message }}</strong>
                     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  @enderror
                  <label for="password_confirmation">Confirm Password</label>
                  <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Enter password" />
                  <button class="login-button" type="submit">Log In <i class="fas fa-sign-in-alt"></i></button>
                  <div class="register-section">
                     Already have an account ?
                     <a href="{{url('/login')}}">Login</a>
                  </div>
               </div>
            </form>
         </div>
         <!-- main content end -->
      </div>
   </body>
</html>