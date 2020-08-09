import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  names: string[] = [];

  constructor() { }

  persistNames(values: string[]) {
    this.names = values;
  }

  retrieveNames() : string[] {
    return this.names;
  }
}
