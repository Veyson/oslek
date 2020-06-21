<?php

namespace App\Http\Controllers;

use App\Chamado;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChamadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $chamados = Chamado::all();
        return $chamados;
    }

    public function buscarChamadoUsuarioID($id) {
        $chamados = Chamado::where('usuario_id', $id)->get();
        return $chamados;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
     
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        //
        try {
            $titulo = $request->input('titulo');
            $descricao = $request->input('descricao');
            $status = $request->input('status');
            $usuario_id = $request->input('usuario_id');
            $setor = $request->input('setor');

            if (!$titulo) return response('O Campo título é obrigatório.', 400);
            if (!$descricao) return response('O Campo descrição é obrigatório.', 400);
            if (!$status) return response('O Campo status é obrigatório.', 400);
            if (!$usuario_id) return response('Usuário não encontrado.', 400);
            if (!$setor) return response('O Campo setor é obrigatório.', 400);

            $chamado = Chamado::create([
                'titulo' => $titulo,
                'descricao' => $descricao,
                'status' => $status,
                'usuario_id' => $usuario_id,
                'setor' => $setor,
            ]);

            return [$chamado, 'Retorno: ' => 'Atulizado com sucesso!'];

        }  catch (Exception $e) {
            return response($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Chamado  $chamado
     * @return \Illuminate\Http\Response
     */
    public function show(Chamado $chamado)
    {
        //
        return $chamado;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Chamado  $chamado
     * @return \Illuminate\Http\Response
     */
    public function edit(Chamado $chamado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Chamado  $chamado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chamado $chamado)
    {
        try {

            $titulo = $request->input('titulo');
            $descricao = $request->input('descricao');
            $status = $request->input('status');
            $usuario_id = $request->input('usuario_id');
            $setor = $request->input('setor');

            if (!$titulo) return response('O Campo título é obrigatório.', 400);
            if (!$descricao) return response('O Campo descrição é obrigatório.', 400);
            if (!$status) return response('O Campo status é obrigatório.', 400);
            if (!$usuario_id) return response('Usuário não encontrado.', 400);
            if (!$setor) return response('O Campo setor é obrigatório.', 400);

            $chamado->titulo = $request->titulo;
            $chamado->descricao = $request->descricao;
            $chamado->status = $request->status;
            $chamado->usuario_id = $request->usuario_id;
            $chamado->setor = $request->setor;

            $chamado->save();

            return ['Retorno: ' => 'Atulizado com sucesso!'];

        }  catch (Exception $erro) {
            return ['Retorno: ' => $erro];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Chamado  $chamado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chamado $chamado)
    {
        //
    }
}
