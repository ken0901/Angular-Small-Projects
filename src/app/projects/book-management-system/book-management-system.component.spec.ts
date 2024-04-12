import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagementSystemComponent } from './book-management-system.component';

describe('BookManagementSystemComponent', () => {
  let component: BookManagementSystemComponent;
  let fixture: ComponentFixture<BookManagementSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookManagementSystemComponent]
    });
    fixture = TestBed.createComponent(BookManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
