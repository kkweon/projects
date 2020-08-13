import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectItemComponent } from './list-project-item.component';

describe('ListProjectItemComponent', () => {
  let component: ListProjectItemComponent;
  let fixture: ComponentFixture<ListProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListProjectItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
