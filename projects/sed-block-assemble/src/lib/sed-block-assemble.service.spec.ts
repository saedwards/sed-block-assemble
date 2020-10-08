import { TestBed } from '@angular/core/testing';

import { SedBlockAssembleService } from './sed-block-assemble.service';

describe('SedBlockAssembleService', () => {
  let service: SedBlockAssembleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedBlockAssembleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
