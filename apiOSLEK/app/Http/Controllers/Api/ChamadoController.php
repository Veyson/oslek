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
        $carros = Chamado::all();
        return $carros;
    }

    public function buscarChamadoUsuarioID($id) {
        $carros = Chamado::where('usuario_id', $id)->get();
        return $carros;

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
            $nome = $request->input('nome');
            $marca = $request->input('marca');
            $consumoGasolina = $request->input('consumoGasolina');
            $consumoAlcool = $request->input('consumoAlcool');
            $usuario_id = $request->input('usuario_id');

            if (!$nome) return response('O Campo nome é obrigatório.', 400);
            if (!$marca) return response('O Campo marca é obrigatório.', 400);
            if (!$consumoGasolina) return response('O Campo consumo gasolina é obrigatório.', 400);
            if (!$consumoAlcool) return response('O Campo consumo álcool é obrigatório.', 400);
            if (!$usuario_id) return response('Usuário não encontrado.', 400);

            $carro = Chamado::insert([
                'nome' => $nome,
                'marca' => $marca,
                'consumoGasolina' => $consumoGasolina,
                'consumoAlcool' => $consumoAlcool,
                'usuario_id' => $usuario_id,
            ]);

            return $carro;

        }  catch (Exception $e) {
            return response($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Chamado  $carro
     * @return \Illuminate\Http\Response
     */
    public function show(Chamado $carro)
    {
        //
        return $carro;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Chamado  $carro
     * @return \Illuminate\Http\Response
     */
    public function edit(Chamado $carro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Chamado  $carro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chamado $carro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Chamado  $carro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chamado $carro)
    {
        //
    }
}
