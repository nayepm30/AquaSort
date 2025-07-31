import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesHistorial } from './solicitudesHistorial.component';

describe('SolicitudesHistorial', () => {
  let component: SolicitudesHistorial;
  let fixture: ComponentFixture<SolicitudesHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesHistorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesHistorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
