<?php

namespace App\Http\Controllers;

use App\Carro;
use Illuminate\Http\Request;
use Exception;

class CarroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $carros = Carro::all();
        return $carros;
    }

    public function buscarCarroUsuarioID($id) {
        $carros = Carro::where('usuario_id', $id)->get();
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

            $carro = Carro::insert([
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
     * @param  \App\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function show(Carro $carro)
    {
        //
        return $carro;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function edit(Carro $carro)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carro $carro)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carro $carro)
    {
        //
    }
}
