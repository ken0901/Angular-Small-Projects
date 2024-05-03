import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPlatformComponent } from './social-platform.component';

describe('SocialPlatformComponent', () => {

  it('should have a defined title', () => {
    const component = new SocialPlatformComponent();
    expect(component.title).toBeTruthy();
  });
});
