import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aluminio } from './aluminio';

describe('Aluminio', () => {
  let component: Aluminio;
  let fixture: ComponentFixture<Aluminio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aluminio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aluminio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
