import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderTodoComponent } from './reminder-todo.component';

describe('ReminderTodoComponent', () => {
  let component: ReminderTodoComponent;
  let fixture: ComponentFixture<ReminderTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
