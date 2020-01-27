import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadicadoComponent } from './components/radicado/radicado.component';
import { RadicadosComponent } from './components/radicados/radicados.component';
import { RadicadoDetailComponent } from './components/radicado-detail/radicado-detail.component';

import { RadicadoRoutingModule } from './radicado-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    RadicadoComponent,
    RadicadosComponent,
    RadicadoDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RadicadoRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class RadicadoModule {

}
