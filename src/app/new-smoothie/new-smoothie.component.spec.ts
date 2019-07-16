import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSmoothieComponent } from './new-smoothie.component';

describe('NewSmoothieComponent', () => {
  let component: NewSmoothieComponent;
  let fixture: ComponentFixture<NewSmoothieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSmoothieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSmoothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
