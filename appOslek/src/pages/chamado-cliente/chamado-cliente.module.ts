import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChamadoClientePage } from './chamado-cliente';

@NgModule({
  declarations: [
    ChamadoClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ChamadoClientePage),
  ],
})
export class ChamadoClientePageModule {}
