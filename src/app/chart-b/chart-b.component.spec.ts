import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBComponent } from './chart-b.component';

describe('ChartBComponent', () => {
  let component: ChartBComponent;
  let fixture: ComponentFixture<ChartBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
