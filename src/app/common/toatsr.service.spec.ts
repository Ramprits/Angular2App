/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToatsrService } from './toatsr.service';

describe('Service: Toatsr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToatsrService]
    });
  });

  it('should ...', inject([ToatsrService], (service: ToatsrService) => {
    expect(service).toBeTruthy();
  }));
});