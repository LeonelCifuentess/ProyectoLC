import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vidrio } from './vidrio';

describe('Vidrio', () => {
  let component: Vidrio;
  let fixture: ComponentFixture<Vidrio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vidrio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vidrio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
