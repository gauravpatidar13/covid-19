import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCComponent } from './chart-c.component';

describe('ChartCComponent', () => {
  let component: ChartCComponent;
  let fixture: ComponentFixture<ChartCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
