import { TestBed, inject } from '@angular/core/testing';

import { MediaObjectService } from './media-object.service';

describe('MediaObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaObjectService]
    });
  });

  it('should be created', inject([MediaObjectService], (service: MediaObjectService) => {
    expect(service).toBeTruthy();
  }));
});
