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

  it('should persist array into service and localstorage as a set', () => {
    const array: string[] = ['value1', 'value2', 'value2'];
    service.persistNames(array);
    expect(service.names).toEqual(array);
    expect(new Set<string>(array)).toEqual(new Set<string>(JSON.parse(localStorage.getItem('setNames'))));
  });

  it('should persist array into service and concats existing localstorage as a set', () => {
    const array: string[] = ['value1', 'value2', 'value2'];
    const existing: string[] = ['value3', 'value4', 'value2'];
    localStorage.setItem('setNames', JSON.stringify(Array.from(new Set(array))));
    service.persistNames(array);
    array.concat(existing);
    expect(service.names).toEqual(array);
    expect(new Set<string>(array)).toEqual(new Set<string>(JSON.parse(localStorage.getItem('setNames'))));
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
    expect(new Set<string>(JSON.parse(localStorage.getItem('setNames')))).toEqual(new Set<string>(array));
  });

  it('should clear set of names from localstorage when called', () => {
    const array: string[] = ['value1', 'value2', 'value2'];
    localStorage.setItem('setNames', JSON.stringify(Array.from(new Set(array))));
    service.clearSetOfNames();
    expect(localStorage.getItem('setNames')).toEqual(null);
  });
});
