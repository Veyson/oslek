<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            $name = $request->input('name');
            $cpf = $request->input('cpf');
            $email = $request->input('email');
            $email_verified_at = $request->input('email_verified_at');
            $password = $request->input('password');
            $type = $request->input('type');
            $setor_id = $request->input('setor_id');

            if (!$name) return response('O Campo nome é obrigatório.', 400);
            if (!$cpf) return response('O Campo CPF é obrigatório.', 400);
            if (!$email) return response('O Campo email é obrigatório.', 400);
            if (!$email_verified_at) return response('O Campo verificar email é obrigatório.', 400);
            if (!$password) return response('O Campo senha é obrigatório.', 400);
            if (!$type) return response('O Campo tipo de usuário é obrigatório.', 400);
            if (!$setor_id) return response('Setor não encontrado.', 400);

            $user = User::insert([
                'name' => $name,
                'cpf' => $cpf,
                'email' => $email,
                'email_verified_at' => $email_verified_at,
                'password' => $password,
                'type' => $type,
                'setor_id' => $setor_id
            ]);

            return $user;

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
    public function show(User $user)
    {
        //
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
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
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
