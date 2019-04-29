import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarUserviewComponent } from './calendar-userview.component';

describe('CalendarUserviewComponent', () => {
  let component: CalendarUserviewComponent;
  let fixture: ComponentFixture<CalendarUserviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarUserviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarUserviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
