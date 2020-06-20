<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    //
    protected $fillable = ['nome','cpf', 'email', 'senha', 'tipo', 'created_at', 'updated_at'];
}
