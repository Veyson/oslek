import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ChamadoClientePage } from '../pages/chamado-cliente/chamado-cliente';
import { ChamadoFuncionarioPage } from '../pages/chamado-funcionario/chamado-funcionario';
import { ChamadoDescricaoPage } from '../pages/chamado-descricao/chamado-descricao';
import { UsuarioService } from '../services/Usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { ChamadoService } from '../services/Chamado.service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioPerfilPage } from '../pages/usuario-perfil/usuario-perfil';
import { ChamadoListaPage } from '../pages/chamado-lista/chamado-lista';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ChamadoClientePage,
    ChamadoFuncionarioPage,
    ChamadoDescricaoPage,
    UsuarioPerfilPage,
    ChamadoListaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ChamadoClientePage,
    ChamadoFuncionarioPage,
    ChamadoDescricaoPage,
    UsuarioPerfilPage,
    ChamadoListaPage
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
