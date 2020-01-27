import { Component, OnInit, OnChanges } from '@angular/core';

import { Radicado } from '../../../core/models/radicado.model';
import { RadicadosService } from './../../../core/services/radicados/radicados.service';

@Component({
  selector: 'app-radicados',
  templateUrl: './radicados.component.html',
  styleUrls: ['./radicados.component.scss']
})
export class RadicadosComponent implements OnInit, OnChanges {

  radicados: Radicado[] = [];
  radicadosFiltrados: Radicado[] = [];

  constructor(
    private radicadosService: RadicadosService
  ) { }

  ngOnInit() {
    this.radicados = this.radicadosService.getAllRadicados();
    this.radicadosFiltrados = this.radicadosService.getAllRadicados();
  }

  ngOnChanges(value) {
    
    console.log(value);
    this.radicadosFiltrados = [];

    this.radicados.forEach(radicado => {
      if(radicado.type.toLowerCase().includes(value)) {
        this.radicadosFiltrados.push(radicado);
      }
    });

    this.radicados.forEach(radicado => {
      if(radicado.register_date.toLowerCase().includes(value)) {
        this.radicadosFiltrados.push(radicado);
      }
    });

  }

}
