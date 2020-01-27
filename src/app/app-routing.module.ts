import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'consultas',
        pathMatch: 'full',
      },
      {
        path: 'consultas',
        loadChildren: () => import('./consultas/consultas.module').then(m => m.ConsultasModule)
      },
      {
        path: 'radicado',
        loadChildren: () => import('./radicado/radicado.module').then(m => m.RadicadoModule)
      }
    ]
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
