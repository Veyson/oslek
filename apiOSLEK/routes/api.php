<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//************************************************************************ */
Route::resource('/chamados', 'Api\ChamadoController');
Route::resource('/users', 'Api\UserController');
Route::resource('/empresas', 'Api\EmpresaController');
Route::resource('/setors', 'Api\SetorController');
Route::get('chamados/chamadousuarios/{id}', 'Api\ChamadoController@buscarChamadoUsuarioID');
Route::get('setors/setorempresas/{id}', 'Api\SetorController@buscarSetorEmpresaID');

Route::namespace('Api')->group(function(){

    Route::post('/chamados/create', 'ContatoController@create');

    Route::get('/chamados', 'ContatoController@show');
});