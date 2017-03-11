/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeRouteActivator.service.tsService } from './Employee-route-activator.service.ts.service';

describe('Service: EmployeeRouteActivator.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeRouteActivator.service.tsService]
    });
  });

  it('should ...', inject([EmployeeRouteActivator.service.tsService], (service: EmployeeRouteActivator.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});