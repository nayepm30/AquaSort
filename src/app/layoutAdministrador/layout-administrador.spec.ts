import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdministrador } from './layoutAdministrador.component';

describe('LayoutAdministrador', () => {
  let component: LayoutAdministrador;
  let fixture: ComponentFixture<LayoutAdministrador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAdministrador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdministrador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
