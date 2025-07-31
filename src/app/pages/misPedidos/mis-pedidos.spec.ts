import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPedidos } from './misPedidos.component';

describe('MisPedidos', () => {
  let component: MisPedidos;
  let fixture: ComponentFixture<MisPedidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisPedidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPedidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
