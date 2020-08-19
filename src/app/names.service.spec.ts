import { TestBed } from '@angular/core/testing';

import { NamesService } from './names.service';

describe('NamesService', () => {
  let service: NamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should persist array into service', () => {
    const array: string[] = ['value1', 'value2'];
    service.persistNames(array);
    expect(service.names).toEqual(array);
  });

  it('should retrieve array in service if populated', () => {
    const array: string[] = ['value1', 'value2'];
    service.names = array;
    expect(service.retrieveNames()).toEqual(array);
  });

  it('should retrieve a set of the names in service if populated', () => {
    const array: string[] = ['value1', 'value2', 'value2'];
    service.names = array;
    expect(service.retrieveSetOfNames()).toEqual(new Set<string>(array));
  });
});
