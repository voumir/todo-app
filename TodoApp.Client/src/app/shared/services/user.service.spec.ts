import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
// TODO: Implement tests
describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
