import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPrueba } from './product-prueba';

describe('ProductPrueba', () => {
  let component: ProductPrueba;
  let fixture: ComponentFixture<ProductPrueba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPrueba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPrueba);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
