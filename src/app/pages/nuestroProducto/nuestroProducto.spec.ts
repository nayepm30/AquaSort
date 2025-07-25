import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroProducto } from './nuestro-producto';

describe('NuestroProducto', () => {
  let component: NuestroProducto;
  let fixture: ComponentFixture<NuestroProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
