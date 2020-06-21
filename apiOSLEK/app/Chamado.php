<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{
    //
    protected $fillable = ['titulo','descricao', 'status', 'usuario_id', 'setor'];
}
