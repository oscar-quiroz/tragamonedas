import { TestBed } from '@angular/core/testing';

import { SlotMachineServiceService } from './slot-machine-service.service';

describe('SlotMachineServiceService', () => {
  let service: SlotMachineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotMachineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
