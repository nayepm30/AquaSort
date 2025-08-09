import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdministrador } from './inicioAdministrador.component';

describe('InicioAdministrador', () => {
  let component: InicioAdministrador;
  let fixture: ComponentFixture<InicioAdministrador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioAdministrador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAdministrador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
