import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagementComponent } from './book-management.component';

describe('BookManagementSystemComponent', () => {
  let component: BookManagementComponent;
  let fixture: ComponentFixture<BookManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookManagementComponent]
    });
    fixture = TestBed.createComponent(BookManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});