import { Component, OnInit } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';
import { NamesService } from '../../names.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-pick',
  templateUrl: './random-pick.component.html',
  styleUrls: ['./random-pick.component.css']
})
export class RandomPickComponent implements OnInit{
  names: string[] = [];
  lanePickList: string[];
  pickOneList: string[];
  pickTwoList: string[];
  role: string[];


  constructor(private namesService: NamesService, private route: Router) {
  }

  ngOnInit(): void {
    this.randomize();
  }

  randomize(): void {
    this.names = this.namesService.retrieveNames();
    if (this.names.length === 0) {
      this.route.navigate(['/entry']);
    } else {
      this.role = ['Top', 'Mid', 'Bot', 'Supp', 'Jg'];
      this.lanePickList = this.shuffleArray(cloneDeep(this.names));
      this.pickOneList = this.shuffleArray(cloneDeep(this.names));
      this.pickTwoList = this.shuffleArrayWithUniqueness(cloneDeep(this.pickOneList));
    }
  }

  clickToRandomize(): void {
    if (this.names.length !== 0) {
      this.lanePickList = [];
      this.pickOneList = [];
      this.pickTwoList = [];
    }

    setTimeout(() => this.randomize(), 10);
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
