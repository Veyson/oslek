import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ChamadoClientePage } from '../pages/chamado-cliente/chamado-cliente';
import { ChamadoFuncionarioPage } from '../pages/chamado-funcionario/chamado-funcionario';
import { ChamadoDescricaoPage } from '../pages/chamado-descricao/chamado-descricao';
import { UsuarioService } from '../services/Usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ChamadoService } from '../services/Chamado.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroPage,
    ChamadoClientePage,
    ChamadoFuncionarioPage,
    ChamadoDescricaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastroPage,
    ChamadoClientePage,
    ChamadoFuncionarioPage,
    ChamadoDescricaoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    ChamadoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
