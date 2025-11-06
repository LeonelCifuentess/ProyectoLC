import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metal } from './metal';

describe('Metal', () => {
  let component: Metal;
  let fixture: ComponentFixture<Metal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
