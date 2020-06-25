<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    //
    protected $table = 'usuarios';
    protected $fillable = ['nome','cpf', 'email', 'senha', 'tipo', 'created_at', 'updated_at'];
    protected $hidden = [];

    public function chamados()
    {
        return $this->hasMany(Chamado::class,'usuario_id','id');
    }
}
