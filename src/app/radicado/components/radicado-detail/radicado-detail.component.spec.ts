import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicadoDetailComponent } from './radicado-detail.component';

describe('RadicadoDetailComponent', () => {
  let component: RadicadoDetailComponent;
  let fixture: ComponentFixture<RadicadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadicadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadicadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
