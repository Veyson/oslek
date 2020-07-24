# OSLEK: System Call

<p align="center">
  <img src="https://blog.wittel.com/wp-content/uploads/2019/05/shutterstock_1155079180-1-810x497.jpg">
</p>

> Status: Under development :warning:

## Project Description :star:

A ticketing system developed on the mobile platform that centralizes all service requests made by users to be granted by a specialist.

## Technology | Language :books:

:trophy: PHP

:trophy: Typescript

:trophy: [Ionic] (https://ionicframework.com/)

:trophy: [Laravel] (https://laravel.com/)

## Functionalities :star:

:trophy: Register user

:trophy: Manages user ticket

:trophy: Account for open calls
 
 ## Prerequisite :memo:
 
:trophy: Node.js

:trophy: [Npm] (https://www.npmjs.com/)

:trophy: [Composer] (https://getcomposer.com/)

:trophy: XAMPP

## Configuration :computer:

:warning: Perform the installation of 'node.js', automatically 'npm' is installed together with the node;

:warning: Perform installation of the XAMPP server;

:warning: Perform installation of the package manager 'Composer';

:warning: Within the system directory in the apiOslek folder, give the command 

```
composer install
```

:warning: Within the system directory in the appOslek folder, give the command 

```
npm install
```

## Database

--- Usuario ---

|nome|cpf|email|senha|confirmarSenha|tipo|
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| fenando | 123.123.123-12 | fernando@live.com | 1234 | 1234 | cliente |

```
senha e confirmaSenha are encrypted
```

--- Chamado ---

|titulo|descricao|status|setor|usuarioId|
| ----------- | ----------- | ----------- | ----------- | ----------- |
| exemplo | exemplo | concluído | exemplo | fernando |
