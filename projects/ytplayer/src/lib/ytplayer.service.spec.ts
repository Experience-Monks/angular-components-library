import { TestBed, inject } from '@angular/core/testing';

import { YTPlayerService } from './ytplayer.service';

describe('YTPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YTPlayerService]
    });
  });

  it('should be created', inject([YTPlayerService], (service: YTPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
