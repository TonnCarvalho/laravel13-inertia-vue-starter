<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::get('teste', function() {
    return 'Ola mundo';
})->name('teste');