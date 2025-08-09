import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesPendientes } from './cotizacionesPendientes.component';

describe('CotizacionesPendientes', () => {
  let component: CotizacionesPendientes;
  let fixture: ComponentFixture<CotizacionesPendientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizacionesPendientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionesPendientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
