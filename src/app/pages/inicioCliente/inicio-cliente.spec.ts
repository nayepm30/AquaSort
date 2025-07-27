import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCliente } from './inicioCliente';

describe('InicioCliente', () => {
  let component: InicioCliente;
  let fixture: ComponentFixture<InicioCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
