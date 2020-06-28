import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadoListaPage } from './chamado-lista';

@NgModule({
  declarations: [
    ChamadoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadoListaPage),
  ],
})
export class ChamadoListaPageModule {}
