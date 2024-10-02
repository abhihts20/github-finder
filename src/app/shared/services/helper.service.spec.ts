import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set value in localStorage', () => {
    spyOn(localStorage, 'setItem');
    const key = 'sampleUserData';
    const value = { token:'github-user', bio: 'Testing bio' };
    service.setLocalStorage(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
