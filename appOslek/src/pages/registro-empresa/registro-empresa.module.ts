import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroEmpresaPage } from './registro-empresa';

@NgModule({
  declarations: [
    RegistroEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroEmpresaPage),
  ],
})
export class RegistroEmpresaPageModule {}
