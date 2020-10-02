import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablrComponent } from './editablr.component';

describe('EditablrComponent', () => {
  let component: EditablrComponent;
  let fixture: ComponentFixture<EditablrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
