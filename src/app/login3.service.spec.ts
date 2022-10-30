import { TestBed } from '@angular/core/testing';

import { Login3Service } from './login3.service';

describe('Login3Service', () => {
  let service: Login3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
