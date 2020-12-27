import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravidaComponent } from './gravida.component';

describe('GravidaComponent', () => {
  let component: GravidaComponent;
  let fixture: ComponentFixture<GravidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GravidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GravidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
