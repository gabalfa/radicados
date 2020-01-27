import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RadicadosService } from '../../../core/services/radicados/radicados.service';
import { Radicado } from '../../../core/models/radicado.model';

@Component({
  selector: 'app-radicado-detail',
  templateUrl: './radicado-detail.component.html',
  styleUrls: ['./radicado-detail.component.scss']
})
export class RadicadoDetailComponent implements OnInit {

  radicado: Radicado;

  constructor(
    private route: ActivatedRoute,
    private radicadosService: RadicadosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.radicado = this.radicadosService.getRadicado(params.id);
      // console.log(this.radicado.log.length);
    });
  }

}
