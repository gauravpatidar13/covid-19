import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurusComponent } from './purus.component';

describe('PurusComponent', () => {
  let component: PurusComponent;
  let fixture: ComponentFixture<PurusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
