import { TestBed } from '@angular/core/testing';

import { GitGistService } from './git-gist.service';

describe('GitGistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitGistService = TestBed.get(GitGistService);
    expect(service).toBeTruthy();
  });
});
