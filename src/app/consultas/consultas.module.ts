import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './components/consultas/consultas.component';

@NgModule({
    declarations: [
        ConsultasComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ConsultasRoutingModule
    ]
})
export class ConsultasModule {

}