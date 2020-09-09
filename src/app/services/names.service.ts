import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  names: string[] = [];

  constructor() { }

  persistNames(values: string[]): void {
    this.names = values;
    const value = localStorage.getItem('setNames');
    let array = values;
    if (value) {
      array = values.concat(Array.from(JSON.parse(value)));
    }
    localStorage.setItem('setNames', JSON.stringify(Array.from(new Set(array))));
  }

  retrieveNames(): string[] {
    return this.names;
  }

  retrieveSetOfNames(): Set<string> {
    return new Set<string>(JSON.parse(localStorage.getItem('setNames')));
  }

  clearSetOfNames(): void {
    localStorage.removeItem('setNames');
  }
}
