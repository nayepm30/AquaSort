import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasVentas } from './estadisticas-ventas';

describe('EstadisticasVentas', () => {
  let component: EstadisticasVentas;
  let fixture: ComponentFixture<EstadisticasVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasVentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
