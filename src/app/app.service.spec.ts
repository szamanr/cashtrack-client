import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  beforeEach(inject([AppService], (appService) => {
    service = appService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store the current user', () => {
    expect(service.user).toBeDefined();
  });
});
