import { TestBed, inject } from '@angular/core/testing';

import { SlotMachineButtonService } from './slot-machine-button.service';

describe('SlotMachineButtonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlotMachineButtonService]
    });
  });

  it('should be created', inject([SlotMachineButtonService], (service: SlotMachineButtonService) => {
    expect(service).toBeTruthy();
  }));
});
