import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorNombre } from './buscador-nombre';

describe('BuscadorNombre', () => {
  let component: BuscadorNombre;
  let fixture: ComponentFixture<BuscadorNombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorNombre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorNombre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
