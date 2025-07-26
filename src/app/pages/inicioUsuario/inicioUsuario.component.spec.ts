import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioUsuario } from './inicioUsuario.component';

describe('InicioUsuario', () => {
  let component: InicioUsuario;
  let fixture: ComponentFixture<InicioUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
