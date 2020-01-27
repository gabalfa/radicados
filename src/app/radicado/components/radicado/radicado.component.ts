import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Radicado } from '../../../core/models/radicado.model';

@Component({
  selector: 'app-radicado',
  templateUrl: './radicado.component.html',
  styleUrls: ['./radicado.component.scss']
})
export class RadicadoComponent implements OnInit {

  @Input() radicado: Radicado;
  @Output() radicadoClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {  }

}
