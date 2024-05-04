import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAppComponent } from './social-app.component';

describe('SocialAppComponent', () => {

  it('should have a defined title', () => {
    const component = new SocialAppComponent();
    expect(component.title).toBeTruthy();
  });
});
