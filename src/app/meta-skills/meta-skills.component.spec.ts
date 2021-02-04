import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaSkillsComponent } from './meta-skills.component';

describe('MetaSkillsComponent', () => {
  let component: MetaSkillsComponent;
  let fixture: ComponentFixture<MetaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
