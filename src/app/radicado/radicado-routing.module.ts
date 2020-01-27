import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadicadoDetailComponent } from './components/radicado-detail/radicado-detail.component';
import { RadicadosComponent } from './components/radicados/radicados.component';

const routes: Routes = [
  {
    path: '',
    component: RadicadosComponent,
    children: [
      {
        path: ':id',
        component: RadicadoDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RadicadoRoutingModule {}
