<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $users = User::all();
        return $users;
    }
  
    public function buscarUsuarioLogin(Request $request) {
        
        $email = $request->input('email');
        $senha = $request->input('senha');
        
        $usuario = User::where('email', $email)->where('senha', $senha)->get();
        return $usuario;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
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
            $cpf = $request->input('cpf');
            $email = $request->input('email');
            $senha = $request->input('senha');
            $confirmarSenha = $request->input('confirmarSenha');
            $tipo = $request->input('tipo');

            if (!$nome) return response('O Campo nome é obrigatório.', 400);
            if (!$cpf) return response('O Campo CPF é obrigatório.', 400);
            if (!$email) return response('O Campo email é obrigatório.', 400);
            if (!$senha) return response('O Campo senha é obrigatório.', 400);
            if (!$confirmarSenha) return response('O campo confirmar senha é obrigatório.', 400);
            if (!$tipo) return response('O Campo tipo de usuário é obrigatório.', 400);

            $existe = User::where('email', $email)->get();
            if ($existe->isNotEmpty()) return response('Já existe um usuário com esse email.', 400);
            
            if ($senha !== $confirmarSenha) return response('As senhas não coincidem.', 400);
            
            $senha = Hash::make($senha);

            $usuario = User::create([
                'nome' => $nome,
                'cpf' => $cpf,
                'email' => $email,
                'senha' => $senha,
                'confirmarSenha' => $confirmarSenha,
                'tipo' => $tipo
            ]);

            return [$usuario,'Retorno: ' => 'Atulizado com sucesso!'];;

        }  catch (Exception $e) {
            return response($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $usuario)
    {
        //
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $usuario)
    {
        try {
            $nome = $request->input('nome');
            $cpf = $request->input('cpf');
            $email = $request->input('email');
            $senha = $request->input('senha');
            $tipo = $request->input('tipo');

            if (!$nome) return response('O Campo nome é obrigatório.', 400);
            if (!$cpf) return response('O Campo CPF é obrigatório.', 400);
            if (!$email) return response('O Campo email é obrigatório.', 400);
            if ($senha) {
                $confirmarSenha = $request->input('confirmarSenha');
                if (!$confirmarSenha) return response('O campo confirmar senha é obrigatório.', 400);
                if ($confirmarSenha !== $senha) return response('As senhas não coincidem.', 400);
            }
            if (!$tipo) return response('O Campo tipo de usuário é obrigatório.', 400);
           
            $existe = User::where('email', $email)->get();
            if ($existe->isNotEmpty()) return response('Já existe um usuário com esse email.', 400);

            $usuario = Usuario::find($id);
            $usuario->nome = $request->nome;
            $usuario->cpf = $request->cpf;
            $usuario->email = $request->email; 
            $usuario->tipo = $request->tipo;
            
            if ($senha) {
                $usuario->senha = Hash::make($senha);
            }

            $usuario->save();

            return ['Retorno: ' => 'Atulizado com sucesso!'];

        }  catch (Exception $erro) {
            return ['Retorno: ' => $erro];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $usuario)
    {
        try {
            User::where('id', $usuario->id)->delete();
        } catch(Exception $e) {
            return response($e->getMessage(), 400);
        }
    }
}
