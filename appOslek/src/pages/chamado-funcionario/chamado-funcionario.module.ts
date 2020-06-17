import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadoFuncionarioPage } from './chamado-funcionario';

@NgModule({
  declarations: [
    ChamadoFuncionarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadoFuncionarioPage),
  ],
})
export class ChamadoFuncionarioPageModule {}
