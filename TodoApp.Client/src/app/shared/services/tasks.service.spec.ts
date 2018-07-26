import { TestBed, inject } from '@angular/core/testing';

import { TasksService } from './tasks.service';
// TODO: Implement tests
describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should be created', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
