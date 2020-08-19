import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  names: string[] = [];

  constructor() { }

  persistNames(values: string[]): void {
    this.names = values;
  }

  retrieveNames(): string[] {
    return this.names;
  }

  retrieveSetOfNames(): Set<string> {
    return new Set(this.names);
  }
}
