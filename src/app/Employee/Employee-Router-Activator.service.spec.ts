/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeeRouterActivatorService } from './Employee-Router-Activator.service';

describe('Service: EmployeeRouterActivator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeRouterActivatorService]
    });
  });

  it('should ...', inject([EmployeeRouterActivatorService], (service: EmployeeRouterActivatorService) => {
    expect(service).toBeTruthy();
  }));
});