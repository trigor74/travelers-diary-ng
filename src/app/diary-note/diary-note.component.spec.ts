import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNoteComponent } from './diary-note.component';

describe('DiaryNoteComponent', () => {
  let component: DiaryNoteComponent;
  let fixture: ComponentFixture<DiaryNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
