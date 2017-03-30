import { TestBed, inject } from '@angular/core/testing';

import { AF } from './af.service';

describe('AfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AF]
    });
  });

  it('should ...', inject([AF], (service: AF) => {
    expect(service).toBeTruthy();
  }));
});
