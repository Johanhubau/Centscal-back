import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAssoviewComponent } from './calendar-assoview.component';

describe('CalendarAssoviewComponent', () => {
  let component: CalendarAssoviewComponent;
  let fixture: ComponentFixture<CalendarAssoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarAssoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarAssoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
