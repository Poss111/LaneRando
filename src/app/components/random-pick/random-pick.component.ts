import { Component, OnInit } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-random-pick',
  templateUrl: './random-pick.component.html',
  styleUrls: ['./random-pick.component.css']
})
export class RandomPickComponent {
  names: string[];
  nameSetTwo: string[];
  lanePickList: string[];
  pickOneList: string[];
  pickTwoList: string[];
  role: string[];


  constructor() {
    this.names = ['Ben', 'Jeff', 'Micah', 'Kathy', 'Dan'];
    this.role = ['Top', 'Mid', 'Bot', 'Supp', 'Jg'];
    this.lanePickList = this.shuffleArray(cloneDeep(this.names));
    this.pickOneList = this.shuffleArray(cloneDeep(this.names));
    this.pickTwoList = this.shuffleArrayWithUniqueness(cloneDeep(this.pickOneList));
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArrayWithUniqueness(array: string[]): string[] {
    array.push(array.shift());
    array.push(array.shift());
    return array;
  }

}
