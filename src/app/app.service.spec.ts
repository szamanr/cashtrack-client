import {inject, TestBed} from '@angular/core/testing';

import {AppService} from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  beforeEach(inject([AppService], (app) => {
    service = app;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store the current user', () => {
    expect(service.user).toBeDefined();
  });
});
