<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.index');
    })->name('dashboard');
});
Route::get('/logout', [AdminController::class, 'AdminLogout'])->name('admin.logout');
Route::prefix('admin')->group(function () {
    Route::get('/user-profile', [AdminController::class, 'UserProfile'])->name('user.profile');
    Route::post('user/profile', [AdminController::class, 'UserProfileStore'])->name('user.profile.store');
    Route::get('/change/password', [AdminController::class, 'ChangePassword'])->name('change.password');
    Route::post('/change/password/update', [AdminController::class, 'ChangePasswordUpdate'])->name('change.password.update');
});
Route::prefix('category')->group(function () {
    Route::get('/all', [CategoryController::class, 'AllCategoryList'])->name('all.category');
});
