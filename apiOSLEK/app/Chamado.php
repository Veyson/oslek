<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{
    //
    protected $table = 'chamados';
    protected $fillable = ['titulo','descricao', 'status', 'usuario_id', 'setor', 'created_at', 'updated_at'];
    protected $hidden = [];
    
    public function usuario()
    {
        return $this->belongsTo(User::class,'usuario_id','id');
    }
}
