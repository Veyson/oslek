<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{
    //
    protected $table = 'chamados';
    protected $fillable = ['titulo','descricao', 'status', 'usuario_id', 'setor', 'created_at', 'updated_at'];

    public function user(){
        return $this->belongsTo('App\User', 'usuario_id');
    }
}
