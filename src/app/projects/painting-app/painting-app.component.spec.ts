import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingAppComponent } from './painting-app.component';

describe('PaintingAppComponent', () => {
  let component: PaintingAppComponent;
  let fixture: ComponentFixture<PaintingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaintingAppComponent]
    });
    fixture = TestBed.createComponent(PaintingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
