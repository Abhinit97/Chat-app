import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhanshyamComponent } from './ghanshyam.component';

describe('GhanshyamComponent', () => {
  let component: GhanshyamComponent;
  let fixture: ComponentFixture<GhanshyamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhanshyamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhanshyamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
