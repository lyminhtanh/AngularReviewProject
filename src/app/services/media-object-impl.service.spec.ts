import { TestBed, inject } from '@angular/core/testing';

import { MediaObjectImplService } from './media-object-impl.service';

describe('MediaObjectImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaObjectImplService]
    });
  });

  it('should be created', inject([MediaObjectImplService], (service: MediaObjectImplService) => {
    expect(service).toBeTruthy();
  }));
});
