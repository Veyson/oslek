<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            $title = $request->input('title');
            $description = $request->input('description');
            $status = $request->input('status');
            $date = $request->input('date');
            $user_id = $request->input('user_id');
            $setor_id = $request->input('setor_id');

            if (!$title) return response('O Campo título é obrigatório.', 400);
            if (!$description) return response('O Campo descrição é obrigatório.', 400);
            if (!$status) return response('O Campo status é obrigatório.', 400);
            if (!$date) return response('O Campo data é obrigatório.', 400);
            if (!$user_id) return response('Usuário não encontrado.', 400);
            if (!$setor_id) return response('Setor não encontrado.', 400);

            $chamado = Chamado::insert([
                'titulo' => $titulo,
                'description' => $description,
                'status' => $status,
                'date' => $date,
                'user_id' => $user_id,
                'setor_id' => $setor_id,
            ]);

            return $chamado;

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
        //
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
