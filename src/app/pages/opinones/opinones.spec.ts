import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opinones } from './opinones';

describe('Opinones', () => {
  let component: Opinones;
  let fixture: ComponentFixture<Opinones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opinones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opinones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
