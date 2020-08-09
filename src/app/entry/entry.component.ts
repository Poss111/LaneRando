import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Params} from "@angular/router";
import {NamesService} from "../names.service";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  name5: string;
  names: string[] = [];
  disabled: boolean = true;

  constructor(
    private route: ActivatedRoute, private nameService : NamesService) { }

  ngOnInit(): void {
  }

  clicked() {
    this.names.push(this.name1.trim(), this.name2.trim(), this.name3.trim(), this.name4.trim(), this.name5.trim());
    console.log(this.names);
    this.nameService.persistNames(this.names);
  }

  inputUpdate($event: any) {
    if (
      this.name1 &&
      this.name2 &&
      this.name3 &&
      this.name4 &&
      this.name5
    ) {
      this.disabled = false;
    } else {
      this.disabled = true
    }
  }

}
